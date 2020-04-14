import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"

// ~~~~~~~~~~~~Projects~~~~~~~~~~~~~~~~~~~~~~~~
import MyFieldTrip from './projectCards/fieldtrip'
import ImmunTracker from './projectCards/immunTracker'
import Sonic from './projectCards/sonicLambdog'
import UIProject from './projectCards/uiProject'

const Projects = () => (
    <section className="projectcontainer-fluid" id="projects">
        <SEO title="Project List" />
        
        <div className="projectHeader">
            <h2>Projects</h2>
        </div>
       
       <div className="projectsCardsContainer">
        <div className="project 1">
            <UIProject />
        </div>
        <div className="project 2">
            <ImmunTracker />
        </div>
        <div className="project 3">
            <MyFieldTrip />
        </div>
        <div className="project 4">
            <Sonic />  
        </div>
       </div>
     
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </section>
  )
  
  export default Projects