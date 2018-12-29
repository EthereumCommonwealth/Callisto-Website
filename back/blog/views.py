import json

from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View

from .tasks import create_local_post


@method_decorator(csrf_exempt, name='dispatch')
class PostWebhookView(View):
    def post(self, request, *args, **kwargs):
        post = json.loads(request.body.decode('utf-8'))
        create_local_post(post['ID'])

        return JsonResponse(status=200, data=[], safe=False)
