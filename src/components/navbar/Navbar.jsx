import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>dimonbooking</span>
            <div className='navItem'>
                <button className='navButton'>Login</button>
                <button className='navButton'>Register</button>
            </div>
       </div>
    </div>
  )
}

export default Navbar