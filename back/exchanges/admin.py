from django.contrib import admin
from django.utils.html import format_html

from .models import Exchange


class ExchangeAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'get_icon', 'order', 'coming_soon')
    list_editable = ('order', 'coming_soon')

    def get_icon(self, instance):
        return format_html(
            f'<div style="background: #34c88a;text-align: center;padding: 0.5rem;"><img src="/media/{instance.logo}" alt="{instance.name}" /></div>'
        )

    get_icon.short_description = 'Logo'

admin.site.register(Exchange, ExchangeAdmin)
