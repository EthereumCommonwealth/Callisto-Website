import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { FormattedDate, FormattedMessage } from 'react-intl';

const PostDetails = ({ singlePost }) => {
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
        <div>
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
            />
          </div>
          <figure className='Post-figure'>
            <img src={singlePost.cover} alt={singlePost.title}/>
          </figure>
          <div
            className='Post-description'
            dangerouslySetInnerHTML={{ __html: singlePost.content }}
          />
        </div>
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
