import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import RoadmapElement from './commons/RoadmapElement';

const Roadmap = () => (
  <Element className='Roadmap container' name='roadmap'>
    <div className='Roadmap-content'>
      <SectionHeading
        title='Roadmap'
        description='Lorem ipsum Callisto core implementation.'
      />
      <div className='Roadmap-content-list'>
        <RoadmapElement
          title='Q1 2018'
          items={[
            { name: 'Update ClassicMask with Callisto Network' },
            { name: 'Snapshot of Ethereum Classic for CLO airdrop 1:1' },
            { name: 'Launch Testnet 2.0' },
            { name: 'Research the POS and DPOS protocol implementation possibility.' },
          ]}
          happened
        />
        <RoadmapElement
          title='Q2 2018'
          items={[
            { name: 'Launch CLO Mainnet (Est. 15 April 2018)' },
            { name: 'DexNS support for the Callisto protocol' },
            { name: 'Marketing team creation' },
            {
              name: 'Launch explorer with advanced features as:',
              subelements: [
                { name: 'Readable transactions including the smart contracts instructions' },
                { name: 'Token explorer' },
                { name: 'Testnet support (Callisto, Ethereum, Ethereum Classic)/' },
              ],
            },
          ]}
          happened
        />
        <RoadmapElement
          title='Q3 2018'
          items={[
            { name: `
              Launch mobile app wallet for Callisto, Ethereum Classic, and Ethereum.
              Compatible with custom Ethereum node.
            ` },
            { name: 'ETC-CLO swap channel implementation' },
          ]}
        />
        <RoadmapElement
          title='Q4 2018'
          items={[
            { name: 'Planned Hardfork No. 1: Cold staking implementation' },
            { name: 'eWASM implementation research' },
            { name: 'New address (c-address) type. Address abstraction implementation.' },
            { name: 'Experimental SWARM implementation.' },
          ]}
        />
        <div className='Roadmap-content-list-future'>
          <div className='Roadmap-content-list-future-elem'>
            <div>
              <h6 className='Roadmap-content-list-future-title'>
                Q1 2019
              </h6>
              <figure className='Roadmap-content-list-future-figure'>
                <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />
              </figure>
            </div>
            <div>
              <p className='Roadmap-content-list-future-text'>
                Researching sidechain implementation
              </p>
            </div>
          </div>
          <div className='Roadmap-content-list-future-elem'>
            <div>
              <h6 className='Roadmap-content-list-future-title'>
                Q2 2019
              </h6>
              <figure className='Roadmap-content-list-future-figure'>
                <img src='/image/Roadmap_arrow_up.svg' alt='Roadmap Element' />
              </figure>
            </div>
            <div>
              <p className='Roadmap-content-list-future-text'>
                Planned Hardfork No. 2: On-chain governance system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Roadmap;
