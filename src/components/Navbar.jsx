import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1>SiroSanjaya</h1>
        </a>
        <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'mobile-nav-show' : 'mobile-nav-hide'}`}>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/About">About</a></li>
            <li className="dropdown">
              <a href="#"><span>Gallery</span><FaChevronDown /></a>
              <ul>
                <li><a href="/gallery/nature">Nature</a></li>
                <li><a href="/gallery/people">People</a></li>
                <li><a href="/gallery/architecture">Architecture</a></li>
                <li><a href="/gallery/animals">Animals</a></li>
                <li><a href="/gallery/sports">Sports</a></li>
                <li><a href="/gallery/travel">Travel</a></li>
                <li className="dropdown">
                  <a href="#"><span>Sub Menu</span><FaChevronDown /></a>
                  <ul>
                    <li><a href="#">Sub Menu 1</a></li>
                    <li><a href="#">Sub Menu 2</a></li>
                    <li><a href="#">Sub Menu 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-social-links">
          <a href="#" className="twitter"><FaTwitter /></a>
          <a href="#" className="facebook"><FaFacebook /></a>
          <a href="#" className="instagram"><FaInstagram /></a>
          <a href="#" className="linkedin"><FaLinkedin /></a>
        </div>
        <i className="mobile-nav-toggle" onClick={toggleMobileNav}>
          {isMobileNavVisible ? <FaTimes /> : <FaBars />}
        </i>
      </div>
      
    </header>
    
  );
};

export default Navbar;
