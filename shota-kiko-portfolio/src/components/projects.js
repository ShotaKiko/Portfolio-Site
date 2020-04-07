import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"

const Projects = () => (
    <div className="projectsPageContainer">
        <SEO title="Project List" />
        
        <div className="projectHeader">
            <h2>Projects</h2>
        </div>
       
       <div className="projectsCardsContainer">
        <div className="project 1">
            <img src="https://imagehost.imageupload.net/2020/04/07/myfieldtripp.png" alt="Field Trip Planner"/>
        </div>
        <div className="project 2">
            <img src="https://imagehost.imageupload.net/2020/04/07/myfieldtripp.png" alt="Field Trip Planner"/>
        </div>
        <div className="project 3">
            <img src="https://imagehost.imageupload.net/2020/04/07/myfieldtripp.png" alt="Field Trip Planner"/>
        </div>
        <div className="project 4">
            <img src="https://imagehost.imageupload.net/2020/04/07/myfieldtripp.png" alt="Field Trip Planner"/>
        </div>
       </div>
     
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </div>
  )
  
  export default Projects