import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Services from './Routes/Services/Services';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/services',
    element: <Services/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/aboutus',
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/contact',
    element: <Contact/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

