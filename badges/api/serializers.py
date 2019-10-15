from rest_framework import serializers
from badges.models import Badge, BadgeToPlayer

class BadgeToPlayerSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        return {
            "badge": obj.badge.badge_type
        }
