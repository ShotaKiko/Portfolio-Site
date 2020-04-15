import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "../components/aboutMe"
import Projects from "../components/projects"
import Contact from "../components/contact"
// import About from "./about"


const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
   
    <div style={{ width: `60%`, marginBottom: `1.45rem` }}>
      
    </div>
    
    {/* <About /> */}
    <AboutMe />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
