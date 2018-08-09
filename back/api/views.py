from django.http import JsonResponse
from django.views.generic.base import View

from team.models import TeamMember
from mining.models import MiningPool, BlockExplorer
from wallets.models import WalletPlatform
from exchanges.models import Exchange


class TeamAPIView(View):
    def get(self, request, *args, **kwargs):

        members = TeamMember.objects.all()

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks':
                    [
                        {
                            'prefix': f'fa {network.network.icon}',
                            'url': network.url
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
                'icon': f'/{exchange.icon.name}'
            } for exchange in exchanges
        ]

        return JsonResponse(status=200, data=exchanges_list, safe=False)


class HomeAPIView(View):
    def get(self, request, *args, **kwargs):
        members = TeamMember.objects.all()
        mining_pools = MiningPool.objects.all()
        block_explorers = BlockExplorer.objects.all()
        wallets = WalletPlatform.objects.all()
        exchanges = Exchange.objects.all().order_by('order')

        members_list = [
            {
                'avatar': f'/{member.avatar.name}',
                'name': member.name,
                'position': member.position,
                'bio': member.bio,
                'socialNetworks':
                    [
                        {
                            'prefix': f'fa {network.network.icon}',
                            'url': network.url
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

        exchanges_list = [
            {
                'name': exchange.name,
                'url': exchange.url,
                'icon': f'/{exchange.icon.name}'
            } for exchange in exchanges
        ]

        data = {
            'teamMembers': members_list,
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list,
            'wallets': wallets_list,
            'exchanges': exchanges_list
        }

        return JsonResponse(status=200, data=data, safe=False)
