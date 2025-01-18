import React, { useEffect } from 'react';
import './code.css';

const HeroSection = () => {
  useEffect(() => {
    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11312378702';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11312378702');
    `;
    document.head.appendChild(script2);
  }, []);

  const handleContactClick = () => {
    // Track the button click event
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: 'Contact Me Today',
        value: 'Contact'
      });
    }
    // Redirect to email
    window.location.href = 'mailto:Chris@Tophersmandr.com?subject=A Maintenance and Repair Request from';
  };

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