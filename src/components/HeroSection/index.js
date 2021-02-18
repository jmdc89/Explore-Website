import React from 'react';
// import { Button } from '../ButtonElements';
import "./HeroSection.scss"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"


function HeroSection() {

    return (
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Plan your next trip</p>
            <div className="hero-btns">
                {/* <Button fontBig big primary>Get Started</Button> */}
            </div>
        </div>
    )
}

export default HeroSection