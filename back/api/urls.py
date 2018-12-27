from django.urls import path

from .views import (ExchangesAPIView, HomeAPIView, MiningAPIView, PostDetail,
                    RecentPosts, TagsView, TeamAPIView, TranslationsView,
                    WalletsAPIView)

urlpatterns = [
    path('team/', TeamAPIView.as_view()),
    path('mining/', MiningAPIView.as_view()),
    path('wallets/', WalletsAPIView.as_view()),
    path('exchanges/', ExchangesAPIView.as_view()),
    path('home/', HomeAPIView.as_view()),
    path('translations/<slug:language>/', TranslationsView.as_view()),
    path('tags/', TagsView.as_view()),
    path('posts/recent/', RecentPosts.as_view()),
    path('posts/<slug:post_slug>/', PostDetail.as_view()),
]
