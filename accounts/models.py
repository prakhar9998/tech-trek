from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.utils import timezone
from django.db.models.signals import pre_save
from django.dispatch import receiver
# from utils.badges import award_badge

class Player(AbstractUser):
    is_paid = models.BooleanField(default=False)
    last_solved = models.DateTimeField(default=timezone.now)
    unlock_time = models.DateTimeField(default=timezone.now)
    current_question = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    avatar = models.ImageField(default="1.png")
    avatar_no = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.username
    @property
    def num_questions_solved(self):
        return self.current_question - 1

    def _award_badge(self, should_award, badge):
        # should_award, badge = should_award_badge(player)
        print("BADGE INFO", should_award, badge)
        if should_award:
            return badge.award_to(self)
