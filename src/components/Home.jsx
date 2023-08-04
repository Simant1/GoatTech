import React from 'react'
import './home.css'
import Button from 'react-bootstrap/esm/Button'
import message from '../img/message.png'
import about from '../img/about.jpg'
import skill from '../img/skill.jpg'
import { FaBusinessTime } from 'react-icons/fa'
import {
  BsFlagFill,
  BsCode,
  BsShop,
  BsCodeSquare,
  BsUsbSymbol,
} from 'react-icons/bs'
import customer from '../img/customers.jpg'
import CountUp from 'react-countup'

const Home = () => {
  function openForm() {
    document.getElementById('myForm').style.display = 'block'
  }
  function closeForm() {
    document.getElementById('myForm').style.display = 'none'
  }
  return (
    <>
      <div className="right1">
        <h1>We are Awesome team for Your business dream</h1>
        <p>
          We are the best all-in-one cloud-based school software and digital
          learning system for growing, big and ambitious names in education.
        </p>
        <Button variant="outline-light" className="btn-1">
          Get Started
        </Button>
      </div>
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle mediun shade4"></div>
        <div class="circle small shade5"></div>
      </div>

      <div className="about">
        <div className="left-about">
          <img
            src={about}
            alt="about"
            height={'550px'}
            width={'500px'}
            srcset=""
          />
        </div>
        <div className="right-about">
          <h6>About Us</h6>
          <h1>Empowering Technology Solutions in Nepal and Beyond</h1>
          <p>
            At Goat Tech, we are not just another IT company; we are a
            passionate team of technologists, visionaries, and problem solvers
            dedicated to transforming Nepal through technology. Established with
            a profound mission and a clear vision, our company strives to bring
            about positive change by harnessing the potential of innovative IT
            solutions.
          </p>
        </div>
      </div>

      <div className="features">
        <h6>Features</h6>
        <h2>Our Features</h2>
        <div className="features-main">
          <div className="features-col">
            <FaBusinessTime />
            <h3>Business Strategy</h3>
            <p>
              A clear vision and solid determination are required for a strategy
              to not just stay in theory, but to put into practice.
            </p>
          </div>
          <div className="features-col">
            <BsFlagFill />
            <h3>Marketing & Reporting</h3>
            <p>
              Marketing reporting is the process of measuring progress, showing
              value, and identifying actionable steps to improve marketing
              performance and meet your goals.
            </p>
          </div>
          <div className="features-col">
            <BsCode />
            <h3>IT Consultation</h3>
            <p>
              Leverage our expertise to make informed decisions about your IT
              infrastructure, cybersecurity, and technology strategies.
            </p>
          </div>
          <div className="features-col">
            <BsShop />
            <h3>E-Commerce Solutions</h3>
            <p>
              We create seamless and secure e-commerce platforms, empowering
              businesses to thrive in the digital marketplace.
            </p>
          </div>
          <div className="features-col">
            <BsCodeSquare />
            <h3>Comprehensive IT Solutions</h3>
            <p>
              We offer a wide range of comprehensive IT solutions to cater to
              the unique needs of our clients. Our services include, but are not
              limited to:
            </p>
          </div>
          <div className="features-col">
            <BsUsbSymbol />
            <h3>Software Development</h3>
            <p>
              We build powerful, tailor-made software solutions that streamline
              processes and boost efficiency for businesses across industries.
            </p>
          </div>
        </div>
      </div>

      <div className="services">
        <h6>Services</h6>
        <h2>Our services</h2>
        <div className="services-main">
          <div className="services-col">
            <h4>01</h4>
            <h3>UI/UX Design</h3>
            <p>
              The UI/UX Design Specialization brings a design-centric approach
              to user interface and user experience design, and offers
              practical, skill-based instruction centered around a visual
              communications perspective, rather than on one focused on
              marketing or programming alone.{' '}
            </p>
          </div>
          <div className="services-col">
            <h4>02</h4>
            <h3>Graphic Design</h3>
            <p>
              We understand that effective graphic design is not just about
              aesthetics; it is about communicating your brand's essence and
              values. Our designers work closely with you to comprehend your
              brand identity, target audience, and business goals.
            </p>
          </div>
          <div className="services-col">
            <h4>03</h4>
            <h3>SEO Solution</h3>
            <p>
              At Goat Tech, we go beyond just creating stunning websites; we
              also offer expert Search Engine Optimization (SEO) services to
              help your online presence reach new heights. Our dedicated team of
              SEO specialists employs cutting-edge strategies and best practices
              to ensure your website ranks higher.
            </p>
          </div>
          <div className="services-col">
            <h4>04</h4>
            <h3>Web design</h3>
            <p>
              From eye-catching websites to powerful web applications, our web
              development team creates online experiences that leave a lasting
              impression.
            </p>
          </div>
          <div className="services-col">
            <h4>05</h4>
            <h3>Digital Marketing</h3>
            <p>
              Amplify your brand's reach and visibility with data-driven digital
              marketing strategies tailored to your business goals.
            </p>
          </div>
          <div className="services-col">
            <h4>06</h4>
            <h3>App development</h3>
            <p>
              We build powerful, tailor-made App solutions that streamline
              processes and boost efficiency for businesses across industries.
            </p>
          </div>
        </div>
      </div>
      <div className="customers">
        <h1>More than 500 customers trusted US</h1>
        <div className="count">
          <h5>
            <span className="c">
              <CountUp end={320} delay={1} duration={5} />
            </span>
            cups of coffee
          </h5>
          <h5>
            <span className="c">
              <CountUp end={240} delay={1} duration={5} />
            </span>
            Project Complete
          </h5>
          <h5>
            <span className="c">
              <CountUp end={500} delay={1} duration={5} />
            </span>
            Happy customers{' '}
          </h5>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/469/232/original/abstract-white-background-with-halftone-texture-free-vector.jpg"
          alt="back"
          width={'100%'}
          height={'430px'}
        />
      </div>

      <div className="skills">
        <div className="left-skills">
          <img
            src={skill}
            alt="about"
            height={'450px'}
            width={'600px'}
            srcset=""
          />
        </div>
        <div className="right-skills">
          <h6>Skills</h6>
          <h1>Unlimited Skills for Super Projects.</h1>
          <p>
            Web design encompasses many different skills and disciplines in the
            production and maintenance of websites. The different areas of web
            design include web graphic design and standardized code.
          </p>
        </div>
      </div>

      <div className="work">
        <h6>Work</h6>
        <h2>Our Work</h2>
      </div>

      <section id="portfolio" className="portfolio">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="https://www.softwaresuggest.com/blog/wp-content/uploads/2021/02/Vidyalaya-dashboard.png"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>School Management system</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 1"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="https://user-images.githubusercontent.com/43706342/115986726-42a73600-a5cf-11eb-9c31-6d0002e272ef.png"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Hospital management system</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg?w=2000"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>E-commerce</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src="https://themewagon.com/wp-content/uploads/2020/11/jobfinder-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Job finder</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="https://img.freepik.com/premium-vector/delicious-food-menu-landing-page-template-homepage-design_631465-116.jpg?w=2000"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Restaurant website</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="https://storage.googleapis.com/sales.appinst.io/2020/03/restaurant-apps-banner.png"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Restaurant app</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="teams">
        <h6>Out Team</h6>
        <h2>Team</h2>

        <div class="row">
          <div class="team-col">
            <h3>Ritik Thapa</h3>
            <p>COO</p>
          </div>
          <div class="team-col">
            <h3>Ayushman T. Kshetri</h3>
            <p>CEO</p>
          </div>
          <div class="team-col">
            <h3>Roji Shrestha</h3>
            <p>HR MANAGER</p>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="testi-container">
          <h6>Our Clients</h6>
          <h2>Reviews</h2>

          <div class="row">
            <div class="testi-col">
              <div>
                <h3>Bijay Karki</h3>
                <h5 class="testi-header">
                  Excellient Experience with Goat Tech-
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  dolorem in ullam laboriosam dolores distinctio. Quis
                  praesentium, optio labore, ad itaque odit maxime earum eaque
                  in ipsa vero molestias atque eligendi tempora repudiandae
                  sapiente nisi magnam fuga id. Nemo nobis quidem necessitatibus
                  doloremque asperiores distinctio.
                </p>
              </div>
            </div>
            <div class="testi-col">
              <div>
                <h3>Ajay Ranabhat</h3>
                <h5 class="testi-header">
                  Excellient Experience with Goat Tech-
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  dolorem in ullam laboriosam dolores distinctio. Quis
                  praesentium, optio labore, ad itaque odit maxime earum eaque
                  in ipsa vero molestias atque eligendi tempora repudiandae
                  sapiente nisi magnam fuga id. Nemo nobis quidem necessitatibus
                  doloremque asperiores distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contacts">
        <h6>Contact Us</h6>
        <h2>Get in Touch</h2>

        <form action="" class="form-details">
          <div className="contact-details">
            <input type="text" placeholder="Name" class="contact-col" />
            <input type="email" placeholder="Email" class="contact-col" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button class="contact-btn">Send Message</button>
        </form>
      </section>

      <img
        src={message}
        alt="message"
        class="open-button"
        onClick={openForm}
      ></img>

      <div class="chat-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" class="btn">
            Send
          </button>
          <button type="button" class="btn cancel" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </>
  )
}

export default Home
