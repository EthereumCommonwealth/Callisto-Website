import React from 'react';

const RelatedPost = ({ title, description, slug }) => (
  <article className='RelatedPost'>
    <a href={`/blog/post/${slug}`} className='RelatedPost-anchor'>
      <h3 className='RelatedPost-title'>{title}</h3>
    </a>
    <p className='RelatedPost-description'>
      {description}
    </p>
  </article>
);

export default RelatedPost;
