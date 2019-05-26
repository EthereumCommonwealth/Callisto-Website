from django.db import models


class PriceHistory(models.Model):
    circulating_supply = models.FloatField()
    total_supply = models.FloatField()
    max_supply = models.FloatField()
    cmc_rank = models.FloatField()
    price_usd = models.FloatField()
    volume_24h_usd = models.FloatField()
    percent_change_1h_usd = models.FloatField()
    percent_change_24h_usd = models.FloatField()
    percent_change_7d_usd = models.FloatField()
    market_cap_usd = models.FloatField()
    price_btc = models.FloatField()
    volume_24h_btc = models.FloatField()
    percent_change_1h_btc = models.FloatField()
    percent_change_24h_btc = models.FloatField()
    percent_change_7d_btc = models.FloatField()
    market_cap_btc = models.FloatField()
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )
