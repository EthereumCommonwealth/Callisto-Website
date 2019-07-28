import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class ContractsMetrics extends Component {

  render() {
    return (
      <div className='ContractsMetrics'>
        <div className='ContractsMetrics-content container'>
          <div className='ContractsMetrics-title'>
            <h4>
              <FormattedMessage id='RealtimeMetrics' defaultMessage='Real time metrics:' />
            </h4>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>
              <FormattedMessage id='Protected' defaultMessage='Protected' />
            </span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>+ 9 Millions</h3>
              <span className='ContractsMetrics-metric-detail'>USD</span>
            </div>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>
              <FormattedMessage id='Audited' defaultMessage='Audited' />
            </span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>140</h3>
              <span className='ContractsMetrics-metric-detail'>S-C</span>
            </div>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>
              <FormattedMessage id='Secured' defaultMessage='Secured' />
            </span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>
                + 90
              </h3>
              <span className='ContractsMetrics-metric-detail'>
                <FormattedMessage id='Coins' defaultMessage='Coins' />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractsMetrics;
