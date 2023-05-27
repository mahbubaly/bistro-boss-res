import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Layout/Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';
import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>

        <HelmetProvider>

          <RouterProvider router={router} />

        </HelmetProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
