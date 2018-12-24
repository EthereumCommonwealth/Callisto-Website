from .base import *
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS += [
    'gunicorn'
]

STATIC_URL = '/clo-admin/static/'

# Sentry Configuration
sentry_sdk.init(
    dsn='',
    integrations=[DjangoIntegration()]
)
