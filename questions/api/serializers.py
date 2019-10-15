from rest_framework import serializers
# from questions.models import Question
from accounts.models import Player
from badges.api.serializers import BadgeToPlayerSerializer
from django.db.models import Count
from badges.models import BadgeToPlayer

class PlayerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'username',
            'is_paid',
            'current_question',
            'score',
            'avatar_no',
        ]

class LeaderboardSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        queryset = BadgeToPlayer.objects.filter(player=obj, is_active=True)
        badge_serializer = BadgeToPlayerSerializer(queryset, many=True)
        return {
            'player_name': obj.username,
            'score': obj.score,
            'email': obj.email,
            'avatar_no': obj.avatar_no,
            'badges': badge_serializer.data,
        }
