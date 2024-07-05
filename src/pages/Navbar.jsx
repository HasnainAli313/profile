import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-10 p-4 bg-gray-400'>
          <li className='hover:text-white hover:underline '>
            <Link  to="/home" >Home</Link>
          </li>
          <li className='hover:text-white hover:underline '>
            <Link  to="/about" >About</Link>
          </li>
          <li className='hover:text-white hover:underline '>
            <Link  to="/skills" >Skills</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
