from celery import shared_task
from wallets.models import Wallet, WalletPlatform

@shared_task
def test_func():
    p = WalletPlatform.objects.first()
    Wallet.objects.create(
        platform=p,
        name='testtt',
        url='https://github.com'
    )
    print('hola')