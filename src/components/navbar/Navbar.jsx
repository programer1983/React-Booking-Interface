import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" className='logo'>
            <span>dimonbooking</span>
          </Link>
            <div className='navItem'>
                <button className='navButton'>Login</button>
                <button className='navButton'>Register</button>
            </div>
       </div>
    </div>
  )
}

export default Navbar