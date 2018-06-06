import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import MiningElement from './commons/MiningElement';

const Mining = () => (
  <Element className='Mining' name='mining'>
    <div className='Mining-container container'>
      <SectionHeading
        title='Mining'
        description='Meet the people that are going to take your business to the next level'
      />
      <div className='Mining-cta'>
        <a className='btn btn-green' href='https://clostats.net/' target='_blank'>
          Callisto Stats
        </a>
      </div>
      <SectionHeading
        title='Technical details'
        isSubtitle
      />
      <div className='Mining-details'>
        <MiningElement
          title='Block reward'
          content='600 CLO'
          description='(30% treasure fee)'
        />
        <MiningElement
          title='POW Algo'
          content='Dagger Hashimoto'
          description='(Etash)'
        />
        <MiningElement
          title='100% compatible with'
          content='Ethereum Virtual Machine'
        />
        <MiningElement
          title='The maximum supply:'
          content='6,500,000,000 CLO'
        />
        <MiningElement
          title='Block reward reduction:'
          content='32% each 5,000,000 block'
        />
        <MiningElement
          title='Block interval'
          content='~15 sec'
        />
      </div>
    </div>
  </Element>
);

export default Mining;
