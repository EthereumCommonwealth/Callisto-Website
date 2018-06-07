import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, cover, description, date, url }) => (
  <div className='BlogPost square'>
    {title}
  </div>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.number,
  url: PropTypes.string,
};

export default BlogPost;
