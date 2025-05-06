/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/style.css";
import "../CSS/owl.css";
import "../CSS/animated.css";
import "../CSS/main.css";
// import Logo from "../img/ParinSoft.svg"
import slider from "../img/slider-dec.png"
import heading from "../img/heading-line-dec.png"
import about from "../img/about-right-dec.png"
import qoute from "../img/quote.png"
import client from "../img/client-image.jpg"
import thumb1 from "../img/thumb1.png";
import thumb2 from "../img/thumb2.png";
import shape1 from "../img/shape1.svg";
import shape2 from "../img/shape2.svg";


const home = () => {
  useEffect(() => {
    const trigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.main-nav .nav');

    const toggleDropdown = () => {
      nav.classList.toggle('show'); // Bootstrap-style show class
    };

    if (trigger && nav) {
      trigger.addEventListener('click', toggleDropdown);
    }

    return () => {
      if (trigger) {
        trigger.removeEventListener('click', toggleDropdown);
      }
    };
  }, []);

  return (
    <div>
      {/* <!-- ***** Header Area Start ***** --> */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  {/* <img src={Logo} alt="" style={{ marginTop: "-130px" }} /> */}
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <NavLink to="/Home" className="active">Home</NavLink>
                  </li>
                  <li className="scroll-to-section">
                    <NavLink to="/About">About</NavLink>
                  </li>
                  <li className="scroll-to-section">
                    <NavLink to="/Services">Services</NavLink>
                  </li>
                  {/* <li className="scroll-to-section">
                    <a href="#pricing">Technologies</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Consulting</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Products</a>
                  </li> */}
                  <li className="scroll-to-section">
                    <NavLink to="/Contact">Contact</NavLink>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> LogIn
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Get The Latest App From App Stores</h2>
                        <p>
                          Chain App Dev is an app landing page HTML5 template
                          based on Bootstrap v5.1.3 CSS layout provided by
                          TemplateMo, a great website to download free CSS
                          templates.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple"></i>
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={slider} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src={heading} alt="" />
                <p>
                  If you need the greatest collection of HTML templates for your
                  business, please visit{" "}
                  <a
                    rel="nofollow noreferrer"
                    href="https://www.toocss.com/"
                    target="_blank"
                  >
                    TooCSS
                  </a>{" "}
                  Blog. If you need to have a contact form PHP script, go to{" "}
                  <a href="https://templatemo.com/contact" target="_parent">
                    our contact page
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon"></div>
                <h4>App Maintenance</h4>
                <p>
                  You are not allowed to redistribute this template ZIP file on
                  any other website.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon"></div>
                <h4>Rocket Speed of App</h4>
                <p>
                  You are allowed to use the Chain App Dev HTML template. Feel
                  free to modify or edit this layout.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon"></div>
                <h4>Multi Workflow Idea</h4>
                <p>
                  If this template is beneficial for your work, please support
                  us{" "}
                  <a
                    rel="nofollow noreferrer"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    a little via PayPal
                  </a>
                  . Thank you.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon"></div>
                <h4>24/7 Help &amp; Support</h4>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit sedder
                  williamsburg photo booth quinoa and fashion axe.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>
                  About <em>What We Do</em> &amp; Who We Are
                </h4>
                <img src={heading} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Maintance Problems</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">24/7 Support &amp; Help</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Fixing Issues About</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Co. Development</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eismod tempor idunte ut labore et dolore adipiscing
                    magna.
                  </p>
                  <div className="gradient-button">
                    <a href="#">Start 14-Day Free Trial</a>
                  </div>
                  <span>*No Credit Card Required</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro  */}
      <div class="section large-padding-tb overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="optech-thumb extra-mr">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  alt="Main IT Solutions Thumbnail"
                  class="h-auto w-100 aos-init aos-animate"
                  sizes="100vw"
                  decoding="async" src={thumb1} />
                <div class="optech-thumb-position aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                  <img
                    alt="Additional IT Solutions Thumbnail" class="h-auto w-100" decoding="async" src={thumb2} />
                </div>
                <div class="optech-shape1">
                  <img
                    alt="Decorative Shape 1"
                    width="133"
                    height="200"
                    decoding="async"
                    src={shape1} />
                </div>
                <div class="optech-shape2">
                  <img
                    alt="Decorative Shape 2"
                    width="104"
                    height="107"
                    decoding="async"
                    src={shape2} />
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end">
              <div class="optech-default-content ml40">
                <h2>More than 25+ years we provide IT solutions</h2>
                <h5>During this time, we’ve built a reputation for excellent client satisfaction as evidenced by our achievements.</h5>
                <p>Each demo built with Teba will look unique. You can customize almost any aspect of your website's appearance with just a few clicks. Each demo built with Teba will offer a different design.</p>
                <div class="optech-extra-mt">
                  <a class="optech-default-btn" data-text="More About Us" href="/about-us">
                    <span class="btn-wraper">More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro  */}

      {/*Services*/}
      <div className="bg-light1">
        <div class="sectin  optech-section-padding">
          <div class="container">
            <div class="optech-section-title center">
              <h2>Our awesome services to give you success</h2>
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Data Tracking <br /> Security</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center mt-5">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Data Tracking <br /> Security</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services*/}

      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Check What <em>The Clients Say</em> About Our App Dev
                </h4>
                <img src={heading} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>David Martino Co</h4>
                                <span className="date">30 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Financial Apps</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Jake Harris Nyo</h4>
                                <span className="date">29 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Digital Business</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>May Catherina</h4>
                                <span className="date">27 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Business &amp; Economics
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.7</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Random User</h4>
                                <span className="date">24 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">New App Ecosystem</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">3.9</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="last-thumb">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Mark Amber Do</h4>
                                <span className="date">21 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Web Development</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={qoute} alt="" />
                                    <p>
                                      “Lorem ipsum dolor sit amet, consectetur
                                      adpiscing elit, sed do eismod tempor
                                      idunte ut labore et dolore magna aliqua
                                      darwin kengan lorem ipsum dolor sit amet,
                                      consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={client} alt="" />
                                    <div className="right-content">
                                      <h4>David Martino</h4>
                                      <span>CEO of David Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={qoute} alt="" />
                                    <p>
                                      “CTO, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={client} alt="" />
                                    <div className="right-content">
                                      <h4>Jake H. Nyo</h4>
                                      <span>CTO of Digital Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={qoute} alt="" />
                                    <p>
                                      “May, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={client} alt="" />
                                    <div className="right-content">
                                      <h4>May C.</h4>
                                      <span>Founder of Catherina Co.</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={about} alt="" />
                                    <p>
                                      “Lorem ipsum dolor sit amet, consectetur
                                      adpiscing elit, sed do eismod tempor
                                      idunte ut labore et dolore magna aliqua
                                      darwin kengan lorem ipsum dolor sit amet,
                                      consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={about} alt="" />
                                    <div className="right-content">
                                      <h4>Random Staff</h4>
                                      <span>Manager, Digital Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={about} alt="" />
                                    <p>
                                      “Mark, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={about} alt="" />
                                    <div className="right-content">
                                      <h4>Mark Am</h4>
                                      <span>CTO, Amber Do Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  We Have The Best Pre-Order <em>Prices</em> You Can Get
                </h4>
                <img src={heading} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan App</h4>
                <div className="icon">
                  {/* <img src="assets/images/pricing-table-01.png" alt=""/> */}
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>20 TB of Storage</li>
                  <li className="non-function">Life-time Support</li>
                  <li className="non-function">Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan App</h4>
                <div className="icon">
                  {/* <img src="assets/images/pricing-table-01.png" alt=""/> */}
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>50 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan App</h4>
                <div className="icon">
                  {/* <img src="assets/images/pricing-table-01.png" alt=""/> */}
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>120 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li>Fastest Network</li>
                  <li>More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Join our mailing list to receive the news &amp; latest trends
                </h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p>
                  <a href="#">010-020-0340</a>
                </p>
                <p>
                  <a href="#">info@company.co</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Our Company</h4>
                <div className="logo">
                  <img src="assets/images/white-logo.png" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2025 Parinsoft. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default home;
