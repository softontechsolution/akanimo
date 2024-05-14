import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music.jsx';
import Business from './Components/Business/Business.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/music", element: <Music /> },
  { path: "/business", element: <Business /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
