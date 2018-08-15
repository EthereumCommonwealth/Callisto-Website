from django.db import models


class MiningPool(models.Model):
    name = models.CharField(
        max_length=50
    )
    url = models.URLField()

    def __str__(self):
        return f'{self.name}'


class BlockExplorer(models.Model):
    name = models.CharField(
        max_length=50
    )
    url = models.URLField()

    def __str__(self):
        return f'{self.name}'
