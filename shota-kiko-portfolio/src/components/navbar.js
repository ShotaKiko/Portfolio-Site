import React from 'react'
import { Link }  from 'react-scroll'
import { animateScroll as scroll} from 'react-scroll'

const NavBar = () =>(
    <div className="navcontainer-fluid">
       <div className="logoContainer" >
        <img className="logoimage" src="https://imagehost.imageupload.net/2020/03/26/logov2.png" alt="logo" onClick={() => scroll.scrollToTop()}/>
        {/* <img src="../images/gatsby-icon.png" alt="test"></img> */}
       </div>
       <div className="navContainer">
            <Link to="home" smooth={true} duration={1200}>Home</Link>
            <Link to="about" smooth={true} duration={1000}>About</Link>
            <Link to="projects" smooth={true} duration={1000}>Projects</Link>
            <Link to="contact" smooth={true} duration={1200}>Contact</Link>
       </div>
       <div className="placeholder"></div>
    </div>
)

export default NavBar;