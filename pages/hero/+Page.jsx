import React from 'react';
import './code.css';
import { handleContactClick } from '../header/onClick';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/workpics/misc/rs=w_1280,h_853.jpg" alt="Tools on a Table" />
        </div>
        <div className="hero-text">
          <h1>Trusted Solutions</h1>
          <h2>Since 2012</h2>
          <p>Professional handyman for residential and commercial properties.</p>
          <button onClick={handleContactClick}>Contact Me Today!</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;