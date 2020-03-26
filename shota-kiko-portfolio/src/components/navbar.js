import React from 'react'
import { Link }  from 'gatsby'

const NavBar = () =>(
    <div className="container-fluid">
       <div className="logoContainer">
        <img className="logoimage" src="https://imagehost.imageupload.net/2020/03/26/logov2.png" alt="logo"/>
        {/* <img src="../images/gatsby-icon.png" alt="test"></img> */}
       </div>
       <div className="navContainer">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/contact"> Contact</Link>
       </div>
    </div>
)

export default NavBar;