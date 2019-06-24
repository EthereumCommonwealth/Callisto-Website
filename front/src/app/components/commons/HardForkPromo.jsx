import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Web3 from 'web3';

class HardForkPromo extends Component {

  state = {
    promoEnded: false,
    hfBlocks: 0,
    blocksGetted: false,
  };

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const blocksInterval = setInterval(async () => {
        const web3 = new Web3(new Web3.providers.HttpProvider('https://clo-geth.0xinfra.com/'));
        const blockNumber = await web3.eth.getBlockNumber();
        const count = 2900001 - Number(blockNumber);
        this.setState({ hfBlocks: count, blocksGetted: true });
      }, 1000);
      if (this.state.hfBlocks === 0 && this.state.blocksGetted) {
        clearInterval(blocksInterval);
        this.setState({ promoEnded: true });
      }
    }
  }
  render() {
    const { promoEnded } = this.state;
    if (promoEnded) return null;
    return (
      <div className='HardForkPromo'>
        <div className='HardForkPromo-content container'>
          <div className='HardForkPromo-text'>
            <h2 className='HardForkPromo-text-title'>
              <FormattedMessage
                id='HardForkPromoTitle'
                defaultMessage='Hardfork #3'
              />
            </h2>
            <FormattedMessage
              id='HardForkPromoDescription'
              defaultMessage='Every #pool #exchange or #wallet should update to the newest release'
            />
          </div>
          {this.state.hfBlocks > 0 ? (
            <div className='HardForkPromo-count'>
              <div className='HardForkPromo-count-blocks'>
                <div className='HardForkPromo-count-number'>
                  {this.state.hfBlocks.toLocaleString()}
                </div>
              </div>
              <div className='HardForkPromo-count-text'>
                <FormattedMessage
                  id='HardForkPromoRemaining'
                  defaultMessage='Blocks remaining'
                />
              </div>
            </div>
          ) : null}
        </div>
        <a
          href='https://github.com/EthereumCommonwealth/go-callisto/releases/tag/1.1/'
          className='HardForkPromo-anchor'
          target='_blank'
          rel='noopener noreferrer'
        />
      </div>
    )
  }
}

export default HardForkPromo;
