import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "../components/aboutMe"
// import About from "./about"


const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
   
    <div style={{ width: `600px`, marginBottom: `1.45rem` }}>
      
    </div>
    
    {/* <About /> */}
    <AboutMe />
  </Layout>
)

export default IndexPage
