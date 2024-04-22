import React,{useState} from 'react'
import menuDown from './assets/menu-down.svg';

function MenuItem({ title, content, isVisible, toggleSubnav, index }) {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
        <div className='flex items-center justify-between hover:bg-black hover:text-white'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={toggleSubnav}>
            <li className='hover:text-white'><button className='inline-block w-full pl-5 p-2 text-lg font-semibold font-mono'>{index+1}.{title}</button></li>
            <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer" style={{ filter: isHovered ? 'none' : 'invert(1)' }}/>
        </div>
        <div className={`transition-all duration-700 pl-5 overflow-hidden ${isVisible ? 'h-auto max-h-96' : 'max-h-0'}`}>
            {content}
        </div>
    </div>
  )
}

export default MenuItem
