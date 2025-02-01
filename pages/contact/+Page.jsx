import React from 'react';
import './code.css';
import { handleContactClick } from '../header/onClick';

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-map">
        <iframe
          title="Westminster Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196487.123456789!2d-105.037204684623!3d39.8366529794487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d4c1b0f7b3%3A0x2b0b1e0b1b0b1e0b!2sWestminster%2C%20CO%2C%20USA!5e0!3m2!1sen!2s!4v1633024800000!5m2!1sen!2s"
          style={{ border: 0, width: '100%', height: '500px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <h2>Looking Forward to Hearing From You!</h2>
        <p>Topher's Maintenance and Repair</p>
        <p>Westminster, Colorado</p>
        <p>(720) 238-4082</p>
        <p>
          <a
            href="mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from"
            onClick={handleContactClick}
          >
            Chris@tophersmandr.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactSection;