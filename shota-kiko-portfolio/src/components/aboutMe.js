import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"

const AboutMe = () => (
    <div className="aboutContainer">
        <SEO title="About" />
       
        <div className="aboutTop">
            <h2>About Me</h2>
            <p>Quote?</p>
        </div>
        
        <div className="aboutLeft">
            <p>
            Hey there,<br></br>

            My name is Shota Kikozashvili<br></br>

            I am a Full Stack Developer with experience building both front and backend architectures for a variety of applications.
            {/* My main languages are JavaScript and Python and I have extensive experience using . */}
            
            I am a fast learner, quick to build upon on my existing knowledge and resourceful in finding ways to bridge the gaps in my understanding.

            My work experience as a former scientitst has led me to develop a highly analytical and detail oriented approach which in turn I bring to software development.
            
            Most recently my time spent as a Team Lead has provided me with valuable skills working and leading others to complete project objectives and exceed expectations.

            <br></br>I am constantly curious and learning about new technologies, excited to apply all that I learn toward building solutions for real world problems.
            </p>
        </div>
        
        <div className="aboutRight">right</div>
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </div>
  )
  
  export default AboutMe