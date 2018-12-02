import os

from celery import Celery
from celery.schedules import crontab
from django.conf import settings


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'callisto.settings.dev')

app = Celery('callisto')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks()

app.conf.beat_schedule = {
    'wallets.create': {
        'task': 'wallets.create',
        'schedule': 5
    }
}
