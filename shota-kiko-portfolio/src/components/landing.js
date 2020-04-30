import React from 'react'
import { Button } from 'reactstrap'
import { Link } from "react-scroll"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { gsap } from 'gsap'
import { Tween } from 'react-gsap';


const Landing = () => (
    <section className="landing" id="home">
        <div className="overlay"></div>
        <div className="landing-text-wrapper">
            <Tween from={{opacity: 0, duration: 7, x: -300}}>
                <h2 className="landing-text">
                    Hello, I'm Shota Kikozashvili.
                    <br></br>
                    I'm a Full-Stack Web Developer.
                    <br></br>
                </h2>
            </Tween>
            <Tween from={{opacity: 0, duration: 7, x: 300}}>
                <div>
                    <Link className="learnMore" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                        <Button color="info">
                            Learn More <ArrowForwardIcon />
                        </Button>
                    </Link>
                </div>
            </Tween>
        </div>
    </section>
)

// gsap.from('.landing-text', {opacity: 0, duration: 1, y: -100  })

export default Landing