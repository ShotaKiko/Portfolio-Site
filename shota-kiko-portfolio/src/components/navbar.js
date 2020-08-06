import React from 'react'
import { Link }  from 'react-scroll'
import { animateScroll as scroll} from 'react-scroll'

const NavBar = () =>(
    <div className="navcontainer-fluid">
       <div className="logoContainer" >
        <img className="logoimage" src="https://res.cloudinary.com/dok0cky0u/image/upload/v1596752355/Portfolio/logov2_1_x1p4je.png" alt="logo" onClick={() => scroll.scrollToTop()}/>

       </div>
       

           <div className="navContainer">
               
            
                <Link  className="navlink 1" to="home" activeClass="active"   smooth={true} duration={1200} >
                    Home
                </Link>
            

            
                <Link className="navlink" to="about" activeClass="active"  spy={true} smooth={true} duration={1000}>
                    About
                </Link>
            
            
            
                <Link className="navlink" to="projects" activeClass="active" spy={true} smooth={true} duration={1000}>
                    Projects
                </Link>
            
            
            
                <Link className="navlink" to="contact" activeClass="active" spy={true} smooth={true} duration={1200}>
                    Contact
                </Link>
                
           </div>
            
      
       <div className="placeholder"></div>
    </div>
)

export default NavBar;