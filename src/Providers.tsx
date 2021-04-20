import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store= {store} >
      <ThemeContextProvider>
          {children}
      </ThemeContextProvider>
    </Provider>
  )
}

export default Providers;
