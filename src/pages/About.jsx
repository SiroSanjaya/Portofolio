import React from 'react';
import { FaReact,FaLaravel,FaGithub,FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaNodeJs     } from "react-icons/fa";
import { SiMariadbfoundation,SiBlender   } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

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
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
              Hello! I'm Siro Sanjaya, a professional from Indonesia with a deep passion for both full stack web development and 3D environmental art. Over the years, I've honed my skills across multiple domains, allowing me to craft innovative projects that seamlessly blend advanced technology with captivating visual aesthetics.
              </p>
              <p className="m-0">
              As a full stack web developer, I possess a robust understanding of various technologies, including Laravel, React.js, Node.js, MySQL, and WordPress. My expertise lies in building functional, responsive, and highly user-friendly web applications that cater to both business needs and user expectations. From developing backend architecture to designing intuitive front-end interfaces, I ensure that every aspect of my projects adheres to the highest quality standards. My proficiency in WordPress also enables me to create dynamic and customizable websites that are easy to manage and scale.
              </p>
              <p className="py-3">
              In addition to my web development expertise, I am also a skilled 3D environmental artist. My artistic vision, combined with technical proficiency, allows me to transform concepts and ideas into visually stunning 3D environments. Utilizing advanced software such as Blender and Unreal Engine, I create realistic and immersive worlds that captivate audiences and enhance the storytelling experience. Whether it's for video games, virtual reality, or animated films, my 3D environments bring a sense of depth and realism to any project.
              </p>
             
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      <section id="resume" class="resume">
    <div class="container"  data-aos="fade-up">

      <div class="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Alice Barkley</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
            </p>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Master of Fine Arts &amp; Graphic Design</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

    <section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
              <FaReact size={100} color="#61DAFB" />
              </div>
              <h4>React JS</h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange ">
              <div class="icon">
              <FaLaravel size={100} color="#61DAFB"/>
              </div>
              <h4>Laravel</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-Node ">
              <div class="icon">
              <FaNodeJs size={100} color="#61DAFB"/>
              </div>
              <h4>NodeJS</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-pink">
              <div class="icon">
              <SiMariadbfoundation size={100} color="#61DAFB"/>
              </div>
              <h4>MariaDB</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow">
              <div class="icon">
              <FaGithub  size={100} color="#61DAFB"/>
              </div>
              <h4>Github</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red">
              <div class="icon">
              <FaHtml5  size={100} color="#61DAFB"/>
              </div>
              <h4>HTML</h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-css">
              <div class="icon">
              <FaCss3Alt size={100} color="#61DAFB"/>
              </div>
              <h4>CSS</h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal">
              <div class="icon">
              <IoLogoJavascript size={100} color="#61DAFB"/>
              </div>
              <h4>JavaScript</h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-css">
              <div class="icon">
              <FaPhp  size={100} color="#61DAFB"/>
              </div>
              <h4>PHP</h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-css">
              <div class="icon">
              <FaWordpress  size={100} color="#61DAFB"/>
              </div>
              <h4>Wordpress</h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-blender">
              <div class="icon">
              <SiBlender size={100} color="#61DAFB"/>
              </div>
              <h4>Blender</h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
    
  );
};

export default About;
