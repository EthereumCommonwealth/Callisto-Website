import json

from celery import shared_task
from django.conf import settings
from requests import Session
from requests import Timeout, TooManyRedirects

from .models import PriceHistory


@shared_task(name='price_recording.get_api_data')
def get_api_data():
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    parameters_usd = {
        'id': '2757'
    }
    parameters_btc = {
        'id': '2757',
        'convert': 'BTC'
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': settings.COINMARKETCAP_API_KEY,
    }

    session = Session()
    session.headers.update(headers)

    try:
        response_usd = session.get(url, params=parameters_usd)
        response_btc = session.get(url, params=parameters_btc)
        data_usd = json.loads(response_usd.text)
        data_btc = json.loads(response_btc.text)
        btc_data = data_btc.get('data').get('2757').get('quote').get('BTC')
        usd_data = data_usd.get('data').get('2757').get('quote').get('USD')
        clo_data = data_usd.get('data').get('2757')

        PriceHistory.objects.create(
            circulating_supply=clo_data.get('circulating_supply'),
            total_supply=clo_data.get('total_supply'),
            max_supply=clo_data.get('max_supply'),
            cmc_rank=clo_data.get('cmc_rank'),
            price_usd=usd_data.get('price'),
            volume_24h_usd=usd_data.get('volume_24h'),
            percent_change_1h_usd=usd_data.get('percent_change_1h'),
            percent_change_24h_usd=usd_data.get('percent_change_24h'),
            percent_change_7d_usd=usd_data.get('percent_change_7d'),
            market_cap_usd=usd_data.get('market_cap'),
            price_btc=btc_data.get('price'),
            volume_24h_btc=btc_data.get('volume_24h'),
            percent_change_1h_btc=btc_data.get('percent_change_1h'),
            percent_change_24h_btc=btc_data.get('percent_change_24h'),
            percent_change_7d_btc=btc_data.get('percent_change_7d'),
            market_cap_btc=btc_data.get('market_cap'),
        )

    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)
