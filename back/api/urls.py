from django.urls import path

from .views import TeamAPIView

urlpatterns = [
    path('team/', TeamAPIView.as_view()),
]
