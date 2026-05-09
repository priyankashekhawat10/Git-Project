import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

      <div className='logo'>
        <h2>NYKAA</h2>
      </div>

      <ul className='nav-links'>

        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>

      </ul>

    </div>
  )
}

export default Navbar