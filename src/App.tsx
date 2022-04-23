import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Chats from './components/Chats/Chats';
import SignInButton from "./components/Teams/SignInButton";

import styles from './App.module.scss'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Messages from './components/Messages/Messages';

import { useIsAuthenticated } from "@azure/msal-react";

const App = () => {

  const isAuthenticated = useIsAuthenticated();
  return (
    <Provider store={store}>
        { isAuthenticated 
          ? (
            <div>
              <Header />
              <div className={styles['main-wrapper']}>
                <Menu />
                <Chats />
                <Messages />
              </div>
            </div>
            ) 
          : <SignInButton /> }

    </Provider>
  );
}

export default App;
