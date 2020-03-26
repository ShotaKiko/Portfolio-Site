import React from 'react'
import { Link }  from 'gatsby'

const NavBar = () =>(
    <div className="container" style={{
        background: "white",
        color:"red"
    }}>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/contact"> Contact</Link>
    </div>
)

export default NavBar;