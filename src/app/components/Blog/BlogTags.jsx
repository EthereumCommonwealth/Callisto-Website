import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

const BlogTags = ({ blogTags, selectedTag }) => (
  <div className='BlogTags'>
    <div className='BlogTags-content container'>
      <div />
      <div className='BlogTags-topics'>
        <span className='BlogTags-topics-title'>Topics: </span>
        {blogTags.length > 0 ? blogTags.map(elem => {
          const tagClass = classNames('BlogTags-topics-elem', {
            'is-selected': (selectedTag === elem.slug),
          });
          return (
            <a
              className={tagClass}
              href={`/blog/topic/${elem.slug}/`}
              key={elem.id}
            >
              {elem.name}
            </a>
          )
        }) : null}
      </div>
      <div />
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    blogTags: state.blogTags,
  };
}

BlogTags.propTypes = {
  blogTags: PropTypes.array,
};

export default connect(mapStateTopProps)(BlogTags)
