import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Chats from './components/Chats/Chats';
import Messages from './components/Messages/Messages';
import SkypeSignInButton from "./components/Teams/SkypeSignInButton";

import styles from './AppSignedIn.module.scss'
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useMsal, useAccount } from "@azure/msal-react";

const AppSignedIn = () => {
  const accountInfo = useAccount();
  const { accounts } = useMsal();
  const {activeUser} = useTypedSelector(state => state)
  debugger;
  return(
    <div>
    { !activeUser?.skypeToken
        ? <SkypeSignInButton />
        : (
          <div>
            <Header />
            <div className={styles['main-wrapper']}>
              <Menu />
              <Chats />
              <Messages />
            </div>
          </div>
          ) }
    </div>
  );
}

export default AppSignedIn;
