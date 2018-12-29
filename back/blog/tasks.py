import requests
from celery import shared_task
from dateutil import parser

from .models import Post, Tag, PostTag


@shared_task
def create_local_post(post_id):
    response = requests.get(
        "https://news.callisto.network/wp-json/wp/v2/posts/{}/?_embed".format(
            post_id)
    )

    if response.status_code == 200:
        post = response.json()

        local_post = Post.objects.filter(
            post_id=post['id']
        ).first()
        if not local_post:
            local_post = Post()

        local_post.post_id = post['id']
        local_post.title = post['title']['rendered']
        local_post.description = post['excerpt']['rendered']
        local_post.content = post['content']['rendered']
        local_post.date = parser.parse(post['date'])
        local_post.link = post['link']
        local_post.slug = post['slug']
        local_post.cover = "https://news.callisto.network/wp-content/uploads/{}".format(
            post['better_featured_image']['media_details']['file']
        )
        local_post.author = post['_embedded']['author'][0]['name']

        local_post.save()

        for tag in post['tags']:
            local_tag = Tag.objects.get(number=tag)
            PostTag.objects.create(
                post=local_post,
                tag=local_tag
            )

        for related_posts in post['jetpack-related-posts']:
            related_post = Post.objects.filter(
                post_id=related_posts['id']
            ).first()
            local_post.related_posts.add(related_post)
        
