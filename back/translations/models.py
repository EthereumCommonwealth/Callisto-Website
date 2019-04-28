import json

from django.contrib.postgres.fields import JSONField
from django.core.cache import cache
from django.db import models
from django.contrib.postgres.forms.jsonb import (
    InvalidJSONInput,
    JSONField as JSONFormField,
)


class UTF8JSONFormField(JSONFormField):

    def prepare_value(self, value):
        if isinstance(value, InvalidJSONInput):
            return value
        return json.dumps(value, ensure_ascii=False, indent=2)


class UTF8JSONField(JSONField):
    """JSONField for postgres databases.

    Displays UTF-8 characters directly in the admin, i.e. äöü instead of
    unicode escape sequences.
    """

    def formfield(self, **kwargs):
        return super().formfield(**{
            **{'form_class': UTF8JSONFormField},
            **kwargs,
        })


class TranslationKey(models.Model):
    slug = models.CharField(max_length=50)
    default_translation = models.TextField()

    def __str__(self):
        return self.slug

    def save(self, *args, **kwargs):

        if self.pk:
            super(TranslationKey, self).save(*args, **kwargs)
            return

        super(TranslationKey, self).save(*args, **kwargs)
        languages = Language.objects.all()

        for language in languages:
            translation = LanguageTranslation.objects.create(
                key=self,
                language=language,
                translation=self.default_translation
            )
            cache_key = "translations_{}".format(language.slug)
            cache.delete(cache_key)


class Language(models.Model):
    language_name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=20)
    keys = models.ManyToManyField(
        TranslationKey, through="LanguageTranslation")
    translation = UTF8JSONField(blank=True, null=True)

    # def save(self, *args, **kwargs):
    #     if self.pk:
    #         return
    #
    #     super(Language, self).save(*args, **kwargs)
    #     keys = TranslationKey.objects.all()
    #
    #     for key in keys:
    #         translation = LanguageTranslation.objects.create(
    #             language=self,
    #             key=key,
    #             translation=key.default_translation
    #         )

    def __str__(self):
        return self.language_name

    @classmethod
    def get_translations(cls, language_slug):
        # cache_key = "translations_{}".format(language_slug)
        #
        # translations = cache.get(cache_key)
        # if translations:
        #     return translations
        #
        language = cls.objects.filter(
            slug=language_slug).first()
        if not language:
            language = cls.objects.filter(
                slug='en').first()
        #
        # language = language.first()
        # keys = {}
        # for key in language.translations.all():
        #     keys[key.key.slug] = key.translation
        #
        # translations = {
        #     'slug': language.slug,
        #     'languageName': language.language_name,
        #     'keys': keys
        # }
        # cache_key = "translations_{}".format(language.slug)
        # cache.set(cache_key, translations, 86400)
        # return translations
        translations = {
            'slug': language.slug,
            'languageName': language.language_name,
            'keys': language.translation
        }

        return translations


class LanguageTranslation(models.Model):
    language = models.ForeignKey(
        Language, related_name='translations', on_delete=models.CASCADE)
    key = models.ForeignKey(
        TranslationKey, related_name='key', on_delete=models.CASCADE)
    translation = models.TextField(default=None, blank=True)

    def save(self, *args, **kwargs):
        cache_key = "translations_{}".format(self.language.slug)
        cache.delete(cache_key)
        super(LanguageTranslation, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.language.slug} - {self.key.slug}'
