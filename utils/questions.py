import random
from django.db import models
from questions.models import Question

def get_next_question(player):
    question_or_qs = Question.objects.filter(level=player.current_question)
    if isinstance(question_or_qs, Question):
        return question_or_qs[0]
    if isinstance(question_or_qs, models.QuerySet):
        random.seed(player.pk)
        return question_or_qs[random.randint(0, question_or_qs.count()-1)]
