from django.urls import path

from .views import (ExchangesAPIView, HomeAPIView, MiningAPIView, TeamAPIView,
                    TranslationsView, WalletsAPIView)

urlpatterns = [
    path('team/', TeamAPIView.as_view()),
    path('mining/', MiningAPIView.as_view()),
    path('wallets/', WalletsAPIView.as_view()),
    path('exchanges/', ExchangesAPIView.as_view()),
    path('home/', HomeAPIView.as_view()),
    path('translations/', TranslationsView.as_view())
]
