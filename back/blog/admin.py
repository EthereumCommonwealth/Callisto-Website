from django.contrib import admin
from .models import Tag, Post, PostTag


class TagAdmin(admin.ModelAdmin):
    list_display = ('name', )


class PostTagInline(admin.TabularInline):
    model = PostTag


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', )
    inlines = [
        PostTagInline,
    ]


admin.site.register(Tag, TagAdmin)
admin.site.register(Post, PostAdmin)
