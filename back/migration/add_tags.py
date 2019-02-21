import requests
from blog.models import Tag


def run():
    response = requests.get(
        'https://news.callisto.network/wp-json/wp/v2/tags/'
    )

    for tag in response.json():
        Tag.objects.create(
            number=tag['id'],
            name=tag['name'],
            slug=tag['slug']
        )
