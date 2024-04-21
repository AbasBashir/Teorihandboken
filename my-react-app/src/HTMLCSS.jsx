import React,{useContext} from 'react'
import { NavbarContext } from './App';
import { NavLink} from 'react-router-dom'

function HTMLCSS() {
    const heading = ['HTML & CSS','Responsiv design','Tillganglighet inom webb','Aktuella webbstandarder', 'CSS Pre-processorer', 'Optimering och validering av HTML & CSS'];

    const closeNavbar = useContext(NavbarContext);
  
    return (
      <div className='flex-col space-y-2'>
        {heading.map((mainHeading,index) => (
  
        <NavLink style={({ isActive}) => {
          return {
            color: isActive ? "#fff" : "",
          };
        }} to={`/HTMLCSS/${mainHeading}`} key={index} onClick={closeNavbar}>
          <h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>{mainHeading}</h4>
        </NavLink>))}
  
      </div>
    )
}

export default HTMLCSS
