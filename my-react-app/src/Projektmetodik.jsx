import React from 'react'
import { Link} from 'react-router-dom'

function Projektmetodik() {
  return (
    <div className='flex-col space-y-2'>
        <Link to={'/Projektmetodik/AgilaMetoder'}><h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>Agila metoder</h4></Link>
        <Link to={'/Projektmetodik/IckeAgilaMetoder'}><h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>Icke-agila metoder</h4></Link>
        <Link to={'/Projektmetodik/Entreprenorskap'}><h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>Entreprenörskap</h4></Link>
        <Link to={'/Projektmetodik/IssuedistributionAndHandling'}><h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>Issue distribution & Handling</h4></Link>
    </div>
  )
}

export default Projektmetodik
