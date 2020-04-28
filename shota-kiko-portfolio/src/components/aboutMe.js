import React from 'react'
import { Link } from "react-scroll"
import SEO from "../components/seo"
import 'devicon'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import { makeStyles } from '@material-ui/core/styles';

const navButtonColor = cyan[700]
const navButtonHoverColor = cyan[500]
const buttonBorderColor= cyan[900]

const useStyles = makeStyles({
    navButton1:{
      color: "white",
      backgroundColor: navButtonColor,
      borderRight:"1px solid",
      borderRightColor: buttonBorderColor,
      '&:hover': {
        background: navButtonHoverColor,
      }
    },
    navButton2:{
        color: "white",
        backgroundColor: navButtonColor,
        borderLeft:"1px solid",
        borderLeftColor: buttonBorderColor,
        '&:hover': {
          background: navButtonHoverColor,
        }
      },
});

export default function AboutMe() {
    const classes = useStyles();
  
    return (
        <section className="aboutContainer" id="about">
        <SEO title="About" />  
            <div className="aboutContent">     
                <div className="aboutLeft">
                    <div className="aboutLeftHeader">
                        <h3>
                        About
                        {/* Quote? */}
                        </h3>
                    </div>
                    <div className="profilePicContainer">
                        <img className="profilePic" src="https://imagehost.imageupload.net/2020/04/28/profilepic-placeholder.jpg" alt="Shota Kiko"/>
                    </div>
                    <div className="aboutText">
                        
                        <div className="text 1">
                            <p>
                            I am a Full Stack Developer with experience building both front and backend 
                            architectures for a variety of applications. 
                            I am a fast learner, quick to build upon on my existing knowledge and resourceful 
                            in finding ways to bridge the gaps in my understanding.
                            </p>
                        </div>
                        <div className="text 2">
                            <p>
                            My work experience as a former scientist has led me to develop a highly
                            analytical and detail oriented approach which in turn I bring to software development.
                            Most recently my time spent as a Team Lead has provided me with valuable skills working 
                            and leading others to complete project objectives and exceed expectations.
                            </p>
                        </div>
                        <div className="text 3">
                            <p>
                            I am constantly curious and learning about new technologies, 
                            excited to apply all that I learn toward building solutions for real world problems.
                            </p>
                        </div>

                    </div>
                </div>
        
                <div className="aboutRight">
                    <div className="aboutRightHeader">
                        <h3>Technologies</h3>
                    </div>
                    
                    <div className="iconContainer">
                        <div className="firstRow">
                            <i class="devicon-html5-plain-wordmark colored"></i>
                            <i class="devicon-css3-plain-wordmark colored"></i>
                            <i class="devicon-javascript-plain colored"></i>
                        </div>
                        
                        <div className="secondRow">
                            <i class="devicon-react-original-wordmark colored"></i>
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                            <i class="devicon-express-original-wordmark colored"></i>
                        </div>
                        
                        <div className="thirdRow">
                            <i class="devicon-python-plain-wordmark colored"></i>
                            <i class="devicon-django-plain-wordmark colored"></i>
                            <i class="devicon-postgresql-plain-wordmark colored"></i>
                        </div>

                        <div className="fourthRow">
                            <i class="devicon-heroku-plain-wordmark colored"></i>
                            <i class="devicon-git-plain-wordmark colored"></i>
                            <i class="devicon-github-plain-wordmark colored"></i>
                        </div>

                        <div className="fifthRow">
                            <i class="devicon-less-plain-wordmark colored"></i>
                            <i class="devicon-sass-original colored"></i>
                            <i class="devicon-bootstrap-plain-wordmark colored"></i>
                        </div>
                    
                    </div>
                </div>
        </div> 
        
        <div className="aboutLink">
            
                <Link to="home" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton1} variant="contained">
                        <KeyboardArrowUpIcon />
                    </Button>
                </Link>
                
                <Link to="projects" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton2} variant="contained"> 
                        <KeyboardArrowDownIcon />
                    </Button>
                </Link>
            
        </div>
    </section>
  );
}
