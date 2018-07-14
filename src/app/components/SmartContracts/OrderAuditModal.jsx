import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';

class OrderAuditModal extends PureComponent {
  state = {
    description: '',
    sourceCode: '',
    email: '',
    platform: '',
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { open, onClose } = this.props;
    return (
      <Modal
        key='SmartContractOrderModal'
        open={open}
        onClose={onClose}
        closeIconSize={18}
        classNames={{ modal: 'OrderAuditModal-holder' }}
        center
      >
        <h2 className='OrderAuditModal-title'>
          Audit Request
        </h2>
        <form className='OrderAuditModal-form'>
          <h4 className='OrderAuditModal-form-title'>
            Audit Request
          </h4>
          <div className='OrderAuditModal-form-inputs'>
            <label htmlFor='description'>
              Briefly describe your smart-contract and its main purposes here
            </label>
            <textarea
              name='description'
              value={this.state.description}
              onChange={this.onChange}
              required
            />
          </div>
          <h4 className='OrderAuditModal-form-title'>
            Source Code
          </h4>
          <div className='OrderAuditModal-form-inputs'>
            <label htmlFor='sourceCode'>
              Give a link to the source code of contracts
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
            Disclosure policy
          </h4>
          <div className='OrderAuditModal-form-inputs'>
            <label htmlFor='email'>
              Do you want us to publish the report as it is or to notify you
              privately in case of finding critical mistakes? Provide your email
              if you want us to send you a notification
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
            Platform
          </h4>
          <div className='OrderAuditModal-form-inputs'>
            <label htmlFor='platform'>
              In which network will your contract be deployed?
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
            value='Send Message'
          />
        </form>
      </Modal>
    )
  }
}

export default OrderAuditModal;
