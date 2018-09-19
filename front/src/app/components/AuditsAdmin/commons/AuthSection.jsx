import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import auth from '../../../services/auth';
import { userLogin } from '../../../actions/authActions';

class AuthSection extends PureComponent {
  state = {
    isLogged: false,
  };

  componentWillMount() {
    this.setState({ isLogged: auth.currentUserExists() });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLogin({
      user: event.target.username.value,
      pass: event.target.password.value,
    }, this.props.csrftoken);
  };

  render() {
    return (
      <div className='AuthSection'>
        {this.state.isLogged ?
          (
            <div className='AuthSection-info'>
              Logged user here
            </div>
          ) : (
            <form className='AuthSection-form' onSubmit={this.handleSubmit}>
              <input type='text' name='username' placeholder='Username' required />
              <input type='password' name='password' placeholder='Password' required />
              <input type='submit' className='btn btn-green' />
            </form>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    csrftoken: state.audit.csrf_token,
  };
}

export default connect(mapStateToProps, { userLogin })(AuthSection);
