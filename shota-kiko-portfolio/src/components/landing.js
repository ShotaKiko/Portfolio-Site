import React from 'react'
import { Button } from 'reactstrap'
import { Link } from "react-scroll"


const Landing = () => (
    <section className="landing" id="home">
        <div className="overlay"></div>
        <div className="landing-text-wrapper">
            <h2 className="landing-text">
                Hello, I'm Shota Kikozashvili.
                <br></br>
                I'm a Fullstack Developer
                <br></br>
                <Button color="info"><Link to="about" smooth={true} duration={1000}>Learn More</Link></Button>
            </h2>
        </div>
    </section>
)

export default Landing