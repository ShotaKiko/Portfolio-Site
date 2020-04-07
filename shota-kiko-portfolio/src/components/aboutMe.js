import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import 'devicon'

const AboutMe = () => (
    <div className="aboutContainer">
        <SEO title="About" />
       
        <div className="aboutTop">
            <h2>About</h2>
            <p>Quote?</p>
        </div>
        
        <div className="aboutLeft">
            <h4>
            Hey there,<br></br>
            </h4>
            <h5>
            My name is Shota Kikozashvili<br></br>
            </h5>

            <p>
            I am a Full Stack Developer with experience building both front and backend architectures for a variety of applications.
            {/* My main languages are JavaScript and Python and I have extensive experience using . */}
            
            I am a fast learner, quick to build upon on my existing knowledge and resourceful in finding ways to bridge the gaps in my understanding.

            My work experience as a former scientitst has led me to develop a highly analytical and detail oriented approach which in turn I bring to software development.
            
            Most recently my time spent as a Team Lead has provided me with valuable skills working and leading others to complete project objectives and exceed expectations.

            <br></br>I am constantly curious and learning about new technologies, excited to apply all that I learn toward building solutions for real world problems.
            </p>
        </div>
        
        <div className="aboutRight">
            <div className="techHeader">
                <h4>Technologies</h4>
            </div>
            
            <div className="iconContainer">
                <div className="firstRow">
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original-wordmark colored"></i>
                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                </div>
                
                <div className="secondRow">
                    <i class="devicon-express-original-wordmark colored"></i>
                    <i class="devicon-python-plain-wordmark colored"></i>
                    <i class="devicon-django-plain-wordmark colored"></i>
                    <i class="devicon-postgresql-plain-wordmark colored"></i>
                    <i class="devicon-heroku-plain-wordmark colored"></i>
                </div>
                
                <div className="thirdRow">
                    <i class="devicon-git-plain-wordmark colored"></i>
                    <i class="devicon-github-plain-wordmark colored"></i>
                    <i class="devicon-less-plain-wordmark colored"></i>
                    <i class="devicon-sass-original colored"></i>
                    <i class="devicon-bootstrap-plain-wordmark colored"></i>
                </div>
            </div>
        </div>
        
        <div className="aboutLink">
            <Link to="/">Back to top</Link>
        </div>
    </div>
  )
  
  export default AboutMe