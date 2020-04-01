import React from 'react'
import { Link }  from 'gatsby'

const NavBar = () =>(
    <div className="container-fluid">
       <div className="logoContainer">
        <img className="logoimage" src="https://imagehost.imageupload.net/2020/03/26/logov2.png" alt="logo"/>
        {/* <img src="../images/gatsby-icon.png" alt="test"></img> */}
       </div>
       <div className="navContainer">
        <Link to="/" style={{color:"white"}}> Home</Link>
        <Link to="/aboutMe" style={{color:"white"}}> About</Link>
        <Link to="/projects" style={{color:"white"}}> Projects</Link>
        <Link to="/contact" style={{color:"white"}}> Contact</Link>
       </div>
       <div className="placeholder"></div>
    </div>
)

export default NavBar;