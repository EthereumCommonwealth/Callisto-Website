import React from 'react';
import { Provider } from 'react-redux';
import { ModalProvider } from 'styled-react-modal'
import { Web3ReactProvider } from '@web3-react/core'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from './store';
import { ThemeContextProvider } from './ThemeContext'

import {getLibrary} from './utils/web3React'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store= {store} >
      <ToastsProvider>
          <ThemeContextProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </ThemeContextProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers;
