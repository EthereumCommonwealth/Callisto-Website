import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import auth from '../../../services/auth';
import { userLogin, verifyToken, unsetUser } from '../../../actions/authActions';

class AuthSection extends PureComponent {

  state = {
    subMenu: false,
  }

  componentDidMount() {
    if (auth.currentUserExists()) {
      this.props.verifyToken(auth.token(), this.props.csrftoken);
    }
  }

  showSubMenu = event => {
    event.preventDefault()
    this.setState({ subMenu: true });
  }

  hideSubMenu = event => {
    event.preventDefault()
    this.setState({ subMenu: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLogin({
      username: event.target.username.value,
      password: event.target.password.value,
    }, this.props.csrftoken);
  };

  render() {
    return (
      <div className='AuthSection'>
        {this.props.user.user_id ?
          (
            <div className='AuthSection-info' onMouseEnter={this.showSubMenu} onMouseLeave={this.hideSubMenu}>
              {this.props.user.name !== '' ? this.props.user.name : this.props.user.username}
              {this.state.subMenu ?
                (
                  <div className='AuthSection-info-submenu'>
                    <span onClick={this.props.unsetUser} className='AuthSection-info-submenu-item'>
                      Log Out
                    </span>
                  </div>
                ) : null
              }
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
    user: state.user,
  };
}

export default connect(mapStateToProps, { userLogin, verifyToken, unsetUser })(AuthSection);
