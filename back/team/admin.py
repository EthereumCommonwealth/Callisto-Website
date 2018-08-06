from django.contrib import admin

from .models import SocialNetwork, MemberTeam, MemberSocialNetwork

# Register your models here.


class MemberSocialNetworkInLine(admin.TabularInline):
    """
    Inline admin for Social Network relation
    """
    model = MemberSocialNetwork


class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')
    inlines = [
        MemberSocialNetworkInLine
    ]


admin.site.register(MemberTeam, MemberAdmin)
admin.site.register(SocialNetwork)
