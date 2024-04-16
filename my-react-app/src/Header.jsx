import React from 'react';

function Header() {
  return (
    <div className='bg-[#6BA368] border-b-[1.5px]'>
      <h1 className='text-3xl pl-10 py-1.5 text-white font-light'>Teori<span className='text-black font-semibold italic'>handboken~</span></h1>
      <nav className='fixed bg-[#6BA368] h-full w-80 border-t-[1.5px] border-[#98c897]'>
        <ul className='relative top-5 flex flex-col space-y-12 justify-center border-2 border-red-500 p-3'>
            <li>Projektmetodik</li>
            <li>HTML-CSS</li>
            <li>UX-design</li>
            <li>Programmeringsmetodik</li>
            <li>JavaScript</li>
            <li>Backendutveckling</li>
            <li>Avancerad-JavaScript</li>
        </ul>
      </nav>
    </div>  
  )
}

export default Header
