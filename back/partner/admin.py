from django.contrib import admin

from .models import Partner


class PartnerModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'url')


admin.site.register(Partner, PartnerModelAdmin)
