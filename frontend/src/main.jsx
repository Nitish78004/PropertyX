import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

// ⚠️ IMPORTANT: Replace 'YOUR_GOOGLE_CLIENT_ID_HERE' with your actual Google Client ID from Google Cloud Console
const GOOGLE_CLIENT_ID = "539727800776-4p22lqsmmnk5jft1e8g95nfufdnj5e4v.apps.googleusercontent.com"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
