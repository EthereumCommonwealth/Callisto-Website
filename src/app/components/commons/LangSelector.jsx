import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LangSelector extends Component {
  state = {
    open: false,
    selected: '',
  };

  componentWillMount() {
    this.setState({ selected: this.props.defaultSelected });
  }

  handleOpen = (event) => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  closeMenu = (event) => {
    event.preventDefault();
    this.setState({ open: false });
  }

  handleSelect = (event, selection) => {
    event.preventDefault();
    this.setState({ selected: selection });
  }

  render() {
    const { selected, open } = this.state;
    return (
      <div className='LangSelector' onClick={this.handleOpen} onMouseLeave={this.closeMenu}>
        <div className='LangSelector-selected'>
          <span className='LangSelector-selected-text'>
            <img
              src={`/image/country-flags/${selected}.png`}
              className='LangSelector-flag'
            /> {selected} {open ?
              <i className='fas fa-angle-up' /> : <i className='fas fa-angle-down' />
            }
          </span>
        </div>
        {open ?
          (
            <ul className='LangSelector-list'>
              {this.props.langList.map((elem, index) => {
                if (elem !== selected) {
                  return (
                    <li
                      key={`LangSelector-${index}`}
                      className='LangSelector-list-elem'
                      onClick={event => this.handleSelect(event, elem)}
                    >
                      <Link
                        className='LangSelector-list-elem-anchor'
                        to={elem === 'en' ? '/' : `/${elem}`}
                      >
                        <img
                          src={`/image/country-flags/${elem}.png`}
                          className='LangSelector-flag'
                        /> {elem}
                      </Link>
                    </li>
                  )
                }
                return null
              })}
            </ul>
          ) : null
        }
      </div>
    );
  }
}

LangSelector.propTypes = {
  defaultSelected: PropTypes.string,
};

export default LangSelector;
