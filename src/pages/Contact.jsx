import React from 'react';

const Contact= () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      {/* ======= End Page Header ======= */}
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Contact</h2>
              <p>
                I’d love to hear from you! Whether you have a project in mind,
                want to discuss potential collaborations, or just want to say
                hello, feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Header */}

      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Bekasi, West Java, Indonesia</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>m.sirojudin220.com</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+62 823 2644 3269</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
          </div>

          <div className="row justify-content-center mt-4"></div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
  );
};

export default Contact;
