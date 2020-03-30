import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about"

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
   
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    
    <About />
  </Layout>
)

export default IndexPage
