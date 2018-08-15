import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

const BlogPost = ({ title, cover, description, date, slug }) => {
  return (
    <div className='BlogPost square'>
      <div
        className='BlogPost-cover'
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className='BlogPost-info'>
        <h4 className='BlogPost-info-title'>
          <a
            href={`/blog/post/${slug}/`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h4>
        <span className='BlogPost-info-date'>
          <FormattedDate
            value={new Date(date)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        </span>
        <div
          className='BlogPost-info-description'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <a href={`/blog/post/${slug}/`} className='BlogPost-info-link'>
          Read more
          <i className='fas fa-long-arrow-alt-right' />
        </a>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
};

export default BlogPost;
