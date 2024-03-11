import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initRoot } from './utils/themeProvider.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

const rootElement = document.getElementById('root')

initRoot(rootElement)
const root = ReactDOM.createRoot(rootElement)
root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
