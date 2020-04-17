import React from 'react'
import { Link } from 'react-scroll'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import { makeStyles } from '@material-ui/core/styles';

import TextFields from './textfields'

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


export default function Contact() {
    const classes = useStyles()
    return(
        <section className="Contact" id="contact">
                <div className="contactHeader">
                  <h2>Contact</h2>
                </div>
                  
                <div className="theQuestionDiv">
                  <p>
                    Have a question or want to work together?
                  </p>
                </div>
                  
                <div className="contactForm">
                  <TextFields />
                </div>
                
                <div className="arrowButtons">
                <Link to="projects" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton1} variant="contained">
                        <KeyboardArrowUpIcon />
                    </Button>
                </Link>
                
                <Link to="home" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton2} variant="contained"> 
                        <ArrowUpwardIcon />
                    </Button>
                </Link>
                </div>
        </section>
    )
}