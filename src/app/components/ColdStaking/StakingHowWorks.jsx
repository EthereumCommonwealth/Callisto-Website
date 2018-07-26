import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const StakingHowWorks = ({ intl }) => (
  <div className='StakingHowWorks'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StakingHowWorksTitle' })}
      />
      <div className='StakingHowWorks-content'>
        <div className='StakingHowWorks-content-grid'>
          <div className='StakingHowWorks-content-grid-row three-columns'>
            <div className='StakingHowWorks-content-grid-empty' />
            <div className='StakingHowWorks-content-grid-detail'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                CLO
              </span>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-empty' />
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns'>
            <div className='StakingHowWorks-content-grid-empty' />
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='ColdStakingSmartContract'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-empty' />
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns'>
            <div className='StakingHowWorks-content-grid-empty' />
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='FundsLocked'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-empty' />
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns'>
            <div className='StakingHowWorks-content-grid-line'>
              <figure className='StakingHowWorks-content-grid-line arrow-bottom reverse'>
                <img src='/image/diagram/curve-arrow-big.svg' alt='Grid Line Down' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='LockingPeriodExpired'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-line'>
              <figure className='StakingHowWorks-content-grid-line arrow-bottom'>
                <img src='/image/diagram/curve-arrow-big.svg' alt='Grid Line Down' />
              </figure>
            </div>
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns'>
            <div className='StakingHowWorks-content-grid-empty' />
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='ClaimAndKeep'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-empty' />
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns full'>
            <div className='StakingHowWorks-content-grid-detail'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='ClaimAndStake'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='StakeGeneratingRewards'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-detail'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='StakerInactive'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
          </div>
          <div className='StakingHowWorks-content-grid-row three-columns full'>
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='FundsRelease'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='StakingHowWorks-content-grid-detail-triangle-right'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='CanWithdraw'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
            </div>
            <div className='StakingHowWorks-content-grid-detail has-line'>
              <span className='StakingHowWorks-content-grid-detail-text'>
                <FormattedMessage id='ReleaseInitialStake'/>
              </span>
              <figure className='StakingHowWorks-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(StakingHowWorks);
