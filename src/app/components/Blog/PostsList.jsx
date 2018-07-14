import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

class PostsList extends PureComponent {
  render() {
    const { blogPosts } = this.props;
    return (
      <section className='PostsList'>
        <div className='PostsList-content container'>
          <div />
          <div className='PostsList-list'>
            {blogPosts.map(post => (
              <div key={`Post-${post.id}`} className='Post'>
                <h2 className='Post-title'>
                  <a
                    href={post.link}
                    target='_blank'
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </h2>
                <div className='Post-date'>
                  <FormattedDate
                    value={new Date(post.date)}
                    year='numeric'
                    month='long'
                    day='2-digit'
                  />
                </div>
                <figure className='Post-figure'>
                  <img src={post.cover} alt={post.title}/>
                </figure>
                <div
                  className='Post-description'
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <a href={post.link} className='Post-readmore' target='_blank'>
                  <i className='fas fa-long-arrow-alt-right' /> read more
                </a>
              </div>
            ))}
          </div>
          <div />
        </div>
      </section>
    )
  }
}

function mapStateTopProps(state) {
  return {
    blogPosts: state.blogPosts,
  };
}

PostsList.propTypes = {
  blogPosts: PropTypes.array,
};

export default connect(mapStateTopProps, null)(PostsList);
