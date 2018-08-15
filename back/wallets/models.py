from django.db import models

def upload_platform_icon(instance, filename):
    return f'image/wallets/{filename}'

class WalletPlatform(models.Model):
    name = models.CharField(
        max_length=50
    )
    icon = models.FileField(
        upload_to=upload_platform_icon
    )

    def __str__(self):
        return f'{self.name}'


class Wallet(models.Model):
    platform = models.ForeignKey(
        WalletPlatform,
        on_delete=models.PROTECT
    )
    name = models.CharField(
        max_length=50
    )
    url = models.CharField(
        max_length=255
    )

    def __str__(self):
        return f'{self.name} - {self.platform.name}'
