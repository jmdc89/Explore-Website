import React from 'react';
import { Button } from '../ButtonElements';
import "./HeroSection.scss"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Plan yout next trip today</p>
            <div className="hero-btns">
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection