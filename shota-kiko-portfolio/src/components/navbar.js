import React from 'react'
import { Link }  from 'gatsby'

const NavBar = () =>(
    <div className="navcontainer-fluid">
       <div className="logoContainer">
        <img className="logoimage" src="https://imagehost.imageupload.net/2020/03/26/logov2.png" alt="logo"/>
        {/* <img src="../images/gatsby-icon.png" alt="test"></img> */}
       </div>
       <div className="navContainer">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
       </div>
       <div className="placeholder"></div>
    </div>
)

export default NavBar;