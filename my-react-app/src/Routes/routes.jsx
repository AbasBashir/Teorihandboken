import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import App from '../App.jsx'
import AgilaMetoder from '../ReadProjektmetodik/AgilaMetoder.jsx';
import IckeAgilaMetoder from '../ReadProjektmetodik/IckeAgilaMetoder.jsx';
import Entreprenorskap from '../ReadProjektmetodik/Entreprenorskap.jsx';
import IssuedistributionAndHandling from '../ReadProjektmetodik/IssuedistributionAndHandling.jsx';
import PageNotFound from '../PageNotFound.jsx';
import HTMLCSS from '../ReadHTML-CSS/HTMLCSS.jsx';
import Optimering from '../ReadHTML-CSS/Optimering.jsx';
import Preprocessorer from '../ReadHTML-CSS/Preprocessorer.jsx';
import ResponsivDesign from '../ReadHTML-CSS/ResponsivDesign.jsx';
import Tillganglighet from '../ReadHTML-CSS/Tillganglighet.jsx';
import Webbstandarder from '../ReadHTML-CSS/Webbstandarder.jsx';
import EmpiriskaMetoder from '../ReadUxDesign/EmpiriskaMetoder.jsx';
import GrafikDesign from '../ReadUxDesign/GrafikDesign.jsx';
import GrundlaggandeKognitionspsykologi from '../ReadUxDesign/GrundlaggandeKognitionspsykologi.jsx';
import PersonasMalgruppsanalys from '../ReadUxDesign/PersonasMalgruppsanalys.jsx';
import Prototyping from '../ReadUxDesign/Prototyping.jsx';
import Riktlinjer from '../ReadUxDesign/Riktlinjer.jsx';
import UXAnvandbarhet from '../ReadUxDesign/UXAnvandbarhet.jsx';
import Versionshantering from '../ReadProgrammeringsmetodik/Versionshantering.jsx';
import Benchmarking from '../ReadProgrammeringsmetodik/Benchmarking.jsx';
import TestdrivenUtveckling from '../ReadProgrammeringsmetodik/TestdrivenUtveckling.jsx';
import DeployStaging from '../ReadProgrammeringsmetodik/DeployStaging.jsx';
import Debugging from '../ReadProgrammeringsmetodik/Debugging.jsx';
import Dokumentation from '../ReadProgrammeringsmetodik/Dokumentation.jsx';
import StrukturAvKod from '../ReadProgrammeringsmetodik/StrukturAvKod.jsx';
import AutomatiseringAvAbetsflode from '../ReadProgrammeringsmetodik/AutomatiseringAvAbetsflode.jsx';
import VirtualiseringAvUtvecklingsmiljo from '../ReadProgrammeringsmetodik/VirtualiseringAvUtvecklingsmiljo.jsx';
import BundelingVerktyg from '../ReadProgrammeringsmetodik/BundelingVerktyg.jsx';
import Terminalinterface from '../ReadProgrammeringsmetodik/Terminalinterface.jsx';
import ECMAScript from '../ReadJavaScript/ECMAScript.jsx';
import RamverkBibliotek from '../ReadJavaScript/RamverkBibliotek.jsx';
import Promises from '../ReadJavaScript/Promises.jsx';
import OOP from '../ReadJavaScript/OOP.jsx';
import DOMManipulation from '../ReadJavaScript/DOMManipulation.jsx';
import HTTPRequests from '../ReadJavaScript/HTTPRequests.jsx';
import LexicalScope from '../ReadJavaScript/LexicalScope.jsx';
import EventHandling from '../ReadJavaScript/EventHandling.jsx';
import PrototypeInheritance from '../ReadJavaScript/PrototypeInheritance.jsx';
import HigherOrderFunctions from '../ReadJavaScript/HigherOrderFunctions.jsx';
import SingleThreadProgramming from '../ReadJavaScript/SingleThreadProgramming.jsx';
import OAuth from '../ReadJavaScript/OAuth.jsx';
import Websockets from '../ReadJavaScript/Websockets.jsx';
import PHP from '../ReadBackendutveckling.jsx/PHP.jsx';
import OOPInPHP from '../ReadBackendutveckling.jsx/OOPInPHP.jsx';
import Sakerhet from '../ReadBackendutveckling.jsx/Sakerhet.jsx';
import MVC from '../ReadBackendutveckling.jsx/MVC.jsx';
import Wordpress from '../ReadBackendutveckling.jsx/Wordpress.jsx';
import HeirarkiskaDatabaser from '../ReadBackendutveckling.jsx/HeirarkiskaDatabaser.jsx';
import Relationsdatabaser from '../ReadBackendutveckling.jsx/Relationsdatabaser.jsx';
import OAuthInPHP from '../ReadBackendutveckling.jsx/OAuthInPHP.jsx';
import HTTPProtokollet from '../ReadBackendutveckling.jsx/HTTPProtokollet.jsx';
import IntroTocURL from '../ReadBackendutveckling.jsx/IntroTocURL.jsx';
import REST from '../ReadBackendutveckling.jsx/REST.jsx';
import Dataformat from '../ReadBackendutveckling.jsx/Dataformat.jsx';
import Webbservrar from '../ReadBackendutveckling.jsx/Webbservrar.jsx';

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
        path: 'Projektmetodik/Entreprenörskap',
        element: <Entreprenorskap/>,
      },
      {
        path: 'Projektmetodik/Issue distribution & Handling',
        element: <IssuedistributionAndHandling/>,
      },
      {
        path: 'HTMLCSS/HTML & CSS',
        element: <HTMLCSS/>,
      },
      {
        path: 'HTMLCSS/Responsiv design',
        element: <ResponsivDesign/>,
      },
      {
        path: 'HTMLCSS/Tillgänglighet inom webb',
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
      {
        path: 'UxDesign/Grafik & design',
        element: <GrafikDesign/>,
      },
      {
        path: 'UxDesign/UX & användbarhet',
        element: <UXAnvandbarhet/>,
      },
      {
        path: 'UxDesign/Riktlinjer',
        element: <Riktlinjer/>,
      },
      {
        path: 'UxDesign/Prototyping',
        element: <Prototyping/>,
      },
      {
        path: 'UxDesign/Personas & malgruppsanalys',
        element: <PersonasMalgruppsanalys/>,
      },
      {
        path: 'UxDesign/Empiriska metoder',
        element: <EmpiriskaMetoder/>,
      },
      {
        path: 'UxDesign/Grundläggande kognitionspsykologi',
        element: <GrundlaggandeKognitionspsykologi/>,
      },
      {
        path: 'Programmeringsmetodik/Versionshantering',
        element: <Versionshantering/>,
      },
      {
        path: 'Programmeringsmetodik/Benchmarking',
        element: <Benchmarking/>,
      },
      {
        path: 'Programmeringsmetodik/Testdriven utveckling',
        element: <TestdrivenUtveckling/>,
      },
      {
        path: 'Programmeringsmetodik/Deploy & staging',
        element: <DeployStaging/>,
      },
      {
        path: 'Programmeringsmetodik/Debugging',
        element: <Debugging/>,
      },
      {
        path: 'Programmeringsmetodik/Dokumentation',
        element: <Dokumentation/>,
      },
      {
        path: 'Programmeringsmetodik/Struktur av kod',
        element: <StrukturAvKod/>,
      },
      {
        path: 'Programmeringsmetodik/Automatisering av arbetsflöde',
        element: <AutomatiseringAvAbetsflode/>,
      },
      {
        path: 'Programmeringsmetodik/Virtualisering av utvecklingsmiljö',
        element: <VirtualiseringAvUtvecklingsmiljo/>,
      },
      {
        path: 'Programmeringsmetodik/Bundeling verktyg',
        element: <BundelingVerktyg/>,
      },
      {
        path: 'Programmeringsmetodik/Terminalinterface',
        element: <Terminalinterface/>,
      },
      {
        path: 'JavaScript/Intro to ECMAScript',
        element: <ECMAScript/>,
      },
      {
        path: 'JavaScript/Ramverk och Bibliotek',
        element: <RamverkBibliotek/>,
      },
      {
        path: 'JavaScript/Promises',
        element: <Promises/>,
      },
      {
        path: 'JavaScript/OOP i JavaScript',
        element: <OOP/>,
      },
      {
        path: 'JavaScript/DOM manipulation',
        element: <DOMManipulation/>,
      },
      {
        path: 'JavaScript/HTTP-requests',
        element: <HTTPRequests/>,
      },
      {
        path: 'JavaScript/Lexical scope',
        element: <LexicalScope/>,
      },
      {
        path: 'JavaScript/Event handling',
        element: <EventHandling/>,
      },
      {
        path: 'JavaScript/Prototype inheritance',
        element: <PrototypeInheritance/>,
      },
      {
        path: 'JavaScript/Higher order functions',
        element: <HigherOrderFunctions/>,
      },
      {
        path: 'JavaScript/Single-thread programming',
        element: <SingleThreadProgramming/>,
      },
      {
        path: 'JavaScript/OAuth från frontend',
        element: <OAuth/>,
      },
      {
        path: 'JavaScript/Websockets',
        element: <Websockets/>,
      },
      {
        path: 'Backendutveckling/Intro to PHP',
        element: <PHP/>,
      },
      {
        path: 'Backendutveckling/OOP',
        element: <OOPInPHP/>,
      },
      {
        path: 'Backendutveckling/Säkerhet i PHP',
        element: <Sakerhet/>,
      },
      {
        path: 'Backendutveckling/MVC',
        element: <MVC/>,
      },
      {
        path: 'Backendutveckling/Wordpress',
        element: <Wordpress/>,
      },
      {
        path: 'Backendutveckling/Heirarkiska databaser',
        element: <HeirarkiskaDatabaser/>,
      },
      {
        path: 'Backendutveckling/Relationsdatabaser, SQL och ER-modellering',
        element: <Relationsdatabaser/>,
      },
      {
        path: 'Backendutveckling/OAuth i backend',
        element: <OAuthInPHP/>,
      },
      {
        path: 'Backendutveckling/HTTP protokollet',
        element: <HTTPProtokollet/>,
      },
      {
        path: 'Backendutveckling/cURL',
        element: <IntroTocURL/>,
      },
      {
        path: 'Backendutveckling/REST',
        element: <REST/>,
      },
      {
        path: 'Backendutveckling/XML och andra dataformat',
        element: <Dataformat/>,
      },
      {
        path: 'Backendutveckling/Webbservrar',
        element: <Webbservrar/>,
      },
    ]
  },

]);

export default router;