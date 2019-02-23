from django.http import JsonResponse
from django.views.generic.base import View

from financial.models import FinancialReport
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
                            active=True
                        )
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


class WalletsColdStackingAPIView(View):
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
                    } for wallet in wallet_platform.wallet_set.filter(
                        cold_staking=True
                    )
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


class FinancialReportAPIView(View):
    def get(self, request, *args, **kwargs):
        reports = FinancialReport.objects.all().order_by('-financial_report')

        reports_list = [
            {
                'name': 'Financial Report {} - {}'.format(
                    report.financial_date.month, report.financial_date.year
                ),
                'file': report.financial_report.get_url()
            } for report in reports
        ]

        return JsonResponse(status=200, data=reports_list, safe=False)


class HomeAPIView(View):
    def get(self, request, *args, **kwargs):
        members = TeamMember.objects.order_by('order')
        mining_pools = MiningPool.objects.all()
        block_explorers = BlockExplorer.objects.all()
        wallets = WalletPlatform.objects.all()
        exchanges = Exchange.objects.order_by('order')
        reports = FinancialReport.objects.all().order_by('-financial_report')
        
        translations = Language.get_translations(
            request.GET.get('lang', 'en'))

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

        wallets_cold_stacking_list = [
            {
                'title': wallet_platform.name,
                'icon': f'/{wallet_platform.icon.name}',
                'options': [
                    {
                        'name': wallet.name,
                        'url': wallet.url,
                        'cs': wallet.cold_staking
                    } for wallet in
                    wallet_platform.wallet_set.filter(
                        cold_staking=True
                    ).order_by('id')
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

        reports_list = [
            {
                'name': 'Financial Report {} - {}'.format(
                    report.financial_date.month, report.financial_date.year
                ),
                'file': report.financial_report.get_url()
            } for report in reports
        ]

        data = {
            'teamMembers': members_list,
            'miningPools': mining_pools_list,
            'blockExplorers': block_explorers_list,
            'wallets': wallets_list,
            'walletsColdStacking': wallets_cold_stacking_list,
            'exchanges': exchanges_list,
            'translations': translations,
            'financialReports': reports_list,
        }

        return JsonResponse(status=200, data=data, safe=False)


class TranslationsView(View):

    def get(self, request, *args, **kwargs):
        translations = Language.get_translations(
            kwargs.get('language', 'en'))

        return JsonResponse(status=200, data=translations, safe=False)
