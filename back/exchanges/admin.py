from django.contrib import admin
from django.utils.html import format_html

from .models import Exchange


class ExchangeAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'get_icon', 'order')
    list_editable = ('order',)

    def get_icon(self, instance):
        return format_html(
            f'<div style="background: #34c88a;"><img src="/media/{instance.logo}" alt="{instance.name}" /></div>'
        )

    get_icon.short_description = 'Logo'

admin.site.register(Exchange, ExchangeAdmin)
