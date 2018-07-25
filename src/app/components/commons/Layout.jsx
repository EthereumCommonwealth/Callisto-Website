import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import id from 'react-intl/locale-data/id';

addLocaleData([...en, ...ru, ...es, ...id]);

class Layout extends PureComponent {

  componentDidMount() {
    if (document.location.hash === '#pool') {
      scroller.scrollTo('pool', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#exchanges') {
      scroller.scrollTo('exchanges', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#about') {
      scroller.scrollTo('about', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#roadmap') {
      scroller.scrollTo('roadmap', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#mining') {
      scroller.scrollTo('mining', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#wallets') {
      scroller.scrollTo('wallets', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#team') {
      scroller.scrollTo('team', {
        duration: 500,
        offset: -150,
        delay: 100,
        smooth: true,
      });
    } else {
      animateScroll.scrollToTop({ duration: 10 });
    }
  }

  render() {
    const { className, children, match, messages } = this.props;
    const lang = (match.params && match.params.lang && match.params.lang !== 'en') ?
      match.params.lang : 'en';
    return (
      <IntlProvider
        locale={lang}
        messages={messages}
      >
        <div className={className}>
          {children}
        </div>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object,
  className: PropTypes.string,
  messages: PropTypes.object,
};

Layout.defaultProps = {
  className: '',
};

function mapStateTopProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateTopProps)(Layout);
