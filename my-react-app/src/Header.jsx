import React from 'react';
import menuDown from './assets/menu-down.svg';

function Header() {
  return (
    <div className='bg-[#6BA368] border-b-[1.5px]'>
      <h1 className='text-3xl pl-10 py-1.5 text-white font-light'>Teori<span className='text-black font-semibold italic'>handboken~</span></h1>
      <nav className='fixed bg-[#6BA368] h-full w-80 border-t-[1.5px] border-[#98c897]'>
        <ul className='relative top-5 flex flex-col space-y-6 justify-center'>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>Projektmetodik</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>HTML-CSS</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>UX-design</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>Programmeringsmetodik</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>JavaScript</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>Backendutveckling</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
            <div className='flex items-center justify-between hover:bg-black hover:text-white'>
                <li className='hover:text-white'><a href="" className='inline-block w-full p-2 text-lg font-mono'>Avancerad-JavaScript</a></li>
                <img src={menuDown} alt="menu icon" className="w-8 h-8 mr-4 cursor-pointer hover:text-black" />
            </div>
        </ul>
      </nav>
    </div>  
  )
}

export default Header
