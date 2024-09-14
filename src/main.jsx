import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import App from './routes/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <BrowserRouter>
    <App  />
    </BrowserRouter>
  </React.StrictMode>,
)
