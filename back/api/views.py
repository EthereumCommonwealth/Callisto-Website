from django.http import JsonResponse
from django.views.generic.base import View

from team.models import MemberTeam


class TeamAPIView(View):
    def get(self, request, *args, **kwargs):

        members = MemberTeam.objects.all()

        members_list = [
            {
                'avatar': member.avatar.url,
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

