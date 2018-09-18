from django.db import models


class SocialNetwork(models.Model):
    name = models.CharField(
        max_length=50
    )
    icon = models.CharField(
        max_length=50
    )

    def __str__(self):
        return f'{self.name}'


class MemberSocialNetwork(models.Model):
    member = models.ForeignKey(
        'TeamMember',
        on_delete=models.CASCADE
    )
    network = models.ForeignKey(
        'SocialNetwork',
        on_delete=models.CASCADE
    )
    url = models.CharField(
        max_length=200
    )
    active = models.BooleanField(
        default=True
    )

def upload_avatar(instance, filename):
    return f'image/avatars/{filename}'


class TeamMember(models.Model):
    avatar = models.ImageField(
        upload_to=upload_avatar
    )
    name = models.CharField(
        max_length=100
    )
    position = models.CharField(
        max_length=100
    )
    bio = models.TextField()
    social_network = models.ManyToManyField(
        'SocialNetwork',
        through='MemberSocialNetwork'
    )
    order = models.IntegerField(
        unique=True,
        blank=True,
        null=True
    )

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        if not self.order:
            last_order = TeamMember.objects.order_by('-order').first()

            order = 0
            if last_order:
                order = last_order.order
            self.order = order + 1
        return super(TeamMember, self).save(force_insert, force_update, using,
                                            update_fields)

