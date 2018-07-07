import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

class StakingInvestments extends Component {
  constructor(props) {
    super(props);
    this.line = React.createRef();
  }

  state = {
    percent: 45,
    stakingDeposit: 10000,
  };

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
                  min={0}
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
              <a className='btn btn-green'>
                <FormattedMessage id='Calculate' />
              </a>
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
                <div className='StakingInvestments-table-tow-text'>6200,39</div>
                <div className='StakingInvestments-table-tow-text'>120%</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='SecondMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>3890,12</div>
                <div className='StakingInvestments-table-tow-text'>120%</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='ThirdMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>3645,39</div>
                <div className='StakingInvestments-table-tow-text'>190%</div>
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
