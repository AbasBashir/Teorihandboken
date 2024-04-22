import React,{useContext} from 'react'
import { NavbarContext } from '../App';
import { NavLink} from 'react-router-dom'

function Programmeringsmetodik() {

  const heading = ['Versionshantering','Benchmarking','Testdriven utveckling','Deploy & staging', 'Debugging', 'Dokumentation', 'Struktur av kod', 'Automatisering av arbetsflöde', 'Virtualisering av utvecklingsmiljö', 'Bundeling verktyg', 'Terminalinterface'];

  const closeNavbar = useContext(NavbarContext);

  return (
    <div className='flex-col space-y-2'>
      {heading.map((mainHeading,index) => (

      <NavLink style={({ isActive}) => {
        return {
          color: isActive ? "#3498db" : "",
          fontWeight: isActive ? "bold" : "normal",
        };
      }} to={`/Programmeringsmetodik/${mainHeading}`} key={index} onClick={closeNavbar}>
        <h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>{4}.{index+1} {mainHeading}</h4>
      </NavLink>))}

    </div>
  )

}

export default Programmeringsmetodik
