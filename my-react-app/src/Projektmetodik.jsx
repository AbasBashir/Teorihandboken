import React from 'react'
import { Link} from 'react-router-dom'

function Projektmetodik() {

  const heading = ['Agila metoder','Icke-agila metoder','Entreprenorskap','Issue distribution & Handling'];

  return (
    <div className='flex-col space-y-2'>
      {heading.map((mainHeading,index) => (<Link to={`/Projektmetodik/${mainHeading}`} key={index}><h4 className='cursor-pointer hover:bg-black hover:text-white pl-4 p-1 text-md'>{mainHeading}</h4></Link>))}
    </div>
  )
}

export default Projektmetodik
