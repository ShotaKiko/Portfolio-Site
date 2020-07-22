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
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
    navButton2:{
        color: "white",
        backgroundColor: navButtonColor,
        borderLeft:"1px solid",
        borderLeftColor: buttonBorderColor,
        '&:hover': {
          background: navButtonHoverColor,
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
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
                        </h3>
                    </div>
                        <div className="aboutText">
                            <div className="profilePicContainer">
                                <img 
                                    className="profilePic" 
                                    src="https://imagehost.imageupload.net/2020/05/28/profilepic2.th.jpg" 
                                    alt="Shota Kiko Profile Pic"
                                />
                            </div>
                        <div className="textCard">
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
                                    analytical and detail oriented approach which I bring to software development.
                                    Most recently, my time spent as a Team Lead has provided me with valuable skills working 
                                    and leading others to complete project objectives and exceed expectations.
                                    </p>
                                </div>
                                <div className="text 3">
                                    <p>
                                    I am constantly curious and learning about new technologies and 
                                    excited to apply all that I learn toward building solutions for real world problems.
                                    </p>
                                </div>
                        </div>

                    </div>
                </div>
        
                <div className="aboutRight">
                    <div className="aboutRightHeader">
                        <h3>Technologies</h3>
                    </div>
                    
                    <div className="iconContainer">
                        <div className="firstRow">
                            
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-html5-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced with writing dry semantic HTML5</p>
                                    </div> 
                                </div>
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-css3-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">CSS3 Styling to optimize UX</p>
                                    </div> 
                                </div>
                            </div>
                            
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-javascript-plain colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced writing ES6 Javascript</p>
                                    </div> 
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="secondRow">

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-react-original-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">React hooks as well as Redux for state management</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-nodejs-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Building REST APIs with Node.js</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-express-original-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text"> Building Node servers with Express framework</p>
                                    </div> 
                                </div>
                                
                            </div>

                        </div>
                        
                        <div className="thirdRow">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-python-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text"> Experienced in web development and automation with Python </p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-django-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text"> Building RESTful APIs with Django</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-postgresql-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced using/designing SQL and Postgres databases</p>
                                    </div> 
                                </div>
                                
                            </div>

                        </div>

                        <div className="fourthRow">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-heroku-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced with heroku deployment and configuration</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-git-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced with git version control</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-github-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced with Github flow and resolving merge conflicts</p>
                                    </div> 
                                </div>
                                
                            </div>

                        </div>

                        <div className="fifthRow">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-less-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced using Less framework for scalable apps</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-sass-original colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced using Sass framework for scalable apps</p>
                                    </div> 
                                </div>
                                
                            </div>

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    
                                        <i class="flip-card-front devicon-bootstrap-plain-wordmark colored"></i>
                                    
                                    <div className="flip-card-back">
                                        <p className="flip-card-text">Experienced using Bootsrap for UI styling</p>
                                    </div> 
                                </div>
                                
                            </div>
 
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
