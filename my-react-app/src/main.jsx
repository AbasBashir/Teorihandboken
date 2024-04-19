import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AgilaMetoder from './ReadProjektmetodik/AgilaMetoder.jsx';
import IckeAgilaMetoder from './ReadProjektmetodik/IckeAgilaMetoder.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: 'Projektmetodik/AgilaMetoder',
        element: <AgilaMetoder/>,
      },
      {
        path: 'Projektmetodik/IckeAgilaMetoder',
        element: <IckeAgilaMetoder/>,
      },
      {
        path: 'Projektmetodik/Entreprenorskap',
        element: <IckeAgilaMetoder/>,
      },
      {
        path: 'Projektmetodik/IssuedistributionAndHandling',
        element: <IckeAgilaMetoder/>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>,
)


