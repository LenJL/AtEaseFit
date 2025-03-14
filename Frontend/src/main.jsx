import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={"668084960533-40585j48pn2i1ismjmd65gl41erah1nf.apps.googleusercontent.com"}>
    <App />
  </GoogleOAuthProvider>
);
