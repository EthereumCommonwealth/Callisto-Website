import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { FormattedDate } from 'react-intl';

const PostDetails = ({ singlePost }) => {
  return (
    <div className='PostDetails'>
      <div className='PostDetails-content container'>
        <div />
        <div>
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
