from rest_framework import serializers
# from questions.models import Question
from accounts.models import Player

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
        return {
            'player_name': obj.username,
            'score': obj.score,
        }
