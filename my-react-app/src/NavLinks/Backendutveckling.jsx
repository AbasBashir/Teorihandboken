import React,{useContext} from 'react'
import { NavbarContext } from '../App';
import { NavLink} from 'react-router-dom'

function Backendutveckling() {

  const heading = ['Intro to PHP','OOP','Säkerhet i PHP','MVC', 'Wordpress', 'Heirarkiska databaser', 'Relationsdatabaser, SQL och ER-modellering', 'OAuth i backend', 'HTTP protokollet', 'cURL', 'REST', 'XML och andra dataformat', 'Webbservrar'];

  const closeNavbar = useContext(NavbarContext);

  return (
    <div className='flex-col space-y-2'>
      {heading.map((mainHeading,index) => (

      <NavLink style={({ isActive}) => {
        return {
          color: isActive ? "#3498db" : "",
          fontWeight: isActive ? "bold" : "normal",
        };
      }} to={`/Backendutveckling/${mainHeading}`} key={index} onClick={closeNavbar}>
        <h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>{6}.{index+1} {mainHeading}</h4>
      </NavLink>))}

    </div>
  )

}

export default Backendutveckling
