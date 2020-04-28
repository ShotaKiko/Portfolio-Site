import React from 'react'
import { Button } from 'reactstrap'
import { Link } from "react-scroll"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Landing = () => (
    <section className="landing" id="home">
        <div className="overlay"></div>
        <div className="landing-text-wrapper">
            <h2 className="landing-text">
                Hello, I'm Shota Kikozashvili.
                <br></br>
                I'm a Full-Stack Web Developer.
                <br></br>
                <Link className="learnMore" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                    <Button color="info">
                        Learn More <ArrowForwardIcon />
                    </Button>
                </Link>
            </h2>
        </div>
    </section>
)

export default Landing