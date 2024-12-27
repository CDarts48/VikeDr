import React, { useState } from 'react';
import { Link } from '../../renderer/Link'; // Use your custom Link component
import './code.css';

const Header = () => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = (event) => {
    event.preventDefault();
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <header className="header">
      <h1>Topher's Maintenance and Repair</h1>
      <nav>
        <ul className="nav">
          <li><Link href="/">Welcome</Link></li>
          <li><Link href="/about-us">Services</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/contact-us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;