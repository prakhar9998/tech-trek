from rest_framework import serializers
from badges.models import Badge, BadgeToPlayer

class BadgesSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        return {
            "badge": obj.badge_type,
            "count": obj.total
        }
