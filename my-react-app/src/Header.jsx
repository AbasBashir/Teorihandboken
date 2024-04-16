import React from 'react';

function Header() {
  return (
    <div className='bg-[#6BA368] border-b-2 border-black'>
      <h1 className='text-3xl pl-10 py-1.5 text-white font-light'>Teori<span className='text-black font-semibold italic'>handboken~</span></h1>
      <nav className='fixed bg-[#6BA368] h-full w-80 border-t-2 border-black'>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
