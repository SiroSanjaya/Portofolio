import React from 'react';
import {  FaChevronDown } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>SiroSanjaya</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/ */}
            Designed by <a href="https://bootstrapmade.com/">SiroSanjaya</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
  <FaChevronDown />
      </a>

      
    </>
  );
};

export default Footer;
