import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import bg from 'react-intl/locale-data/bg';
import cs from 'react-intl/locale-data/cs';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import hi from 'react-intl/locale-data/hi';
import id from 'react-intl/locale-data/id';
import it from 'react-intl/locale-data/it';
import ja from 'react-intl/locale-data/ja';
import ko from 'react-intl/locale-data/ko';
import nl from 'react-intl/locale-data/nl';
import no from 'react-intl/locale-data/no';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import ro from 'react-intl/locale-data/ro';
import ru from 'react-intl/locale-data/ru';
import tr from 'react-intl/locale-data/tr';
import uk from 'react-intl/locale-data/uk';
import vi from 'react-intl/locale-data/vi';
import zh from 'react-intl/locale-data/zh';

addLocaleData([
  ...en,
  ...ar,
  ...bg,
  ...cs,
  ...de,
  ...es,
  ...fr,
  ...hi,
  ...id,
  ...it,
  ...ja,
  ...ko,
  ...nl,
  ...no,
  ...pl,
  ...pt,
  ...ro,
  ...ru,
  ...tr,
  ...uk,
  ...vi,
  ...zh,
]);

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
