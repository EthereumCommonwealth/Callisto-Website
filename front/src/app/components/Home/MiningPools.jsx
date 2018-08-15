import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const MiningPools = ({ intl, miningPools, blockExplorers }) => (
  <Element className='MiningPools container' name='pool' id='pool'>
    <div className='MiningPools-content'>
      <SectionHeading
        title={intl.formatMessage({ id: 'CallistoMiningPool' })}
      />
      <div className='MiningPools-list'>
        {miningPools.length > 0 ?
          miningPools.map(pool => (
            <a
              href={pool.url}
              key={pool.name}
              className='btn btn-transparent-green'
              target='_blank'
            >
              {pool.name}
            </a>
          )) : null
        }
      </div>
      <SectionHeading
        title={intl.formatMessage({ id: 'BlockExplorers' })}
      />
      <div className='MiningPools-explorers'>
        {blockExplorers.length > 0 ?
          blockExplorers.map(explorer => (
            <a
              key={explorer.name}
              href={explorer.url}
              className='btn btn-transparent-green'
              target='_blank'
            >
              {explorer.name}
            </a>
          )) : null
        }
      </div>
    </div>
  </Element>
);

function mapStateTopProps(state) {
  return {
    miningPools: state.miningPools,
    blockExplorers: state.blockExplorers,
  };
}

export default injectIntl(connect(mapStateTopProps)(MiningPools));
