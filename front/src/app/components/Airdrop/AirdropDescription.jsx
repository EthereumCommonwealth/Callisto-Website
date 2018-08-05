import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const AirdropDescription = ({ intl }) => (
  <div className='AirdropDescription'>
    <div className='AirdropDescription-content container'>
      <p
        className='AirdropDescription-content-text'
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: 'AirdropDescriptionText' })
        }}
      />
    </div>
  </div>
);

AirdropDescription.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(AirdropDescription);
