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
    initialPercent: 0,
    pressed: false,
    stakingDeposit: 10000,
  };

  handleMouseLeave = event => {
    event.preventDefault();
    this.setState({
      pressed: false,
      initialPercent: 0,
    });
  }

  handleMouseDown = event => {
    event.preventDefault();
    this.setState({
      initialPercent: event.clientX,
      pressed: true,
    });
  }

  handleMouseUp = event => {
    event.preventDefault();
    this.setState({ pressed: false });
  }

  handleMouseMove = event => {
    event.preventDefault();
    const { initialPercent, pressed } = this.state;
    if (pressed) {
      const lineWidth = this.line.current.clientWidth;
      const lineOffset = this.line.current.offsetLeft;
      let clientDifference
      let relativePercentage;
      if (event.clientX > initialPercent) {
        clientDifference = event.clientX - lineOffset;
        relativePercentage = Math.round((clientDifference * 100) / lineWidth);
      } else if (initialPercent > event.clientX) {
        relativePercentage = this.state.percent - 0.25
        console.log(relativePercentage);
      }
      if ((relativePercentage >= 0 && relativePercentage <= 100)) {
        this.setState({
          percent: relativePercentage,
        });
      }
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ stakingDeposit: event.target.value });
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
              <div
                className='StakingInvestments-percent-holder'
                onMouseLeave={this.handleMouseLeave}
              >
                <span className='StakingInvestments-percent-holder-text'>
                  0
                </span>
                <div
                  ref={this.line}
                  className='StakingInvestments-percent-holder-line'
                >
                  <div
                    className='StakingInvestments-percent-holder-line-progress'
                    style={{ width: `${percent}%` }}
                  />
                  <div
                    className='StakingInvestments-percent-holder-line-percentage'
                    style={{ left: `${percent - 5}%` }}
                  >
                    <span
                      className='StakingInvestments-percent-holder-line-percentage-value'
                    >
                      {Math.round(percent)}
                    </span> %
                  </div>
                  <span
                    className='StakingInvestments-percent-holder-line-circle'
                    style={{ left: `${percent - 2 }%` }}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                    onMouseLeave={this.handleMouseUp}
                  />
                </div>
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
                <div className='StakingInvestments-table-tow-text'>First month</div>
                <div className='StakingInvestments-table-tow-text'>6200,39</div>
                <div className='StakingInvestments-table-tow-text'>120%</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>Second month</div>
                <div className='StakingInvestments-table-tow-text'>3890,12</div>
                <div className='StakingInvestments-table-tow-text'>120%</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>Third month</div>
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
