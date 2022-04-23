import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./store/teams/teamsConfig";
import './index.css';
import 'material-icons/iconfont/material-icons.css';
import App from './App';

const msalInstance = new PublicClientApplication(msalConfig)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
