import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import AgilaMetoder from './ReadProjektmetodik/AgilaMetoder.jsx';
import IckeAgilaMetoder from './ReadProjektmetodik/IckeAgilaMetoder.jsx';
import Entreprenorskap from './ReadProjektmetodik/Entreprenorskap.jsx';
import IssuedistributionAndHandling from './ReadProjektmetodik/IssuedistributionAndHandling.jsx';
import PageNotFound from './PageNotFound.jsx';
import HTMLCSS from './ReadHTML-CSS/HTMLCSS.jsx';
import Optimering from './ReadHTML-CSS/Optimering.jsx';
import Preprocessorer from './ReadHTML-CSS/Preprocessorer.jsx';
import ResponsivDesign from './ReadHTML-CSS/ResponsivDesign.jsx';
import Tillganglighet from './ReadHTML-CSS/Tillganglighet.jsx';
import Webbstandarder from './ReadHTML-CSS/Webbstandarder.jsx';

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
      },{
        path: 'HTMLCSS/HTML & CSS',
        element: <HTMLCSS/>,
      },
      {
        path: 'HTMLCSS/Responsiv design',
        element: <ResponsivDesign/>,
      },
      {
        path: 'HTMLCSS/Tillganglighet inom webb',
        element: <Tillganglighet/>,
      },
      {
        path: 'HTMLCSS/Aktuella webbstandarder',
        element: <Webbstandarder/>,
      },
      {
        path: 'HTMLCSS/CSS Pre-processorer',
        element: <Preprocessorer/>,
      },
      {
        path: 'HTMLCSS/Optimering och validering av HTML & CSS',
        element: <Optimering/>,
      },
    ]
  },

]);

export default router;