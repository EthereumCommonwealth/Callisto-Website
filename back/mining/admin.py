from django.contrib import admin

from .models import MiningPool, BlockExplorer


admin.site.register(MiningPool)
admin.site.register(BlockExplorer)
