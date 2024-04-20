import React from 'react'
import menuDown from './assets/menu-down.svg';

function MenuItem({ title, content, isVisible, toggleSubnav, index }) {
  
  return (
    <div>
        <div className='flex items-center justify-between hover:bg-black hover:text-white' onClick={toggleSubnav}>
            <li className='hover:text-white'><button className='inline-block w-full pl-5 p-2 text-lg font-semibold font-mono'>{index+1}.{title}</button></li>
            <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
        </div>
        <div className={`transition-all duration-100 pl-5 ${isVisible ? 'opacity-100 scale-y-10' : 'opacity-0 scale-y-0 h-0'}`}>
            {content}
        </div>
    </div>
  )
}

export default MenuItem
