from django.http import JsonResponse
from django.views.generic.base import View

from team.models import TeamMember
from mining.models import MiningPool, BlockExplorer
from wallets.models import WalletPlatform
from exchanges.models import Exchange
from translations.models import Language
from blog.models import Tag, Post


class TeamAPIView(View):
    def get(self, request, *args, **kwargs):

        members = TeamMember.objects.order_by('order')

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks':
                    [
                        {
                            'prefix': network.network.icon,
                            'url': 'mailto:{}'.format(network.url) if network.network.name == 'Email' else network.url
                        } for network in member.membersocialnetwork_set.filter(
                            active=True)
                    ]

            } for member in members
        ]

        return JsonResponse(status=200, data=members_list, safe=False)


class MiningAPIView(View):
    def get(self, request, *args, **kwargs):

        mining_pools = MiningPool.objects.all()

        block_explorers = BlockExplorer.objects.all()

        mining_pools_list = [
            {
                'name': mining_pool.name,
                'url': mining_pool.url
            } for mining_pool in mining_pools
        ]

        block_explorers_list = [
            {
                'name': block_explorer.name,
                'url': block_explorer.url
            } for block_explorer in block_explorers
        ]

        data = {
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list
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
                    {
                        'name': wallet.name,
                        'url': wallet.url
                    } for wallet in wallet_platform.wallet_set.all()
                ]
            } for wallet_platform in wallets
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
                'comingSoon': exchange.coming_soon
            } for exchange in exchanges
        ]

        return JsonResponse(status=200, data=exchanges_list, safe=False)


class HomeAPIView(View):
    def get(self, request, *args, **kwargs):
        members = TeamMember.objects.order_by('order')
        mining_pools = MiningPool.objects.all()
        block_explorers = BlockExplorer.objects.all()
        wallets = WalletPlatform.objects.all()
        exchanges = Exchange.objects.order_by('order')
        cold_staking_wallets = WalletPlatform.objects.filter(
            wallet__cold_staking=True
        )
        recent_posts = Post.objects.order_by('-date')[:3]

        translations = Language.get_translations(
            request.GET.get('lang', 'en'))

        recent_posts_list = [
            {
                'id': post.post_id,
                'title': post.title,
                'description': post.description,
                'date': post.date,
                'link': post.link,
                'slug': post.slug,
                'cover': post.cover
            } for post in recent_posts
        ]

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks':
                    [
                        {
                            'prefix': network.network.icon,
                            'url': 'mailto:{}'.format(network.url) if network.network.name == 'Email' else network.url
                        } for network in member.membersocialnetwork_set.filter(
                            active=True)
                    ]

            } for member in members
        ]

        mining_pools_list = [
            {
                'name': mining_pool.name,
                'url': mining_pool.url
            } for mining_pool in mining_pools
        ]

        block_explorers_list = [
            {
                'name': block_explorer.name,
                'url': block_explorer.url
            } for block_explorer in block_explorers
        ]

        wallets_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {
                        'name': wallet.name,
                        'url': wallet.url,
                        'cs': wallet.cold_staking
                    } for wallet in wallet_platform.wallet_set.all().order_by('id')
                ]
            } for wallet_platform in wallets
        ]

        exchanges_list = [
            {
                'name': exchange.name,
                'url': exchange.url,
                'logo': f'/{exchange.logo.name}',
                'comingSoon': exchange.coming_soon
            } for exchange in exchanges
        ]

        data = {
            'teamMembers': members_list,
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list,
            'wallets': wallets_list,
            'exchanges': exchanges_list,
            'translations': translations,
            'recentPosts': recent_posts_list,
        }

        return JsonResponse(status=200, data=data, safe=False)


class TranslationsView(View):

    def get(self, request, *args, **kwargs):
        translations = Language.get_translations(
            kwargs.get('language', 'en'))

        return JsonResponse(status=200, data=translations, safe=False)


class TagsView(View):

    def get(self, request, *args, **kwargs):
        tags = Tag.objects.all()

        tags_list = [
            {
                'number': tag.number,
                'slug': tag.slug,
                'name': tag.name,
            } for tag in tags
        ]

        return JsonResponse(status=200, data=tags_list, safe=False)


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
                'cover': post.cover
            } for post in recent_posts
        ]

        return JsonResponse(status=200, data=recent_posts_list, safe=False)


class PostDetail(View):
    def get(self, request, *args, **kwargs):
        import ipdb; ipdb.set_trace()
        post_slug = kwargs['post_slug']
        post = Post.objects.filter(slug=post_slug).first()

        if not post:
            return JsonResponse(status=404,
                data={'error': 'Not found'}, safe=False)

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
                    'cover': related_post.cover
                } for related_post in post.related_posts.all()
            ],
            'tags': [
                {
                    'number': tag.tag.number,
                    'name': tag.tag.name,
                    'slug': tag.tag.slug
                } for tag in post.tags.all()
            ]
        }

        return JsonResponse(status=200, data=post_formated, safe=False)
        
