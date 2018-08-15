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
            { name: intl.formatMessage({ id: 'Q12019.1' }) },
            { name: intl.formatMessage({ id: 'Q12019.2' }) },
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
