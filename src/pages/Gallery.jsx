import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import galleryData from '../data/Gallery.json'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  
  const { id } = useParams();
  const [galleryItem, setGalleryItem] = useState(null);

  useEffect(() => {
    const item = galleryData.gallery.find((item) => item.id === parseInt(id));
    setGalleryItem(item);
  }, [id]);


  if (!galleryItem) {
    return <div>Loading...</div>; 
  }

  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{galleryItem.title}</h2>
              <p>{galleryItem.subtitle}</p>
              <a className="cta-btn" href="contact.html">Available for hire</a>
            </div>
          </div>
        </div>
      </div>

      <section id="gallery-single" className="gallery-single">
        <div className="container">
          <div className="position-relative h-100">
            <Swiper
              spaceBetween={10}
              pagination={{ clickable: true }}
              navigation
              loop
              modules={[Pagination, Navigation]}
              className="portfolio-details-slider"
            >
              {galleryItem.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>{galleryItem.secondTitle}</h2>
                <p>{galleryItem.description}</p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                </p>
                
                <p>
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                </p>
                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong> <span>{galleryItem.category}</span></li>
                  <li><strong>Client</strong> <span>{galleryItem.client}</span></li>
                  <li><strong>Project URL</strong> <a href="#">{galleryItem.projectUrl}</a></li>
                  <li><a href={galleryItem.projectUrl} className="btn-visit align-self-start">Visit Website</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
