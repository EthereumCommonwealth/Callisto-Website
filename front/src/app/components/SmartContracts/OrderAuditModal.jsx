import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import axios from 'axios';

class OrderAuditModal extends PureComponent {
  state = {
    description: '',
    sourceCode: '',
    email: '',
    platform: '',
    emailSent: false,
    btnLocked: false,
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  sendMail = event => {
    event.preventDefault();
    this.setState({ btnLocked: true })
    axios.post('/send-email', {
      description: this.state.description,
      sourceCode: this.state.sourceCode,
      email: this.state.email,
      platform: this.state.platform,
    })
      .then((response) => {
        const d = new Date();
        window.tap('conversion', d.getTime(), {}, {
          meta_data: {
            email: this.state.email,
            sourceCode: this.state.sourceCode,
            platform: this.state.platform,
          }
        });
        this.setState({
          description: '',
          sourceCode: '',
          email: '',
          platform: '',
          emailSent: true,
          btnLocked: false,
        });
        setTimeout(() => {
          this.props.onClose();
          this.setState({ emailSent: false });
        }, 5000);
      })
      .then(() => {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-794594304/3fsOCKS-pIgBEICY8voC',
          'transaction_id': '',
          'event_callback': window.location.href,
        });
      })
      .catch(function (error) {
        console.log(error);
        this.setState({
          emailSent: false,
          btnLocked: false,
        })
      });
  }

  render() {
    const { open, onClose, messages } = this.props;
    return (
      <Modal
        key='SmartContractOrderModal'
        open={open}
        onClose={onClose}
        closeIconSize={18}
        classNames={{ modal: !this.state.emailSent ? 'OrderAuditModal-holder' : 'OrderAuditModal-success' }}
        center
      >
        <h2 className='OrderAuditModal-title'>
          {messages.AuditRequest}
        </h2>
        {this.state.emailSent ?
          <div className='OrderAuditModal-success-message'>
            {messages.OrderAuditSuccess}
          </div> : (
            <form className='OrderAuditModal-form' onSubmit={this.state.btnLocked ? null : this.sendMail}>
              <h4 className='OrderAuditModal-form-title'>
                {messages.AuditRequest}
              </h4>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='description'>
                  {messages.OrderAuditModalDescription}
                </label>
                <textarea
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                  required
                />
              </div>
              <h4 className='OrderAuditModal-form-title'>
                {messages.SourceCode}
              </h4>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='sourceCode'>
                  {messages.OrderAuditModalSourceCodeLabel}
                </label>
                <input
                  name='sourceCode'
                  type='text'
                  value={this.state.sourceCode}
                  onChange={this.onChange}
                  required
                />
              </div>
              <h4 className='OrderAuditModal-form-title'>
                {messages.DisclosurePolicyTitle}
              </h4>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='email'>
                  {messages.OrderAuditModalDisclosureLabel}
                </label>
                <input
                  name='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>
              <h4 className='OrderAuditModal-form-title'>
                {messages.Platform}
              </h4>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='platform'>
                  {messages.OrderAuditModalPlatformLabel}
                </label>
                <input
                  name='platform'
                  type='text'
                  value={this.state.platform}
                  onChange={this.onChange}
                  placeholder='ETC/ETH/CLO/UBQ/EXP/something else'
                  required
                />
              </div>
              <input
                className='OrderAuditModal-submit btn btn-green'
                type='submit'
                value={messages.SendMessage}
              />
            </form>
          )
        }
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps)(OrderAuditModal);
