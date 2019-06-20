from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.generic.base import View

from financial.models import FinancialReport
from team.models import TeamMember
from mining.models import MiningPool, BlockExplorer
from wallets.models import WalletPlatform
from exchanges.models import Exchange
from translations.models import Language
from blog.models import Tag, Post
from partner.models import Partner


class TeamAPIView(View):
    def get(self, request, *args, **kwargs):

        members = TeamMember.objects.exclude(position='Advisor').order_by(
            'order'
        )

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks': [
                    {
                        'prefix': network.network.icon,
                        'url': f'mailto:{network.url}'
                        if network.network.name == 'Email'
                        else network.url,
                    }
                    for network in member.membersocialnetwork_set.filter(
                        active=True
                    )
                ],
            }
            for member in members
        ]

        return JsonResponse(status=200, data=members_list, safe=False)


class AdvisorTeamAPIView(View):
    def get(self, request, *args, **kwargs):

        members = TeamMember.objects.filter(position='Advisor').order_by(
            'order'
        )

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks': [
                    {
                        'prefix': network.network.icon,
                        'url': (
                            'mailto:{}'.format(network.url)
                            if network.network.name == 'Email'
                            else network.url
                        ),
                    }
                    for network in member.membersocialnetwork_set.filter(
                        active=True
                    )
                ],
            }
            for member in members
        ]

        return JsonResponse(status=200, data=members_list, safe=False)


class MiningAPIView(View):
    def get(self, request, *args, **kwargs):

        mining_pools = MiningPool.objects.all()

        block_explorers = BlockExplorer.objects.all()

        mining_pools_list = [
            {'name': mining_pool.name, 'url': mining_pool.url}
            for mining_pool in mining_pools
        ]

        block_explorers_list = [
            {'name': block_explorer.name, 'url': block_explorer.url}
            for block_explorer in block_explorers
        ]

        data = {
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list,
        }

        return JsonResponse(status=200, data=data, safe=False)


class WalletsAPIView(View):
    def get(self, request, *args, **kwargs):

        wallets = WalletPlatform.objects.all()

        wallets_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {'name': wallet.name, 'url': wallet.url}
                    for wallet in wallet_platform.wallet_set.all()
                ],
            }
            for wallet_platform in wallets
        ]

        return JsonResponse(status=200, data=wallets_list, safe=False)


class WalletsColdStackingAPIView(View):
    def get(self, request, *args, **kwargs):

        wallets = WalletPlatform.objects.all()

        wallets_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {'name': wallet.name, 'url': wallet.url}
                    for wallet in wallet_platform.wallet_set.filter(
                        cold_staking=True
                    )
                ],
            }
            for wallet_platform in wallets
        ]

        return JsonResponse(status=200, data=wallets_list, safe=False)


class ExchangesAPIView(View):
    def get(self, request, *args, **kwargs):

        exchanges = Exchange.objects.all().order_by('order')

        exchanges_list = [
            {
                'name': exchange.name,
                'url': exchange.url,
                'logo': f'/{exchange.logo.name}',
                'comingSoon': exchange.coming_soon,
            }
            for exchange in exchanges
        ]

        return JsonResponse(status=200, data=exchanges_list, safe=False)


class FinancialReportAPIView(View):
    def get(self, request, *args, **kwargs):
        reports = FinancialReport.objects.all().order_by('-financial_report')

        reports_list = [
            {
                'name': 'Financial Report {} - {}'.format(
                    report.financial_date.month, report.financial_date.year
                ),
                'file': report.financial_report.get_url(),
            }
            for report in reports
        ]

        return JsonResponse(status=200, data=reports_list, safe=False)


class PartnerAPIView(View):
    def get(self, request, *args, **kwargs):
        partners = Partner.objects.all()

        partners_list = [
            {
                'name': partner.name,
                'url': partner.url,
                'img': partner.image.url,
            }
            for partner in partners
        ]

        return JsonResponse(status=200, data=partners_list, safe=False)


class TranslationsView(View):
    def get(self, request, *args, **kwargs):
        translations = Language.get_translations(kwargs.get('language', 'en'))

        return JsonResponse(status=200, data=translations, safe=False)


class TagsListView(View):
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.all()

        tags_list = [
            {'number': tag.number, 'slug': tag.slug, 'name': tag.name}
            for tag in tags
        ]

        return JsonResponse(status=200, data=tags_list, safe=False)


class TagsDetailView(View):
    def get(self, request, *args, **kwargs):
        tag_slug = kwargs['tag_slug']
        tag = Tag.objects.filter(slug=tag_slug).first()

        if not tag:
            return JsonResponse(
                status=404, data={'error': 'Not found'}, safe=False
            )

        related_posts = Post.objects.filter(tags__in=[tag.id])

        tag_response = {
            'number': tag.number,
            'slug': tag.slug,
            'name': tag.name,
            'relatedPosts': [
                {
                    'id': post.post_id,
                    'title': post.title,
                    'description': post.description,
                    'date': post.date,
                    'link': post.link,
                    'slug': post.slug,
                    'cover': post.cover,
                }
                for post in related_posts
            ],
        }

        return JsonResponse(status=200, data=tag_response, safe=False)


