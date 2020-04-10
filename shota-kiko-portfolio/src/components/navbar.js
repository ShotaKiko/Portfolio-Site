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
            <div className="navlink 1">
                <Link to="home"  activeClass="active" spy={true} smooth={true} duration={1200}>
                    Home
                </Link>
            </div>

            <div className="navlink 2">
                <Link to="about" activeClass="active"  spy={true} smooth={true} duration={1000}>
                    About
                </Link>
            </div>
            
            <div className="navlink 3">
                <Link to="projects" activeClass="active" spy={true} smooth={true} duration={1000}>
                    Projects
                </Link>
            </div>
            
            <div className="navlink 4">
                <Link to="contact" activeClass="active" spy={true} smooth={true} duration={1200}>
                    Contact
                </Link>
            </div>
            
       </div>
       <div className="placeholder"></div>
    </div>
)

export default NavBar;