import React from 'react';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

const InfoContent = () => (
  <Element name='about' className='InfoContent'>
    <div className='InfoContent-content container'>
      <div className='InfoContent-content-top'>
        <div className='InfoContent-content-top-element square'>
          <figure className='InfoContent-content-top-figure'>
            <img src='/image/cold-staking.svg' alt='CLO Cold Staking' />
          </figure>
          <h4 className='InfoContent-content-top-title'>
            <FormattedMessage id='InfoContentColdStakingTitle' />
          </h4>
          <p className='InfoContent-content-top-text'>
            <FormattedMessage id='InfoContentColdStakingDescription' />
          </p>
          <a href='/' className='InfoContent-content-top-anchor'>
            <i className='fas fa-arrow-right'/> <FormattedMessage id='ReadMore' />
          </a>
        </div>
        <div className='InfoContent-content-top-element square'>
          <figure className='InfoContent-content-top-figure'>
            <img src='/image/smart-contract.svg' alt='CLO Smart Contracts' />
          </figure>
          <h4 className='InfoContent-content-top-title'>
            <FormattedMessage id='InfoContentSecurityTitle' />
          </h4>
          <p className='InfoContent-content-top-text'>
            <FormattedMessage id='InfoContentSecurityDescription' />
          </p>
          <a href='/' className='InfoContent-content-top-anchor'>
            <i className='fas fa-arrow-right'/> <FormattedMessage id='ReadMore'/>
          </a>
        </div>
      </div>
      <div className='InfoContent-content-bottom'>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            <FormattedMessage id='InfoContentGovernanceTitle' />
          </h5>
          <p className='InfoContent-content-bottom-text'>
            <FormattedMessage id='InfoContentGovernanceDescription' />
          </p>
        </div>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            <FormattedMessage id='InfoContentScalabilityTitle' />
          </h5>
          <p className='InfoContent-content-bottom-text'>
            <FormattedMessage id='InfoContentScalabilityDescription' />
          </p>
        </div>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            <FormattedMessage id='InfoContentFinancialTitle' />
          </h5>
          <p className='InfoContent-content-bottom-text'>
            <FormattedMessage id='InfoContentFinancialDescription' />
          </p>
          <a
            href={`
              https://docs.google.com/spreadsheets/d/e/2PACX-1vTHbKD9_qqc2pzivkn-
              U6reX6pR3WF1-ryX-ZRNtCy54bg0q8JaM_VcoctRll1SgiX7t7UwN1BqOZN-
              /pubhtml?gid=1393329941&single=true
            `}
            target='_blank'
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='FinancialReport' />
          </a>
        </div>
      </div>
    </div>
  </Element>
);

export default InfoContent;
