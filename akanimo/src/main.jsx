import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music.jsx';
import Business from './Components/Business/Business.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/music", element: <Music /> },
  { path: "/business", element: <Business /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
