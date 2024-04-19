import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import AgilaMetoder from './ReadProjektmetodik/AgilaMetoder.jsx';
import IckeAgilaMetoder from './ReadProjektmetodik/IckeAgilaMetoder.jsx';
import Entreprenorskap from './ReadProjektmetodik/Entreprenorskap.jsx';
import IssuedistributionAndHandling from './ReadProjektmetodik/IssuedistributionAndHandling.jsx';
import PageNotFound from './PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <PageNotFound/>,
    children:[
      {
        path: 'Projektmetodik/Agila Metoder',
        element: <AgilaMetoder/>,
      },
      {
        path: 'Projektmetodik/Icke-agila Metoder',
        element: <IckeAgilaMetoder/>,
      },
      {
        path: 'Projektmetodik/Entreprenorskap',
        element: <Entreprenorskap/>,
      },
      {
        path: 'Projektmetodik/Issue distribution & Handling',
        element: <IssuedistributionAndHandling/>,
      },
    ]
  },

]);

export default router;