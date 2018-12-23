import json
import os

from django.conf import settings
from translations.models import TranslationKey


def get_translations():
    with open(os.path.join(settings.BASE_DIR,"migration/translations/roadmap2019.json"), encoding='utf-8') as file:
        data = json.load(file)
    return data

def run():
    translations = get_translations()

    for key, translation in translations.items():
        key = TranslationKey.objects.create(
            slug=key,
            default_translation=translation
        )