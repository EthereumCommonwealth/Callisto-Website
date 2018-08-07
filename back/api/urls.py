from django.urls import path

from .views import TeamAPIView, MiningAPIView

urlpatterns = [
    path('team/', TeamAPIView.as_view()),
    path('mining/', MiningAPIView.as_view()),
]
