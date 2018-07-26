import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import cs from 'react-intl/locale-data/cs';
import es from 'react-intl/locale-data/es';
import id from 'react-intl/locale-data/id';
import de from 'react-intl/locale-data/de';
import zh from 'react-intl/locale-data/zh';
import it from 'react-intl/locale-data/it';
import ko from 'react-intl/locale-data/ko';
import tr from 'react-intl/locale-data/tr';
import vi from 'react-intl/locale-data/vi';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

addLocaleData([...en, ...ru, ...es, ...cs, ...id, ...de, ...zh, ...it, ...ko, ...tr, ...vi]);

const NotFound = ({ match, messages }) => (
  <IntlProvider locale='en' messages={messages}>
    <div>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <div className='container'>
        <div className='NotFound'>
          <h1>404</h1>
          <h4>Page not found</h4>
          <h5>Try from our <a href='/'>home page</a></h5>
        </div>
      </div>
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </div>
  </IntlProvider>
);

function mapStateTopProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateTopProps)(NotFound);
