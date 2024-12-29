import React from 'react';
import './code.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/workpics/misc/rs=w_1280,h_853.jpg" alt="Tools on a Table" />
        </div>
        <div className="hero-text">
          <h1>Trusted Solutions</h1>
          <p>Professional handyman for residential and commercial properties.</p>
          <button onClick={() => window.location.href='mailto:Chris@Tophersmandr.com?subject=A Maintenance and Repair Request from'}>Contact Me Today!</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;