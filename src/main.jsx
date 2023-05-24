import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Layout/Routes/Routes.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import {

  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
    </div>
  </React.StrictMode>,
)
