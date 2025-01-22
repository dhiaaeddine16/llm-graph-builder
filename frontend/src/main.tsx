import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/Auth/Auth.tsx';
import React from 'react';
import App from './App.tsx';
import { SKIP_AUTH } from './utils/Constants.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {SKIP_AUTH ? (
        <App />
      ) : (
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      )}
    </BrowserRouter>
  </React.StrictMode>
);
