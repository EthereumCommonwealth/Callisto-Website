import json

from django.contrib import admin
from django.http import HttpResponse

from .models import Language, LanguageTranslation, TranslationKey


class TranslationInline(admin.TabularInline):
    model = LanguageTranslation


class LanguageAdmin(admin.ModelAdmin):
    list_display = ('language_name', )
    # inlines = [
    #     TranslationInline,
    # ]
    actions = ['generate_json']

    def generate_json(self, request, queryset):
        with open('lang.json', 'w') as lang:
            for obj in queryset:
                response = HttpResponse(content_type='application/json')
                response['Content-Disposition'] = 'attachment; filename="{}_lang.json"'.format(
                    obj.slug)
                data = {
                    obj.slug: obj.translation
                }
                json.dump(data, response, indent=2)

                return response


class TranslationKeyAdmin(admin.ModelAdmin):
    list_display = ('slug', )


admin.site.register(Language, LanguageAdmin)
admin.site.register(TranslationKey, TranslationKeyAdmin)
