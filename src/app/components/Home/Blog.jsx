import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import BlogPost from '../commons/BlogPost';

class Blog extends PureComponent {
  render() {
    const { blogPosts } = this.props;
    return (
      <Element name='blog' className='Blog'>
        <div className='Blog-content container'>
          <h3 className='Blog-title'>
            <FormattedMessage id='BlogAndPress' />
          </h3>
          <div className='Blog-list'>
            {blogPosts.map(post => (
              <BlogPost
                key={`BlogPost-${post.id}`}
                title={post.title}
                description={post.description}
                date={post.date}
                url={post.link}
                cover={post.cover}
              />
            ))}
          </div>
        </div>
      </Element>
    )
  }
}

function mapStateTopProps(state) {
  return {
    blogPosts: state.blogPosts,
  };
}

Blog.propTypes = {
  blogPosts: PropTypes.array,
};

export default connect(mapStateTopProps, null)(Blog);
