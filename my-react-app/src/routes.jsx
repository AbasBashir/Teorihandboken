import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import AgilaMetoder from './ReadProjektmetodik/AgilaMetoder.jsx';
import IckeAgilaMetoder from './ReadProjektmetodik/IckeAgilaMetoder.jsx';
import Entreprenorskap from './ReadProjektmetodik/Entreprenorskap.jsx';
import IssuedistributionAndHandling from './ReadProjektmetodik/IssuedistributionAndHandling.jsx';

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
        element: <Entreprenorskap/>,
      },
      {
        path: 'Projektmetodik/IssuedistributionAndHandling',
        element: <IssuedistributionAndHandling/>,
      },
    ]
  },

]);

export default router;