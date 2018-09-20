import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class BuyContent extends PureComponent {

  state = {
    btcAmount: 0,
    cloAmount: 0,
    formSent: false,
  }

  get cloInBtc() {
    const { cloPrice, btcPrice } = this.props;
    const marketPrice = (cloPrice / btcPrice);
    const percentage = ((5 * marketPrice) / 100);
    const webPrice = (marketPrice + percentage)
    return webPrice;
  }

  get calculateMaxClo() {
    return (1 / this.cloInBtc).toFixed(1);
  }

  onChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'btc') {
      this.setState({
        btcAmount: event.target.value,
        cloAmount: (event.target.value / this.cloInBtc).toFixed(2),
      })
    } else if (event.target.name === 'clo') {
      this.setState({
        btcAmount: (event.target.value * this.cloInBtc).toFixed(10),
        cloAmount: event.target.value,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/buy-clo/', {
      cloAmmount: this.state.cloAmount,
      btcAmount: this.state.btcAmount,
      price: this.cloInBtc.toFixed(10),
      email: event.target.email.value,
      receipt: event.target.receipt.value,
    })
      .then(() => {
        this.setState({
          btcAmount: 0,
          cloAmount: 0,
          formSent: true,
        })
      })
      .catch(() => {
        this.setState({
          btcAmount: 0,
          cloAmount: 0,
          formSent: false,
        })
      })
  }

  render() {
    return (
      <div className='BuyContent'>
        <div className='BuyContent-content container'>
          {!this.state.formSent ?
            (
              <form className='BuyContent-form' onSubmit={this.handleSubmit}>
                <div className='BuyContent-form-row'>
                  <div className='BuyContent-form-elem'>
                    <input
                      type='number'
                      min={this.cloInBtc.toFixed(9)}
                      step='0.000000001'
                      max={1}
                      name='btc'
                      className='BuyContent-form-elem-input'
                      value={this.state.btcAmount}
                      onChange={this.onChange}
                      required
                    />
                    <span className='BuyContent-form-elem-text'>Bitcoin (BTC)</span>
                  </div>
                  <figure className='BuyContent-form-icon'>
                    <img src='/image/buy/buy-icon.svg' alt='Buy CLO'/>
                  </figure>
                  <div className='BuyContent-form-elem'>
                    <input
                      type='number'
                      min={0}
                      step='0.000000001'
                      max={this.calculateMaxClo}
                      name='clo'
                      className='BuyContent-form-elem-input'
                      value={this.state.cloAmount}
                      onChange={this.onChange}
                      required
                    />
                    <span className='BuyContent-form-elem-text'>Callisto (CLO)</span>
                  </div>
                </div>
                <div className='BuyContent-form-row'>
                  <div className='BuyContent-form-elem'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Your email'
                      className='BuyContent-form-elem-input-detail'
                      required
                    />
                  </div>
                  <div />
                  <div className='BuyContent-form-elem'>
                    <input
                      type='text'
                      name='receipt'
                      placeholder='Receipt Address'
                      className='BuyContent-form-elem-input-detail'
                      required
                    />
                  </div>
                </div>
                <input className='btn' type='submit' className='btn btn-green'/>
              </form>
            ) : (
              <div className='BuyContent-buyed'>
                <h1>
                  Buy order placed.
                </h1>
                <h4>
                  We will contact you soon with the next instructions.
                </h4>
                <a
                  onClick={() => this.setState({
                    btcAmount: 0,
                    cloAmount: 0,
                    formSent: false,
                  })}
                >Place another order</a>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    cloPrice: state.marketStats.cloPrice,
    btcPrice: state.marketStats.btcPrice,
  };
}

export default connect(mapStateTopProps)(BuyContent);
