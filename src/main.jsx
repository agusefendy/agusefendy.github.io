import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes.jsx'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
