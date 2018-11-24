from django.db import models


class TranslationKey(models.Model):
    slug = models.SlugField(max_length=50)
    default_translation = models.TextField()

    def __str__(self):
        return self.slug


class Language(models.Model):
    language_name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=20)
    keys = models.ManyToManyField(
        TranslationKey, through="LanguageTranslation")

    def save(self, *args, **kwargs):
        if self.pk:
            return

        super(Language, self).save(*args, **kwargs)
        keys = TranslationKey.objects.all()

        for key in keys:
            translation = LanguageTranslation.objects.create(
                language=self,
                key=key,
                translation=key.default_translation
            )

    def __str__(self):
        return self.language_name


class LanguageTranslation(models.Model):
    language = models.ForeignKey(
        Language, related_name='language', on_delete=models.CASCADE)
    key = models.ForeignKey(
        TranslationKey, related_name='key', on_delete=models.CASCADE)
    translation = models.TextField(default=None, blank=True)

    def __str__(self):
        return f'{self.language.slug} - {self.key.slug}'
