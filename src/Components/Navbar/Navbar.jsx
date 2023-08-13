import React, { useState } from 'react';
import './Navbar.css'; // Import css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fasBar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className={`floating-icon ${isOpen ? 'open' : ''}`} onClick={toggleIcon}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;