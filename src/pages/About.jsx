import React from 'react';

const About = () => {
  return (
    <main id="main" style={{ backgroundColor: 'black', color: 'white' }} data-aos="fade" data-aos-delay="1500">

      {/* ======= End Page Header ======= */}
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>About</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
              </p>
              <a className="cta-btn" href="contact.html">Available for hire</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="gallery/1.png" className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-5 content">
              <h2>Professional in Full Stack Web Development and 3D Environmental Art</h2>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Hello! I'm Siro Sanjaya, a professional from Indonesia with expertise in full stack web development and 3D environmental art. With years of experience, I have created various projects that combine cutting-edge web technology with stunning visual aesthetics.
              </p>
              <p className="m-0">
                As a full stack web developer, I am proficient in using various technologies such as Laravel, React.js, Node.js, and MySQL to build functional, responsive, and user-friendly web applications. I always ensure that every project I work on meets the highest quality standards and user needs.
              </p>
              <p className="py-3">
                On the other hand, as a 3D environmental artist, I have the ability to bring concepts and ideas to life in a visually stunning world. Using advanced software like Blender and Unreal Engine, I create realistic and detailed 3D environments, providing immersive and captivating visual experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

    </main>
  );
};

export default About;
