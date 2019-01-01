import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import SingleAdvisor from '../commons/SingleAdvisor';

const Advisors = ({ intl }) => (
  <Element name='advisors' className='Advisors'>
    <div className='Advisors-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'AdvisorsTitle', defaultMessage: 'Advisors' })}
      />
      <div className='Advisors-list'>
        <SingleAdvisor
          avatar='/image/avatars/shira_avatar.png'
          name='Shira Rubinoff'
          position='Advisor'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'twitter.com/Shirastweet',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://t.co/foJ9NT4rlT',
            }
          ]}
        />
        <SingleAdvisor
          avatar='/image/avatars/raymond_avatar.png'
          name='Raymond Koh'
          position='Advisor'
          socialNetworks={[
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://my.linkedin.com/in/raymond-koh-b8486b139',
            }
          ]}
        />
      </div>
    </div>
  </Element>
);

export default injectIntl(Advisors);
