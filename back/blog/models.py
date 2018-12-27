from django.db import models


class Tag(models.Model):
    number = models.IntegerField()
    name = models.CharField(max_length=50)
    slug = models.SlugField()

    def __str__(self):
        return self.name


class Post(models.Model):
    post_id = models.IntegerField()
    title = models.CharField(max_length=500)
    description = models.TextField()
    content = models.TextField()
    date = models.DateField()
    link = models.URLField(max_length=200)
    slug = models.SlugField(max_length=255)
    cover = models.URLField(max_length=200)
    tags = models.ManyToManyField(Tag, through='PostTag')
    author = models.CharField(max_length=255)
    realated_posts = models.ManyToManyField("self", related_name='related_posts', symmetrical=False)

    def __str__(self):
        return self.title


class PostTag(models.Model):
    post = models.ForeignKey(Post, related_name='post',
                             on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, related_name='tag', on_delete=models.CASCADE)

    def __str__(self):
        return "{} -> {}".format(self.post.title, self.tag.name)

