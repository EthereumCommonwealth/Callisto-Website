from django.urls import path

from .views import (
    ExchangesAPIView, HomeAPIView, MiningAPIView, TeamAPIView,
    TranslationsView, WalletsAPIView, FinancialReportAPIView,
    WalletsColdStackingAPIView, AdvisorTeamAPIView, PartnerAPIView
)

urlpatterns = [
    path('team/', TeamAPIView.as_view()),
    path('mining/', MiningAPIView.as_view()),
    path('wallets/', WalletsAPIView.as_view()),
    path('wallets-cold-stacking/', WalletsColdStackingAPIView.as_view()),
    path('exchanges/', ExchangesAPIView.as_view()),
    path('home/', HomeAPIView.as_view()),
    path('translations/<slug:language>/', TranslationsView.as_view()),
    path('financial/', FinancialReportAPIView.as_view()),
    path('advisor-team/', AdvisorTeamAPIView.as_view()),
    path('partners', PartnerAPIView.as_view())
]
