from django.contrib import admin

from .models import SocialNetwork, TeamMember, MemberSocialNetwork

# Register your models here.


class MemberSocialNetworkInLine(admin.TabularInline):
    """
    Inline admin for Social Network relation
    """
    model = MemberSocialNetwork


class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'order')
    ordering = ('order', )
    inlines = [
        MemberSocialNetworkInLine
    ]


admin.site.register(TeamMember, MemberAdmin)
admin.site.register(SocialNetwork)
