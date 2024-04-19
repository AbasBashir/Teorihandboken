import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className='bg-[#f9f7f7]'>
      <Header></Header>
      <Outlet/>
    </div>
  )
}

export default App





