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
        {/* check deployed status */}
       projects here

       </div>
     
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </div>
  )
  
  export default Projects