class RecentPosts(View):
    def get(self, request, *args, **kwargs):
        recent_posts = Post.objects.order_by('-date')[:3]

        recent_posts_list = [
            {
                'id': post.post_id,
                'title': post.title,
                'description': post.description,
                'date': post.date,
                'link': post.link,
                'slug': post.slug,
                'cover': post.cover,
            }
            for post in recent_posts
        ]

        return JsonResponse(status=200, data=recent_posts_list, safe=False)


class PostDetailView(View):
    def get(self, request, *args, **kwargs):
        post_slug = kwargs['post_slug']
        post = Post.objects.filter(slug=post_slug).first()

        if not post:
            return JsonResponse(
                status=404, data={'error': 'Not found'}, safe=False
            )

        post_formated = {
            'id': post.post_id,
            'title': post.title,
            'description': post.description,
            'content': post.content,
            'date': post.date,
            'link': post.link,
            'slug': post.slug,
            'cover': post.cover,
            'relatedPosts': [
                {
                    'id': related_post.post_id,
                    'title': related_post.title,
                    'description': related_post.description,
                    'date': related_post.date,
                    'link': related_post.link,
                    'slug': related_post.slug,
                    'cover': related_post.cover,
                }
                for related_post in post.related_posts.all()
            ],
            'tags': [
                {
                    'number': tag.tag.number,
                    'name': tag.tag.name,
                    'slug': tag.tag.slug,
                }
                for tag in post.tags.all()
            ],
        }

        return JsonResponse(status=200, data=post_formated, safe=False)


class PostListView(View):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()

        post_paginator = Paginator(posts, 10)
        page = request.GET.get('page', 1)

        post_paginated = post_paginator.page(page)

        posts_list = [
            {
                'id': post.post_id,
                'title': post.title,
                'description': post.description,
                'date': post.date,
                'link': post.link,
                'slug': post.slug,
                'cover': post.cover,
            }
            for post in post_paginated.object_list
        ]

        return JsonResponse(status=200, data=posts_list, safe=False)


class HomeAPIView(View):
    def get(self, request, *args, **kwargs):
        members = TeamMember.objects.exclude(position='Advisor').order_by(
            'order'
        )
        advisors = TeamMember.objects.filter(position='Advisor').order_by(
            'order'
        )
        mining_pools = MiningPool.objects.all()
        block_explorers = BlockExplorer.objects.all()
        wallets = WalletPlatform.objects.all()
        exchanges = Exchange.objects.order_by('order')
        reports = FinancialReport.objects.all().order_by('-financial_report')
        wallets_cold_stacking = WalletPlatform.objects.filter(
            wallet__cold_staking=True
        ).distinct()
        recent_posts = Post.objects.order_by('-date')[:3]
        partners = Partner.objects.all()

        translations = Language.get_translations(request.GET.get('lang', 'en'))

        recent_posts_list = [
            {
                'id': post.post_id,
                'title': post.title,
                'description': post.description,
                'date': post.date,
                'link': post.link,
                'slug': post.slug,
                'cover': post.cover,
            }
            for post in recent_posts
        ]

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks': [
                    {
                        'prefix': network.network.icon,
                        'url': f'mailto:{network.url}'
                        if network.network.name == 'Email'
                        else network.url,
                    }
                    for network in member.membersocialnetwork_set.filter(
                        active=True
                    )
                ],
            }
            for member in members
        ]

        advisors_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks': [
                    {
                        'prefix': network.network.icon,
                        'url': (
                            'mailto:{}'.format(network.url)
                            if network.network.name == 'Email'
                            else network.url
                        ),
                    }
                    for network in member.membersocialnetwork_set.filter(
                        active=True
                    )
                ],
            }
            for member in advisors
        ]

        mining_pools_list = [
            {'name': mining_pool.name, 'url': mining_pool.url}
            for mining_pool in mining_pools
        ]

        block_explorers_list = [
            {'name': block_explorer.name, 'url': block_explorer.url}
            for block_explorer in block_explorers
        ]

        wallets_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {
                        'name': wallet.name,
                        'url': wallet.url,
                        'cs': wallet.cold_staking,
                    }
                    for wallet in wallet_platform.wallet_set.order_by('id')
                ],
            }
            for wallet_platform in wallets
        ]

        wallets_cold_stacking_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {
                        'name': wallet.name,
                        'url': wallet.url,
                        'cs': wallet.cold_staking,
                    }
                    for wallet in wallet_platform.wallet_set.filter(
                        cold_staking=True
                    ).order_by('id')
                ],
            }
            for wallet_platform in wallets_cold_stacking
        ]

        exchanges_list = [
            {
                'name': exchange.name,
                'url': exchange.url,
                'logo': f'/{exchange.logo.name}',
                'comingSoon': exchange.coming_soon,
            }
            for exchange in exchanges
        ]

        reports_list = [
            {
                'name': 'Financial Report {} - {}'.format(
                    report.financial_date.month, report.financial_date.year
                ),
                'file': report.financial_report.get_url(),
            }
            for report in reports
        ]

        partners_list = [
            {
                'name': partner.name,
                'url': partner.url,
                'img': partner.image.url,
            }
            for partner in partners
        ]

        data = {
            'teamMembers': members_list,
            'advisorMembers': advisors_list,
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list,
            'wallets': wallets_list,
            'walletsColdStacking': wallets_cold_stacking_list,
            'exchanges': exchanges_list,
            'translations': translations,
            'recentPosts': recent_posts_list,
            'financialReports': reports_list,
            'partners': partners_list,
        }

        return JsonResponse(status=200, data=data, safe=False)
