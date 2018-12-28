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
    dsn='https://a66f138a1b99472787fed7535b933bb3@sentry.io/1361570',
    integrations=[DjangoIntegration()]
)
