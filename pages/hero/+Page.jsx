import React from 'react';
import './code.css';
import { handleContactClick } from '../../utils/onClick.js';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="/workpics/misc/rs=w_1280,h_853.avif"
            alt="Tools on a Table"
            loading="eager"
            width="1280"
            height="853"
          />
        </div>
        <div className="hero-text">
          <h1>Trusted Solutions</h1>
          <h2>15 years of service in the Denver Metro Area</h2>
          <p>Professional handyman services for homeowners and property management companies.</p>
          <a
            href="mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from"
            onClick={handleContactClick}
            className="contact-button"
          >
            Contact Me Today!
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;