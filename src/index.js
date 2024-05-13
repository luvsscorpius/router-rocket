import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Services from './Routes/Services/Services';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/aboutus',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

