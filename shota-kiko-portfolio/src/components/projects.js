import React from 'react'
import { Link } from "react-scroll"
import SEO from "../components/seo"

// ~~~~~~~~~~~~Projects~~~~~~~~~~~~~~~~~~~~~~~~
import MyFieldTrip from './projectCards/fieldtrip'
import ImmunTracker from './projectCards/immunTracker'
import Sonic from './projectCards/sonicLambdog'
import UIProject from './projectCards/uiProject'
import GameOfLife from './projectCards/gameOfLife'
import SpiderGraph from './projectCards/spiderGraph'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import { makeStyles } from '@material-ui/core/styles';
import 'aos/dist/aos.css';

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

export default function Projects() {
    const classes = useStyles();

    return (
    <section className="projectcontainer-fluid" id="projects">
        
        <SEO title="Portfolio" />
        
        <div className="projectHeader">
            <h2>Projects</h2>
        </div>
       
       <div className="projectsCardsContainer">
        <div className="project 1">
            <GameOfLife />
        </div>
        <div className="project 2">
            <MyFieldTrip />
        </div>
        <div className="project 3">
            <ImmunTracker />
        </div>
        
        <div className="project 5">
            <SpiderGraph />
        </div>
        
        <div className="project 6">
            <Sonic />  
        </div>

        <div className="project 6">
            <UIProject />
        </div>
       </div>
        
        <div className="projectArrows">
                <Link to="about" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton1} variant="contained">
                        <KeyboardArrowUpIcon />
                    </Button>
                </Link>
                
                <Link to="contact" activeClass="active" spy={true} smooth={true} duration={1100}>
                    <Button className={classes.navButton2} variant="contained"> 
                        <KeyboardArrowDownIcon />
                    </Button>
                </Link>
        </div>
        
    </section>
  );
}