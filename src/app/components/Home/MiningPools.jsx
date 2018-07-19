import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const MiningPools = ({ intl }) => (
  <Element className='MiningPools container' name='pool' id='pool'>
    <div className='MiningPools-content'>
      <SectionHeading
        title={intl.formatMessage({ id: 'CallistoMiningPool' })}
      />
      <div className='MiningPools-list'>
        <a
          href='https://clopool.pro/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          clopool.pro
        </a>
        <a
          href='https://clo.epool.io/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          epool.io
        </a>
        <a
          href='https://coinfoundry.org/pool/clo'
          className='btn btn-transparent-green'
          target='_blank'
        >
          coinfoundry.org
        </a>
        <a
          href='https://clo.2miners.com/en'
          className='btn btn-transparent-green'
          target='_blank'
        >
          2miners.com
        </a>
        <a
          href='http://callistopool.org/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          callistopool.org
        </a>
        <a
          href='http://www.callisto-pool.com/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          callisto-pool.com
        </a>
        <a
          href='https://clo.solopool.org/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          solopool.org
        </a>
        <a
          href='http://clo.mole-pool.net:89/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          mole-pool.net
        </a>
        <a
          href='http://clona.ru/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          clona.ru
        </a>
        <a
          href='http://clo.minerpool.net/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          minerpool.net
        </a>
        <a
          href='https://clopool.net/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          clopool.net
        </a>
        <a
          href='https://comining.io/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          comining.io
        </a>
        <a
          href='http://clo.pool.sexy/#/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          clo.pool.sexy
        </a>
        <a
          href='http://pool.baikalmine.com/en/clo/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          pool.baikalmine.com
        </a>
        <a
          href='https://pplns.io/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          pplns.io
        </a>
        <a
          href='https://www.vvpool.com/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          www.vvpool.com
        </a>
        <a
          href='https://clo.topmining.co.kr/ '
          className='btn btn-transparent-green'
          target='_blank'
        >
          clo.topmining.co.kr
        </a>
      </div>
      <SectionHeading
        title={intl.formatMessage({ id: 'BlockExplorers' })}
      />
      <div className='MiningPools-explorers'>
        <a
          href='https://explorer.callisto.network/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          explorer.callisto.network
        </a>
        <a
          href='https://callistoexplorer.com/home'
          className='btn btn-transparent-green'
          target='_blank'
        >
          callistoexplorer.com
        </a>
        <a
          href='https://cloexplorer.org/'
          className='btn btn-transparent-green'
          target='_blank'
        >
          cloexplorer.org
        </a>
      </div>
    </div>
  </Element>
);

export default injectIntl(MiningPools);
