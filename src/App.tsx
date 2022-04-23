import React from 'react';
import AppSignedIn from './AppSignedIn';
import SignInButton from "./components/Teams/SignInButton";

import { Provider } from 'react-redux';
import { store } from './store/store';

import { useIsAuthenticated } from "@azure/msal-react";

const App = () => {

  const isAuthenticated = useIsAuthenticated();
  
  return (
    <Provider store={store}>
      { !isAuthenticated 
        ? <SignInButton />
        : <AppSignedIn /> }
    </Provider>
  );
}

export default App;
