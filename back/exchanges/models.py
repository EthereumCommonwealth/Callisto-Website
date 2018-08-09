from django.db import models

def upload_exchabge_icon(instance, filename):
    return f'image/exchanges/{filename}'

class Exchange(models.Model):
    name = models.CharField(
        max_length=50
    )
    icon = models.FileField(
        upload_to=upload_exchabge_icon
    )
    url = models.URLField()
    order = models.PositiveSmallIntegerField(
        blank=True,
        null=True
    )

    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        if not self.order:
            last = Exchange.objects.all().order_by('order').last()

            self.order = last.order + 1

        super(Exchange, self).save(*args, **kwargs)
