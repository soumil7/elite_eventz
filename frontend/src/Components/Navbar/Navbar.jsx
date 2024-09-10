import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navBar">
            <ul className="navList">
                <Link to = '/'><li className="navItem">Home</li></Link>
                <Link to = '/package'><li className="navItem">Package</li></Link>
                <Link to = '/service'><li className="navItem">Service</li></Link>
                <Link to = '/contact'><li className="navItem">Contact</li></Link>
                <Link to = '/register'><li className="navItem">Registration</li></Link>
            </ul>
    </nav>
  )
}

export default Navbar
