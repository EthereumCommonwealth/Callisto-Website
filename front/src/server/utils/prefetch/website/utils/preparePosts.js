const preparePosts = posts => {
  const elements = posts.map(elem => {
    return {
      id: elem.id,
      title: elem.title,
      description: elem.description,
      date: elem.date,
      link: elem.link,
      slug: elem.slug,
      cover: elem.cover,
    }
  });
  return elements;
}

export default preparePosts;
