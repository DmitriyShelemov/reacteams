import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Chats from './components/Chats/Chats';

import styles from './App.module.scss'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className={styles['main-wrapper']}>
          <Menu />
          <Chats />
          <Messages />
        </div>
      </div>
    </Provider>
  );
}

export default App;
