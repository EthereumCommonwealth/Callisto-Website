import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { DiscussionEmbed } from 'disqus-react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import RelatedPost from './RelatedPost';

const PostDetails = ({ singlePost }) => {
  const disqusShortname = 'callisto-blog';
  const disqusConfig = {
    url: singlePost.url,
    identifier: singlePost.id,
    title: singlePost.title,
  };
  return (
    <div className='PostDetails'>
      <div className='PostDetails-content container'>
        <div>
          <div className='PostDetails-share'>
            <a
              className='PostDetails-share-btn'
              href={`https://www.facebook.com/sharer/sharer.php?u=${singlePost.url}`}
              target='_blank'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='PostDetails-share-btn'
              href={`https://telegram.me/share/url?url=${singlePost.url}&text=${singlePost.title}`}
              target='_blank'
            >
              <i className='fab fa-telegram-plane' />
            </a>
            <a
              className='PostDetails-share-btn'
              href={`https://twitter.com/intent/tweet?url=${singlePost.url}&text=${singlePost.title}`}
              target='_blank'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
        <article className='PostDetails-details'>
          <a href='/blog/' className='Post-back'>
            <i className='fas fa-long-arrow-alt-left' /> <FormattedMessage id='Blog' />
          </a>
          <h2
            className='Post-title'
            dangerouslySetInnerHTML={{ __html: singlePost.title }}
          />
          <div className='Post-date'>
            <FormattedDate
              value={new Date(singlePost.date)}
              year='numeric'
              month='long'
              day='2-digit'
            />  <span className='Post-author'>{singlePost.author}</span>
          </div>
          <figure className='Post-figure'>
            <img src={singlePost.cover} alt={singlePost.title}/>
          </figure>
          <div
            className='Post-description'
            dangerouslySetInnerHTML={{ __html: singlePost.content }}
          />
          <div className='PostDetails-topics'>
            <span className='PostDetails-topics-title'>
              <FormattedMessage id='Topics' defaultMessage='Topics' />:
            </span>
            {singlePost.topics.length > 0 ?
              singlePost.topics.map((topic) => (
                <a
                  key={topic.id}
                  className='PostDetails-topics-elem'
                  href={`/blog/topic/${topic.slug}`}
                >
                  {topic.name}
                </a>
              )) : null
            }
          </div>
          {singlePost.relatedPosts && singlePost.relatedPosts.length > 0 ?
            <div className='PostDetails-related'>
              <h3 className='PostDetails-related-title'>Related Posts: </h3>
              <div className='PostDetails-related-elems'>
                {
                  singlePost.relatedPosts.map((post, index) => {
                    if (index < 2) {
                      return (
                        <RelatedPost
                          key={post.id}
                          title={post.title}
                          description={post.description}
                          slug={post.slug}
                        />
                      );
                    }
                    return null;
                  })
                }
              </div>
            </div> : null
          }
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </article>
        <div />
      </div>
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    singlePost: state.singlePost,
  };
}

PostDetails.propTypes = {
  singlePost: PropTypes.object,
};

export default connect(mapStateTopProps)(PostDetails);
