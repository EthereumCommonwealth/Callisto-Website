import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import id from 'react-intl/locale-data/id';
import messages from '../../constants/messages';

addLocaleData([...en, ...ru, ...es, ...id]);

class Layout extends PureComponent {

  getMessages = (lang) => {
    switch (lang) {
      case 'es':
        return messages.es;
      case 'en':
        return messages.en;
      case 'ru':
        return messages.ru;
      case 'id':
        return messages.id;
      default:
        return messages.en;
    }
  }

  render() {
    const { className, children, match } = this.props;
    const lang = (match.params && match.params.lang && match.params.lang !== 'en') ?
      match.params.lang : 'en';
    return (
      <IntlProvider
        locale={lang}
        messages={this.getMessages(lang)}
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
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
