import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Music from './pages/Music.jsx'
import Videos from './pages/Videos.jsx'
import Bookings from './pages/Bookings.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About />},
      { path: '/music', element: <Music />},
      { path: '/videos', element: <Videos />},
      { path: '/bookings', element: <Bookings />}
    ],
    
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
