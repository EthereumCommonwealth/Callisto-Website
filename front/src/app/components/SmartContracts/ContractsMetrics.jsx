import React, { Component } from 'react';

class ContractsMetrics extends Component {

  render() {
    return (
      <div className='ContractsMetrics'>
        <div className='ContractsMetrics-content container'>
          <div className='ContractsMetrics-title'>
            <h4>Real time metrics:</h4>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>Protected</span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>+ 8 Millions</h3>
              <span className='ContractsMetrics-metric-detail'>USD</span>
            </div>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>Audited</span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>140</h3>
              <span className='ContractsMetrics-metric-detail'>S-C</span>
            </div>
          </div>
          <div className='ContractsMetrics-text'>
            <span className='ContractsMetrics-text-detail'>Monthly interest rate</span>
            <div className='ContractsMetrics-metric'>
              <h3 className='ContractsMetrics-metric-amount'>
                80
              </h3>
              <span className='ContractsMetrics-metric-detail'>Coins</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractsMetrics;
