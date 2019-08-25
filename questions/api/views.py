from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from questions.models import Question

from questions.api.serializers import (
    QuestionDetailSerializer,
)

class GetQuestion(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        u = request.user
        player = u.profile
        question = Question.objects.get(level=player.current_question)
        serializer = QuestionDetailSerializer(question)
        return Response(serializer.data)

class SubmitQuestion(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        u = request.user
        player = u.profile
        print("{} entered answer {}".format(u.username, request.data['answer']))
        question = Question.objects.get(level=player.current_question)
        if (request.data['answer'] == question.answer):
            player.current_question = player.current_question + 1
            player.save()
            is_correct = True
        else:
            is_correct = False
        return Response({"success": is_correct})