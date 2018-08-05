const preparePosts = (posts) => {
  const elements = posts.map((elem) => {
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    return {
      id: elem.id,
      title: elem.title.rendered,
      description: elem.excerpt.rendered,
      date: elem.date,
      link: elem.link,
      slug: elem.slug,
      cover: `${baseImageUrl}/${elem.better_featured_image.media_details.file}`,
    }
  });
  return elements;
}

export default preparePosts;
