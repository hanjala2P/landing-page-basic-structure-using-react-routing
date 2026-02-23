import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Componants/Home.jsx'
import RootLayout from './Layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component:RootLayout,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
       path: '/contact',
       element: <Contact/>
    },

  // this is about page
       {
          path: '/about',
           element: <About/>
       }
    ]
  },
  
  // this is contact page

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
