from django.db import models


class ConvertPrice(models.Model):

    open_price = models.FloatField()
    close_price = models.FloatField()
    low_price = models.FloatField()
    high_price = models.FloatField()
    volume = models.FloatField()

    timestamp = models.DateTimeField()


class Price(models.Model):
    open_time = models.DateTimeField()
    close_time = models.DateTimeField()

    usd_convertion = models.ForeignKey(
        ConvertPrice, related_name='usd', on_delete=models.CASCADE)

    btc_convertion = models.ForeignKey(
        ConvertPrice, related_name='btc', on_delete=models.CASCADE)
