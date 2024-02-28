// External libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
// Components
import App from './App.tsx'
// Own styles
import './scss/main.scss';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
