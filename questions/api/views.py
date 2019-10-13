from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from utils.permissions import IsPaid
from utils.badges import should_award_badge
from questions.models import Question
from accounts.models import Player
from badges.models import Badge
from datetime import datetime
from django.db.models import Count

from questions.api.serializers import (
    PlayerInfoSerializer,
    LeaderboardSerializer,
)

from badges.api.serializers import BadgesSerializer

class GetQuestion(views.APIView):
    permission_classes = [IsAuthenticated, IsPaid]

    def get(self, request, format=None):
        player = request.user
        self.check_object_permissions(request, player)
        
        tz_info = player.unlock_time.tzinfo
        time_left = (player.unlock_time - datetime.now(tz_info)).total_seconds()
        q_text = ""
        if time_left < 0:
            time_left = 0

            # TODO: add utility function for fetching question.
            q = Question.objects.get(level=player.current_question)
            q_text = q.question
        
        player_info_serializer = PlayerInfoSerializer(player)
        queryset = player.badges.annotate(total=Count('badge_type'))
        badge_serializer = BadgesSerializer(queryset, many=True)

        return Response({
                "player_info": player_info_serializer.data,
                "isTimeLeft": bool(time_left),
                "badges": badge_serializer.data,
                "detail": {
                    "question": q_text,
                    "time_left": time_left,
                }
                
            })

    def post(self, request, format=None):
        player = request.user
        self.check_object_permissions(request, player)

        tz_info = player.unlock_time.tzinfo
        time_left = (player.unlock_time - datetime.now(tz_info)).total_seconds()

        if time_left >= 0:
            return Response({
                "isTimeLeft": True,
                "detail": {
                    "question": "",
                    "time_left": time_left,
                }
            })

        question = Question.objects.get(level=player.current_question)

        if request.data['answer'].lower() == question.tech_answer:
            if question.is_level_solved is False:
                # TODO: award "active" badge to this player and mark
                # all others "inactive".

                # Update questions to mark that the level is solved.
                Question.objects.filter(level=player.current_question)\
                    .update(is_level_solved=True)
                badge = Badge.objects.get(badge_type="6")
                print("AWARDING...")
                badge.award_to(player)

            player.current_question = player.current_question + 1
            player.score = player.score + 10
            player.unlock_time = datetime.now() + question.wait_duration
            player.last_solved = datetime.now()

            # Award badges
            should_award, badge_type = should_award_badge(player)
            if should_award:
                badge = Badge.objects.get(badge_type=badge_type)
                badge.award_to(player)
            player.save()

            
            is_correct = True

        elif request.data['answer'].lower() == question.nontech_answer:
            if question.is_level_solved is False:
                # TODO: award "active" badge to this player and mark
                # all others "inactive".

                # Update questions to mark that the level is solved.
                Question.objects.filter(level=player.current_question)\
                    .update(is_level_solved=True)
                badge = Badge.objects.get(badge_type="4")
                print("AWARDING...")
                badge.award_to(player)
            
            player.current_question = player.current_question + 1
            player.score = player.score + 5
            player.unlock_time = datetime.now() + question.wait_duration
            player.last_solved = datetime.now()
            
            # Award badges
            should_award, badge_type = should_award_badge(player)
            if should_award:
                badge = Badge.objects.get(badge_type=badge_type)
                badge.award_to(player)
            player.save()

            is_correct = True
        else:
            is_correct = False

        return Response({"success": is_correct})

@api_view(['GET'])
def leaderboard(request):
    """
        Returns a list of players with highest score. The tie is broken
        by the player who has solved first.
    """

    queryset = Player.objects.order_by("-score", "last_solved")\
        .filter(is_superuser=False, is_paid=True)
    serializer = LeaderboardSerializer(queryset, many=True)

    return Response(serializer.data)
