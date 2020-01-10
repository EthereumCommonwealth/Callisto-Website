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
          ]}
          happened
        />
        <RoadmapElement
          title='Q1 2019'
          items={[
            { name: intl.formatMessage({ id: 'Q12019.1', defaultMessage: 'Analyze constantinople behavior for further implementation on Callisto Network Blockchain HardFork #1' }) },
            { name: intl.formatMessage({ id: 'Q12019.2', defaultMessage: 'Start researching a new monetary policy' }) },
            { name: intl.formatMessage({ id: 'Q12019.3', defaultMessage: 'Continue looking for a satisfactory IPFS to implement on Callisto Network' }) },
          ]}
          happened
        />
        <RoadmapElement
          title='Q2 2019'
          items={[
            { name: intl.formatMessage({ id: 'Q22019.1', defaultMessage: 'Start running Web assembly on Clo test-net for further implementation.' }) },
            { name: intl.formatMessage({ id: 'Q22019.2', defaultMessage: 'We will be looking forward to increasing and improving our community with PR. For this matter, we will get Advisors on board who will let the world know about CLO.' }) },
            { name: intl.formatMessage({ id: 'Q22019.3', defaultMessage: '19/05 - Planned HardFork 2019  #1' }) },
          ]}
          happened
        />
        <RoadmapElement
          title='Q1 2020'
          items={[
            { name: intl.formatMessage({ id: 'Q12020.1', defaultMessage: 'CLO <> EOS Token Swap UI.' }) },
            { name: intl.formatMessage({ id: 'Q12020.2', defaultMessage: 'ETH-Based client update.' }) },
            { name: intl.formatMessage({ id: 'Q12020.3', defaultMessage: 'Cold Staking V2 HardFork.' }) },
            { name: intl.formatMessage({ id: 'Q12020.3', defaultMessage: 'Test Governance System at CLO Mainnet' }) },
          ]}
        />
        <RoadmapElement
          title='Q2 2020'
          items={[
            { name: intl.formatMessage({ id: 'Q22020.1', defaultMessage: 'Listing of CLO EOS Token at EOS DEX\'ES.' }) },
            { name: intl.formatMessage({ id: 'Q22020.2', defaultMessage: 'Development of media resources and improvement of security audit SEO.' }) },
            { name: intl.formatMessage({ id: 'Q22020.3', defaultMessage: 'Monetary Policy for the sake of compatibility of CS at EOS token and CLO Mainnet.' }) },
            { name: intl.formatMessage({ id: 'Q22020.3', defaultMessage: 'Request for funding of auditing department at EOS proposal system.' }) },
          ]}
        />
        <RoadmapElement
          title='Q3 2020'
          items={[
            { name: intl.formatMessage({ id: 'Q32020.1', defaultMessage: 'Governance system for EOS token.' }) },
            { name: intl.formatMessage({ id: 'Q32020.2', defaultMessage: 'Cold Staking for EOS-Based token.' }) },
          ]}
        />
        <RoadmapElement
          title='Q4 2020'
          items={[
            { name: intl.formatMessage({ id: 'Q42020.1', defaultMessage: 'Security auditing department on EOS.' }) },
          ]}
        />
        {/*<div className='Roadmap-content-list-future'>*/}
        {/*  <div className='Roadmap-content-list-future-elem'>*/}
        {/*    <div>*/}
        {/*      <h6 className='Roadmap-content-list-future-title'>*/}
        {/*        Q3 2020*/}
        {/*      </h6>*/}
        {/*      <figure className='Roadmap-content-list-future-figure'>*/}
        {/*        <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />*/}
        {/*      </figure>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <p className='Roadmap-content-list-future-text'>*/}
        {/*        <FormattedMessage id='Q32019.1' />*/}
        {/*        <br/>*/}
        {/*        <FormattedMessage id='Q32019.2' />*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='Roadmap-content-list-future-elem'>*/}
        {/*    <div>*/}
        {/*      <h6 className='Roadmap-content-list-future-title'>*/}
        {/*        Q4 2019*/}
        {/*      </h6>*/}
        {/*      <figure className='Roadmap-content-list-future-figure'>*/}
        {/*        <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />*/}
        {/*      </figure>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <p className='Roadmap-content-list-future-text'>*/}
        {/*        <FormattedMessage id='Q42019.1' />*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  </Element>
);

export default injectIntl(Roadmap);
