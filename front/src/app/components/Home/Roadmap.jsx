import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import RoadmapElement from '../commons/RoadmapElement';

const Roadmap = ({ intl }) => (
  <Element className='Roadmap container' name='roadmap'>
    <div className='Roadmap-content'>
      <SectionHeading
        title={intl.formatMessage({ id: 'Roadmap' })}
        description={intl.formatMessage({ id: 'RoadmapDescription' })}
      />
      <div className='Roadmap-content-list'>
        <RoadmapElement
          title='Q1 2018'
          items={[
            { name: intl.formatMessage({ id: 'Q12018.1' }) },
            { name: intl.formatMessage({ id: 'Q12018.2' }) },
            { name: intl.formatMessage({ id: 'Q12018.3' }) },
            { name: intl.formatMessage({ id: 'Q12018.4' }) },
          ]}
          happened
        />
        <RoadmapElement
          title='Q2 2018'
          items={[
            { name: intl.formatMessage({ id: 'Q22018.1' }) },
            { name: intl.formatMessage({ id: 'Q22018.2' }) },
            { name: intl.formatMessage({ id: 'Q22018.3' }) },
            {
              name: intl.formatMessage({ id: 'Q22018.T' }),
              subelements: [
                { name: intl.formatMessage({ id: 'Q22018.S.1' }) },
                { name: intl.formatMessage({ id: 'Q22018.S.2' }) },
                { name: intl.formatMessage({ id: 'Q22018.S.3' }) },
              ],
            },
          ]}
          happened
        />
        <RoadmapElement
          title='Q3 2018'
          items={[
            { name: intl.formatMessage({ id: 'Q32018.1' }) },
          ]}
          happened
        />
        <RoadmapElement
          title='Q4 2018'
          items={[
            { name: intl.formatMessage({ id: 'Q42018.1' }) },
            { name: intl.formatMessage({ id: 'Q42018.2' }) },
            { name: intl.formatMessage({ id: 'Q42018.3' }) },
          ]}
        />
        <RoadmapElement
          title='Q1 2019'
          items={[
            { name: intl.formatMessage({ id: 'Q12019.1', defaultMessage: 'Analyze constantinople behavior for further implementation on Callisto Network Blockchain HardFork #1' }) },
            { name: intl.formatMessage({ id: 'Q12019.2', defaultMessage: 'Start researching a new monetary policy' }) },
            { name: intl.formatMessage({ id: 'Q12019.3', defaultMessage: 'Continue looking for a satisfactory IPFS to implement on Callisto Network' }) },
          ]}
        />
        <RoadmapElement
          title='Q2 2019'
          items={[
            { name: intl.formatMessage({ id: 'Q22019.1', defaultMessage: 'Reward program will be implemented for tech writers who will write about Callisto and its technology. The rewards will depend on the quality and effort of the freelance writers. The posts - tutorials - opinions - and whatever we  think will be good enough will be posted on the Callisto official forum. The best ones will be also posted on the Callisto official channels. A reward table will be implemented and Callisto will create a team that will check, verify and qualify the job and determine what will the reward be if the post accomplishes quality level.' }) },
            { name: intl.formatMessage({ id: 'Q22019.2', defaultMessage: 'Start running Web assembly on Clo test-net for further implementation.' }) },
            { name: intl.formatMessage({ id: 'Q22019.3', defaultMessage: 'We will be looking forward to increasing and improving our community with PR. For this matter, we will get Advisors on board who will let the world know about CLO.' }) },
            { name: intl.formatMessage({ id: 'Q22019.4', defaultMessage: '19/05 - Planned HardFork 2019  #1' }) },
          ]}
        />
        <div className='Roadmap-content-list-future'>
          <div className='Roadmap-content-list-future-elem'>
            <div>
              <h6 className='Roadmap-content-list-future-title'>
                Q3 2019
              </h6>
              <figure className='Roadmap-content-list-future-figure'>
                <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />
              </figure>
            </div>
            <div>
              <p className='Roadmap-content-list-future-text'>
                <FormattedMessage id='Q32019.1' />
                <br/>
                <FormattedMessage id='Q32019.2' />
              </p>
            </div>
          </div>
          <div className='Roadmap-content-list-future-elem'>
            <div>
              <h6 className='Roadmap-content-list-future-title'>
                Q4 2019
              </h6>
              <figure className='Roadmap-content-list-future-figure'>
                <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />
              </figure>
            </div>
            <div>
              <p className='Roadmap-content-list-future-text'>
                <FormattedMessage id='Q42019.1' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default injectIntl(Roadmap);
