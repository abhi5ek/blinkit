import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light navv">
          <ul className='navbar-nav'>

                <li className="navbar-nav">
                <button className='btn btn-warning ' >
                <NavLink className="nav-link text-white" to="signup">
                    Signup
                </NavLink>
                </button>
                </li>
                <li className="navbar-nav">
                <button className='btn btn-primary ms-5' >
                <NavLink className="nav-link text-white" to="login">
                    Login
                </NavLink>
                </button>
                </li>
        
            </ul>
        </nav>

  )
}

export default Navbar
