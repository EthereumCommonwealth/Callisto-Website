import json
import os

from django.conf import settings
from translations.models import Language, LanguageTranslation, TranslationKey


def get_translations(lang):
    with open(os.path.join(settings.BASE_DIR,"migration/translations/{}_translations.json".format(lang)), encoding='utf-8') as file:
        data = json.load(file)
    return data


def run():
    """
    Initial migration for translations
    """
    default_language = 'en'
    languages = ['de', 'es', 'fr', 'ko', 'ru', 'zh']

    translations_en = get_translations(default_language)

    for key, translation in translations_en.items():
        key = TranslationKey.objects.create(
            slug=key,
            default_translation=translation
        )

    Language.objects.create(
        slug=default_language,
        language_name='English'
    )

    for lang in languages:
        language = Language.objects.create(
            slug=lang,
            language_name=lang
        )
        translations = get_translations(lang)
        for key, translation in translations.items():
            key = TranslationKey.objects.get(
                slug=key)
            lang_translation = LanguageTranslation.objects.get(
                language=language,
                key=key
            )
            lang_translation.translation = translation
            lang_translation.save()


