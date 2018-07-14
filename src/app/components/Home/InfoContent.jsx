import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

const InfoContent = ({ lang }) => (
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
          <Link
            to={lang === 'en' ? '/cold-staking/' : `/${lang}/cold-staking/`}
            className='InfoContent-content-top-anchor'
          >
            <i className='fas fa-arrow-right'/> <FormattedMessage id='ReadMore' />
          </Link>
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
          <Link
            to={lang === 'en' ? '/smart-contract/' : `/${lang}/smart-contract/`}
            className='InfoContent-content-top-anchor'
          >
            <i className='fas fa-arrow-right'/> <FormattedMessage id='ReadMore'/>
          </Link>
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
          <Link
            to={lang === 'en' ? '/financial-report/' : `/${lang}/financial-report/`}
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='FinancialReport' />
          </Link>
        </div>
      </div>
    </div>
  </Element>
);

export default InfoContent;
