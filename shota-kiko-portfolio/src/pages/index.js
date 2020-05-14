import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "../components/aboutMe"
import Projects from "../components/projects"
import Contact from "../components/contact"
// import About from "./about"

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   duration:1000,
//   once:true,
// })


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
