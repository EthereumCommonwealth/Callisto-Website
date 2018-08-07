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
        'MemberTeam',
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
    return '{}/{}/{}'.format('image', 'avatars', filename)


class MemberTeam(models.Model):
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
