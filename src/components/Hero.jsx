import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <video className="hero-video" autoPlay loop muted playsInline>
                <source src={`${import.meta.env.BASE_URL}IMG_2349.mp4`} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="subheading">Ranikhet • Uttarakhand</span>
                <img src={`${import.meta.env.BASE_URL}ENGLISH-AATMAN-1024x322.png`} alt="Aatman Logo" className="hero-logo" />
                <p className="hero-subtitle">A couture-crafted mountain home.</p>
                <button className="cta-button">Experience Now</button>
            </div>
        </section>
    );
};

export default Hero;
