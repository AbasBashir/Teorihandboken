import React,{useState, createContext} from "react";
import Header from './Header'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'

export const NavbarContext = createContext();

function App() {

  const [navbarStatus, setNavbarStatus] = useState(false); // State and handler for navbar

  const handleNavbar = () => {
    setNavbarStatus(!navbarStatus);
    console.log(navbarStatus);
  };

  const closeNavbar = () => {
    setNavbarStatus(false);
  };

  return (
    <div className='bg-[#f9f7f7]'>
      <Header handleNavbar={handleNavbar} navbarStatus={navbarStatus}></Header>
      <div className="flex flex-col sm:flex-row">
        <NavbarContext.Provider value={closeNavbar}>
            <Navbar navbarStatus={navbarStatus}/>
        </NavbarContext.Provider>
        <Outlet/>
      </div>
    </div>
  )
}

export default App





