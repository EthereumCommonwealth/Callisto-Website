import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { langs } from '../../constants/';

class LangSelector extends Component {
  state = {
    open: false,
    selected: '',
  };

  componentWillMount() {
    this.setState({ selected: this.props.defaultSelected });
  }

  setRouterPath(lang) {
    const { match } = this.props;
    switch (match.path) {
      case '/cold-staking/':
        if (lang === 'en') return '/cold-staking/'
        return `/${lang}/cold-staking/`
      case '/smart-contract-audit/':
        if (lang === 'en') return '/smart-contract-audit/'
        return `/${lang}/smart-contract-audit/`
      case '/financial-report/':
        if (lang === 'en') return '/financial-report/'
        return `/${lang}/financial-report/`
      case '/blog/':
        if (lang === 'en') return '/blog/'
        return `/${lang}/blog/`
      case '/blog/post/:slug/':
        if (lang === 'en') return `/blog/post/${match.params.slug}/`
        return `/${lang}/blog/post/${match.params.slug}/`
      case '/blog/topic/:slug/':
        if (lang === 'en') return `/blog/topic/${match.params.slug}/`
        return `/${lang}/blog/topic/${match.params.slug}/`
      case '/airdrop/':
        if (lang === 'en') return '/airdrop/'
        return `/${lang}/airdrop/`
      case '/faq/':
        if (lang === 'en') return '/faq/'
        return `/${lang}/faq/`
      case '/community-guidlines/':
        if (lang === 'en') return '/community-guidlines/'
        return `/${lang}/community-guidlines/`
      case `/:lang${langs}/cold-staking/`:
        if (lang === 'en') return '/cold-staking/'
        return `/${lang}/cold-staking/`
      case `/:lang${langs}/smart-contract-audit/`:
        if (lang === 'en') return '/smart-contract-audit/'
        return `/${lang}/smart-contract-audit/`
      case `/:lang${langs}/financial-report/`:
        if (lang === 'en') return '/financial-report/'
        return `/${lang}/financial-report/`
      case `/:lang${langs}/blog/`:
        if (lang === 'en') return '/blog/'
        return `/${lang}/blog/`
      case `/:lang${langs}/blog/post/:slug/`:
        if (lang === 'en') return `/post/${match.params.slug}/`
        return `/${lang}/blog/post/${match.params.slug}/`
      case `/:lang${langs}/blog/topic/:slug/`:
        if (lang === 'en') return `/blog/topic/${match.params.slug}/`
        return `/${lang}/blog/topic/${match.params.slug}/`
      case `/:lang${langs}/faq/`:
        if (lang === 'en') return '/faq/'
        return `/${lang}/faq/`
      case `/:lang${langs}/airdrop/`:
        if (lang === 'en') return '/airdrop/'
        return `/${lang}/airdrop/`
      case `/:lang${langs}/community-guidlines/`:
        if (lang === 'en') return '/community-guidlines/'
        return `/${lang}/community-guidlines/`
      default:
        if (lang === 'en') return '/'
        return `/${lang}/`;
    }
  }

  handleOpen = event => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  closeMenu = event => {
    event.preventDefault();
    this.setState({ open: false });
  }

  handleSelect = (event, selection) => {
    event.preventDefault();
    this.setState({ selected: selection });
  }

  changeLocation = (event, route) => {
    event.preventDefault();
    document.location = route;
  }

  render() {
    const { selected, open } = this.state;
    const ListClass = classNames('LangSelector-list', { 'to-top': this.props.toTop });
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
            <ul className={ListClass}>
              {this.props.langList.map((elem, index) => {
                if (elem !== selected) {
                  return (
                    <li
                      key={`LangSelector-${index}`}
                      className='LangSelector-list-elem'
                    >
                      <a
                        className='LangSelector-list-elem-anchor'
                        onClick={e => this.changeLocation(e, this.setRouterPath(elem))}
                      >
                        <img
                          src={`/image/country-flags/${elem}.png`}
                          className='LangSelector-flag'
                        /> {elem}
                      </a>
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
  toTop: PropTypes.bool,
  match: PropTypes.object,
};

export default withRouter(LangSelector);
