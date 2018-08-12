#!/usr/bin/env bash

python manage.py migrate

gunicorn -w 2 callisto.wsgi:application -b 0.0.0.0:8000  --log-level info --keep-alive 200 --env DJANGO_SETTINGS_MODULE=callisto.settings.production
