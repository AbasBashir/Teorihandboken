import React,{useContext} from 'react'
import { NavbarContext } from '../App';
import { NavLink} from 'react-router-dom'

function JavaScript() {

  const heading = ['Intro to ECMAScript','Ramverk och Bibliotek','Promises','OOP i JavaScript', 'DOM-manipulation', 'HTTP-requests', 'Lexical scope', 'Event handling', 'Prototype inheritance', 'Higher order functions', 'Single-thread programming', 'OAuth från frontend', 'Websockets'];

  const closeNavbar = useContext(NavbarContext);

  return (
    <div className='flex-col space-y-2'>
      {heading.map((mainHeading,index) => (

      <NavLink style={({ isActive}) => {
        return {
          color: isActive ? "#3498db" : "",
          fontWeight: isActive ? "bold" : "normal",
        };
      }} to={`/JavaScript/${mainHeading}`} key={index} onClick={closeNavbar}>
        <h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>{5}.{index+1} {mainHeading}</h4>
      </NavLink>))}

    </div>
  )
}

export default JavaScript
