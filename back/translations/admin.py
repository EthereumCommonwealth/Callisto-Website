from django.contrib import admin

from .models import Language, LanguageTranslation, TranslationKey


class TranslationInline(admin.TabularInline):
    model = LanguageTranslation


class LanguageAdmin(admin.ModelAdmin):
    list_display = ('language_name', )
    inlines = [
        TranslationInline,
    ]


class TranslationKeyAdmin(admin.ModelAdmin):
    list_display = ('slug', )


admin.site.register(Language, LanguageAdmin)
admin.site.register(TranslationKey, TranslationKeyAdmin)
