import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(prevState => !prevState);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-lg-0" style={{ textDecoration: 'none' }}>
          <h1>SiroSanjaya</h1>
        </a>
        <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/About">About</a></li>
            <li className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => toggleDropdown(1)}>
              <a href="#"><span>Gallery</span><FaChevronDown /></a>
              <ul>
                <li><a href="/gallery/nature">Web Development</a></li>
                <li><a href="/gallery/people">WordPress</a></li>
                <li><a href="/gallery/architecture">3D Art</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-social-links">
          <a href="https://github.com/SiroSanjaya" className="github"><FaGithub /></a>
          <a href="https://www.instagram.com/sersanjaya22" className="instagram"><FaInstagram /></a>
          <a href="#" className="linkedin"><FaLinkedin /></a>
        </div>
        <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
          {isMobileNavVisible ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
