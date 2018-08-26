import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
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
