import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class TagPosts extends PureComponent {

  get tagName() {
    const { selectedTag, blogTags } = this.props;
    const tag = blogTags.filter(elem => elem.slug === selectedTag)
    return tag.length > 0 ? tag[0].name : '';
  }

  render() {
    const { tagPosts } = this.props;
    return (
      <section className='PostsList'>
        <div className='PostsList-content container'>
          <div />
          <div className='PostsList-list'>
            <h1 className='PostsList-tag-title'>
              {this.tagName}
            </h1>
            {tagPosts.length > 0 ? tagPosts.map(post => (
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
                <div
                  className='Post-description'
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <a href={post.link} className='Post-readmore' target='_blank'>
                  <i className='fas fa-long-arrow-alt-right' /> <FormattedMessage id='ReadMore' />
                </a>
              </div>
            )) : (
              <div className='PostsList-notfound'>
                <h3>
                  <FormattedDate id='NotTopicsFound'/>
                </h3>
              </div>
            )}
          </div>
          <div />
        </div>
      </section>
    )
  }
}

function mapStateTopProps(state) {
  return {
    tagPosts: state.tagPosts,
    blogTags: state.blogTags,
  };
}

TagPosts.propTypes = {
  tagPosts: PropTypes.array,
  blogTags: PropTypes.array,
};

export default connect(mapStateTopProps, null)(TagPosts);
