import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

class Layout extends PureComponent {
  render() {
    const { className, children, match } = this.props;
    return (
      <IntlProvider
        locale={match && match.params && match.params.lang ? match.params.lang : 'en'}
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
