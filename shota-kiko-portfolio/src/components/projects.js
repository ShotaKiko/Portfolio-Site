import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import MyFieldTrip from './projectCards/fieldtrip'
import ImmunTracker from './projectCards/immunTracker'

const Projects = () => (
    <section className="projectsPageContainer" id="projects">
        <SEO title="Project List" />
        
        <div className="projectHeader">
            <h2>Projects</h2>
        </div>
       
       <div className="projectsCardsContainer">
        <div className="project 1">
            <MyFieldTrip />
        </div>
        <div className="project 2">
            <ImmunTracker />
        </div>
        <div className="project 3">
            3   
        </div>
        <div className="project 4">
            4
        </div>
       </div>
     
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </section>
  )
  
  export default Projects