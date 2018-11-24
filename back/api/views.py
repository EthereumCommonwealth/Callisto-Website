from django.http import JsonResponse
from django.views.generic.base import View

from team.models import TeamMember
from mining.models import MiningPool, BlockExplorer
from wallets.models import WalletPlatform
from exchanges.models import Exchange
from translations.models import Language


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
        language_slug = request.GET.get('lang', 'en')
        language = Language.objects.filter(
            slug=language_slug)
        if not language.exists():
            language = Language.objects.filter(
                slug='en')

        language = language.first()

        translations = [
            {
                'slug': language.slug,
                'languageName': language.language_name,
                'keys': [
                    {
                        key.key.slug: key.translation
                    } for key in language.language.all()
                ]
            }
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
                        'url': wallet.url
                    } for wallet in wallet_platform.wallet_set.all().order_by('id')
                ]
            } for wallet_platform in wallets
        ]

        cs_wallets_list = [
            {
                'title': wallet.name,
                'icon': f'/{wallet.icon.name}',
                'options': [
                    {
                        'name': wallet.name,
                        'url': wallet.url
                    } for wallet in wallet.wallet_set.filter(cold_staking=True)
                ]
            } for wallet in cold_staking_wallets
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
            'csWallets': cs_wallets_list,
            'exchanges': exchanges_list,
            'translations': translations
        }

        return JsonResponse(status=200, data=data, safe=False)


class TranslationsView(View):

    def get(self, request, *args, **kwargs):

        language_slug = request.GET.get('lang', 'en')
        language = Language.objects.filter(
            slug=language_slug)
        if not language.exists():
            language = Language.objects.filter(
                slug='en')

        language = language.first()

        translations = [
            {
                'slug': language.slug,
                'languageName': language.language_name,
                'keys': [
                    {
                        key.key.slug: key.translation
                    } for key in language.language.all()
                ]
            }
        ]

        return JsonResponse(status=200, data=translations, safe=False)