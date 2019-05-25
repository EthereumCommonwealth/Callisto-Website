import os

from celery import Celery
from celery.schedules import crontab
from django.apps import AppConfig
from django.conf import settings


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'callisto.settings.dev')

app = Celery('callisto')


class CeleryConfig(AppConfig):
    name = 'taskapp'
    verbose_name = 'Celery Config'

    def ready(self):
        app.config_from_object('django.conf:settings')
        app.autodiscover_tasks(lambda: settings.INSTALLED_APPS, force=True)


app.conf.beat_schedule = {
    'get_api_data': {
        'task': 'price_recording.get_api_data',
        'schedule': crontab(minute='*/15')
    },
}
