import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...ru, ...es]);

class Layout extends PureComponent {

  render() {
    const { className, children, match } = this.props;
    return (
      <IntlProvider
        locale={match.params && match.params.lang && match.params.lang !== 'en' ?
          match.params.lang : 'en'
        }
        messages={{}}
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
