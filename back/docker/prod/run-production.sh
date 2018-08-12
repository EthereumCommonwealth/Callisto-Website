#!/usr/bin/env bash

python manage.py migrate --settings=callisto.settings.prod
python manage.py collectstatic --settings=callisto.settings.prod

gunicorn -w 2 callisto.wsgi:application -b 0.0.0.0:8000  --log-level info --keep-alive 200 --env DJANGO_SETTINGS_MODULE=callisto.settings.prod
