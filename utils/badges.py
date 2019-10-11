from accounts.models import Player
from badges.models import Badge, BadgeToPlayer

def get_total_badges(player):
    assert isinstance(player, Player)
    badges_list = []
    for b in Badge.objects.all():
        badges_list.append(b.get_badge_count(player))
    return badges_list

# def should_award_badge(self, player):
#     if isinstance(player, Player):
#         if player.num_questions_solved() == 5:
