import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

class StakingInvestments extends Component {
  constructor(props) {
    super(props);
    this.line = React.createRef();
  }

  state = {
    percent: 50,
    stakingDeposit: 10000,
  };

  calculatePercent = (totalSuply) => {
    return (this.state.percent * totalSuply) / 100;
  }

  calculateStaking = (rewardPool, month, totalSuply) => {
    return ((rewardPool * month * this.state.stakingDeposit) / (this.calculatePercent(totalSuply))).toFixed(2)
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ stakingDeposit: event.target.value });
  }

  handleRangeChange = event => {
    event.preventDefault();
    this.setState({ percent: event.target.value });
  }

  render() {
    const { intl } = this.props;
    const { percent, stakingDeposit } = this.state;
    return (
      <div className='StakingInvestments'>
        <div className='StakingInvestments-holder container'>
          <div />
          <div className='StakingInvestments-content'>
            <SectionHeading
              title={intl.formatMessage({ id: 'StakingInvestmentsTitle' })}
              description={intl.formatMessage({ id: 'StakingInvestmentsDescription' })}
            />
            <div className='StakingInvestments-percent'>
              <div className='StakingInvestments-percent-title'>
                <FormattedMessage id='StakingInvestmentsPercent' />
              </div>
              <div className='StakingInvestments-percent-text'>
                <span className='StakingInvestments-percent-text-detail'>
                  {percent}
                </span> %
              </div>
              <div className='StakingInvestments-percent-holder'>
                <span className='StakingInvestments-percent-holder-text'>
                  0
                </span>
                <input
                  type='range'
                  min={1}
                  value={percent}
                  onChange={this.handleRangeChange}
                  step={1}
                  className='StakingInvestments-percent-holder-input'
                />
                <span className='StakingInvestments-percent-holder-text'>
                  100%
                </span>
              </div>
            </div>
            <div className='StakingInvestments-deposit'>
              <span className='StakingInvestments-deposit-title'>
                <FormattedMessage id='StakingInvestmentsDepositTitle' />
              </span>
              <input
                className='StakingInvestments-deposit-input'
                type='number'
                onChange={this.handleChange}
                value={stakingDeposit}
                min={1}
              />
              {/* <a className='btn btn-green'>
                <FormattedMessage id='Calculate' />
              </a> */}
            </div>
            <div className='StakingInvestments-table'>
              <div className='StakingInvestments-table-row is-head'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='Period' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='Reward' />
                </div>
                <div className='StakingInvestments-table-tow-text'>ROI</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='FirstMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(66481560, 1, 929440000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(66481560, 1, 929440000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='SecondMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(35984520, 2, 1033120000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(35984520, 2, 1033120000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='ThirdMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(35984520, 3, 1136800000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(35984520, 3, 1136800000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='FourthMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 4, 1240480000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(20736000, 4, 1240480000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
            </div>
            <p className='StakingInvestments-description'>
              <FormattedMessage id='StakingInvestmentsBottomText'/>
            </p>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default injectIntl(StakingInvestments);
