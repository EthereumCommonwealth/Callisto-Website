import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import MiningElement from '../commons/MiningElement';

const Mining = ({ intl }) => (
  <Element className='Mining' name='mining'>
    <div className='Mining-container container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'MiningTitle' })}
        description={intl.formatMessage({ id: 'MiningDescription' })}
      />
      <div className='Mining-cta'>
        <a className='btn btn-green' href='https://stats.callisto.network/' target='_blank'>
          <FormattedMessage id='CloStats' />
        </a>
      </div>
      <SectionHeading
        title={intl.formatMessage({ id: 'TechnicalDetails' })}
        isSubtitle
      />
      <div className='Mining-details'>
        <MiningElement
          title={intl.formatMessage({ id: 'BlockReward' })}
          content='600 CLO'
          description={`(10% ${intl.formatMessage({ id: 'TreasureFee' })})`}
        />
        <MiningElement
          title='POW Algo'
          content='Dagger Hashimoto'
          description='(Ethash)'
        />
        <MiningElement
          title={`100% ${intl.formatMessage({ id: 'CompatibleWith' })}`}
          content='Ethereum Virtual Machine'
        />
        <MiningElement
          title={intl.formatMessage({ id: 'MaximumSupply' })}
          content='6,500,000,000 CLO'
        />
        <MiningElement
          title={intl.formatMessage({ id: 'BlockRewardReduction' })}
          content='32% each 5,000,000 block'
        />
        <MiningElement
          title={intl.formatMessage({ id: 'BlockInterval' })}
          content='~15 sec'
        />
      </div>
    </div>
  </Element>
);

export default injectIntl(Mining);
