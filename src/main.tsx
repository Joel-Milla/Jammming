// External libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
// External css
import 'bootstrap-icons/font/bootstrap-icons.css';
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
