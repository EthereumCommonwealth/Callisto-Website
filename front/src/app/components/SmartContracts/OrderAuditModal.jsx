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
    contact: '',
    media: '',
    policiesText: '',
    emailSent: false,
    btnLocked: false,
    platformOpen: false,
    policiesAccepted: true,
    selectedPlatform: [],
  }

  componentWillMount() {
    this.setState({ selectedPlatform: this.props.audit.platform[2] });
  }

  componentDidMount() {
    document.cookie = `csrftoken=${this.props.audit.csrf_token}`;
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onCheckboxCheck = event => {
    this.setState({ policiesAccepted: event.target.checked });
  }

  handleOpen = event => {
    event.preventDefault();
    this.setState({ platformOpen: true });
  }

  handleClose = event => {
    event.preventDefault();
    this.setState({ platformOpen: false });
  }

  selectPlatform = (event, auditElem) => {
    event.preventDefault();
    this.setState({ selectedPlatform: auditElem, platformOpen: false });
  }

  sendMail = event => {
    event.preventDefault();
    this.setState({ btnLocked: true })
    const d = new Date();
    axios.post('/create-audit-request/', {
      title: `Order No. ${d.getTime()}`,
      description: this.state.description,
      sourceCode: this.state.sourceCode,
      email: this.state.email,
      platform: this.state.selectedPlatform[0],
      csrf_token: this.props.audit.csrf_token,
    })
      .then((response) => {
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
    const { open, onClose, messages, audit } = this.props;
    const { selectedPlatform, platformOpen } = this.state;
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
                Contact information and media resources
              </h4>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='contact'>
                  Contact info
                </label>
                <input
                  name='contact'
                  type='text'
                  value={this.state.contact}
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className='OrderAuditModal-form-inputs'>
                <label htmlFor='media'>
                  Media resources
                </label>
                <input
                  name='media'
                  type='text'
                  value={this.state.media}
                  onChange={this.onChange}
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
                  type='text'
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
                {typeof window !== 'undefined' && selectedPlatform && selectedPlatform.length > 0 ? (
                  <div className='OrderAuditModal-platforms' onMouseLeave={this.handleClose}>
                    <a className='OrderAuditModal-platforms-selected' onClick={this.handleOpen}>
                      {selectedPlatform[1]} ({selectedPlatform[0]})
                    </a>
                    {platformOpen ? (
                      <div className='OrderAuditModal-platforms-elements'>
                        {audit && audit.platform && audit.platform.length > 0 ? audit.platform.map(auditElem => {
                          if (auditElem === selectedPlatform) return null
                          return (
                            <a
                              key={auditElem[0]}
                              onClick={e => this.selectPlatform(e, auditElem)}
                            >
                              {auditElem[1]} ({auditElem[0]})
                            </a>
                          )
                        }) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <br />
              <div className='OrderAuditModal-form-inputs checkbox'>
                <input
                  name='policiesAccepted'
                  type='checkbox'
                  onChange={this.onCheckboxCheck}
                  defaultChecked={this.state.policiesAccepted}
                />
                <label htmlFor='sourceCode'>
                  Use standard <a href='https://github.com/EthereumCommonwealth/Auditing/blob/master/Standard_disclosure_policy.md' target='_blank'>disclosure policy</a>
                </label>
              </div>
              {!this.state.policiesAccepted ? (
                <div className='OrderAuditModal-form-inputs'>
                  <label htmlFor='policiesText'>
                    Disclosure Policy
                  </label>
                  <textarea
                    name='policiesText'
                    type='text'
                    value={this.state.policiesText}
                    onChange={this.onChange}
                    required
                  />
                </div>
              ) : null}
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
    audit: state.audit,
  };
}

export default connect(mapStateToProps)(OrderAuditModal);
