// src/pages/Home.js
import { Link } from 'react-router-dom'; 
import galleryData from '../data/Gallery.json';
import React, { useState, useEffect } from 'react';
import { FaExpandArrowsAlt,FaLink  } from 'react-icons/fa';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Akses data dengan benar
    setImages(galleryData.home);
  }, []);
  
  return (
    <>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>I'm <span>Siro Sanjaya</span> a Professional Full Stack Web Developer & 3D Artist Envirolment from Indonesia</h2>
              <p>Blending Cutting-Edge Web Development Skills with Innovative 3D Artistry for Unique Digital Solutions.</p>
              <a href="contact.html" className="btn-get-started">Available for hire</a>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              {images.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item h-100">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a href={item.image} title={item.title} className="glightbox preview-link">
                        <i className="bi bi-arrows-angle-expand"><FaExpandArrowsAlt /></i>
                      </a>
                      <Link to={`/Gallery/${item.id}`} className="details-link">
                        <FaLink />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    
    </>
  );
}

export default Home;
