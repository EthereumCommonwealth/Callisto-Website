from django.contrib import admin

from .models import WalletPlatform, Wallet


class WalletInLine(admin.TabularInline):
    """
    Inline admin for wallet relation
    """
    model = Wallet


class WalletPlatformAdmin(admin.ModelAdmin):
    list_display = ('name', )
    inlines = [
        WalletInLine
    ]


admin.site.register(WalletPlatform, WalletPlatformAdmin)
