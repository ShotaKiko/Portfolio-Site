import React from 'react'
import { Link } from 'react-scroll'

import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import { makeStyles } from '@material-ui/core/styles';

import TextFields from './textfields'
import Footer from './footer';

const navButtonColor = cyan[700]
const navButtonHoverColor = cyan[500]

const useStyles = makeStyles({
    navButton:{
      color: "white",
      backgroundColor: navButtonColor,
      '&:hover': {
        background: navButtonHoverColor,
      }
    },
});


export default function Contact() {
    const classes = useStyles()
    return(
        <section className="Contact" id="contact" style={{backgroundColor:"#181E28"}}>
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
                
                <div className="arrowButtons" style={{backgroundPositionY:"125%"}}>
                  <Link to="home" activeClass="active" spy={true} smooth={true} duration={1100}>
                      <Button className={classes.navButton} variant="contained" size="large"> 
                          <KeyboardCapslockIcon />
                      </Button>
                  </Link>
                </div>
                <div className="footerPosition">
                  <Footer />
                </div>
                
        </section>
    )
}