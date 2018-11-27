from celery import shared_task
from .models import Wallet, WalletPlatform


@shared_task(name="wallets.create")
def test_func():
    print('hello')