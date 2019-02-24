from django.db import models


def upload_partner_icon(instance, filename):
    return f'image/partner/{filename}'


class Partner(models.Model):
    name = models.CharField(
        max_length=50
    )
    image = models.FileField(
        upload_to=upload_partner_icon
    )
    url = models.URLField()

    def __str__(self):
        return f'{self.name}'
