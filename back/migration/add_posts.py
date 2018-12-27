import requests
from dateutil import parser
from blog.models import Post, Tag, PostTag

def run():
    response = requests.get('https://news.callisto.network/wp-json/wp/v2/posts?_embed&per_page=50')

    for post in response.json():
        local_post = Post.objects.create(
            post_id=post['id'],
            title=post['title']['rendered'],
            description=post['excerpt']['rendered'],
            content=post['content']['rendered'],
            date=parser.parse(post['date']),
            link=post['link'],
            slug=post['slug'],
            cover="https://news.callisto.network/wp-content/uploads/{}".format(
                post['better_featured_image']['media_details']['file']
            ),
            author=post['_embedded']['author'][0]['name']
        )

        for tag in post['tags']:
            local_tag = Tag.objects.get(number=tag)
            PostTag.objects.create(
                post=local_post,
                tag=local_tag
            )

