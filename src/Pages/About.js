import React, { useEffect }  from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/style.css";
import "../CSS/owl.css";
import "../CSS/animated.css";
// import Logo from "../img/logo.png"


import "../CSS/about.css";
import "../CSS/main.css";
import "../CSS/head.css";
// import icon from "../img/mission-icon.png";
import bg_2 from "../img/valuable-skill.jpg";
import bg_3 from "../img/play-video.jpg";

const About = () => {
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
                                    {/* <img src={Logo} alt="Chain App Dev" /> */}
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="scroll-to-section">
                                        <NavLink to="/About" className="active">About</NavLink>
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
                                    {/* <li>
                          <div className="gradient-button">
                            <a id="modal_trigger" href="#modal">
                              <i className="fa fa-sign-in-alt"></i> Sign In Now
                            </a>
                          </div>
                        </li> */}
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

     
            {/* About  */}
            {/* <div className="main-banner-1  fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <section class="py-3 py-md-5">
                    <div class="container">
                        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div class="col-12 col-lg-6 col-xl-5">
                                <img class="img-fluid rounded" loading="lazy" src="./assets/img/about-img-1.jpg" alt="About 1" />
                            </div>
                            <div class="col-12 col-lg-6 col-xl-7">
                                <div class="row justify-content-xl-center">
                                    <div class="col-12 col-xl-11">
                                        <h2 class="mb-3">Who Are We?</h2>
                                        <p class="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                                        <p class="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                                        <div class="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div class="col-12 col-md-6">
                                                <div class="d-flex">
                                                    <div class="me-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 class="h4 mb-3">Versatile Brand</h2>
                                                        <p class="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="d-flex">
                                                    <div class="me-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 class="h4 mb-3">Digital Agency</h2>
                                                        <p class="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
            {/* About  */}
            <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>About</h1>
                <nav>
                  <a href="/">Home</a>
                  <i class="bi bi-slash"></i>
                  <span>About</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Head  */}
      <section className="about-area sec-mar">
        <div className="container">
          <div className="out-story">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="story-left mt-5">
                  <div className="office-group-img">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Office Group Image"
                    />
                    <div className="cto-message-wrapper">
                      <div className="cto-message">
                        <p>
                          Integer purus odio, placerat nec lessi rhoncus in,
                          ullamcorper nec dolor. Class aptent taciti sociosqu.
                        </p>
                        <h4>
                          Carlo Rabil.
                          <span>CTO &amp; FOUNDER, Finibus</span>
                        </h4>
                        <img
                          src="/images/cto-signature.png"
                          alt="CTO Signature"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-6">
                <div className="story-right">
                  <div className="title black">
                    <span>Inside Story</span>
                    <h2 className="mb-15">
                      We are a creative agency that creates beautiful
                      experiences.
                    </h2>
                  </div>
                  <p>
                    Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                    dolor. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Praesent nec neque
                    at dolor venenatis consectetur eu quis est. Donec lacinia
                    placerat felis non aliquam.
                  </p>
                  <div className="story-skills">
                    <div className="story-skill">
                      <svg
                        className="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          className="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                        ></path>
                        <path
                          className="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "311.018",
                            strokeDashoffset: "31.1018",
                          }}
                        ></path>
                        <text
                          className="CircularProgressbar-text"
                          x="50"
                          y="50"
                        >
                          90%
                        </text>
                      </svg>
                      <span>Idea &amp; Research</span>
                    </div>

                    <div className="story-skill">
                      <svg
                        className="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          className="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                        ></path>
                        <path
                          className="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "311.018",
                            strokeDashoffset: "15.5509",
                          }}
                        ></path>
                        <text
                          className="CircularProgressbar-text"
                          x="50"
                          y="50"
                        >
                          95%
                        </text>
                      </svg>
                      <span>Wireframe &amp; Design</span>
                    </div>

                    <div className="story-skill">
                      <svg
                        className="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          className="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                        ></path>
                        <path
                          className="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-49.5
                          a 49.5,49.5 0 1 1 0,99
                          a 49.5,49.5 0 1 1 0,-99
                        "
                          stroke-width="1"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "311.018",
                            strokeDashoffset: "37.3221",
                          }}
                        ></path>
                        <text
                          className="CircularProgressbar-text"
                          x="50"
                          y="50"
                        >
                          88%
                        </text>
                      </svg>
                      <span>Developing &amp; Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About  */}
      <section class="about-area sec-mar">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div class="about-left">
                <div class="title black">
                  <span>About Us</span>
                  <h2 class="mb-15">Direction with our company.</h2>
                </div>
                <p>
                  Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent nec neque at
                  dolor venenatis consectetur eu quis est. Donec lacinia
                  placerat felis non aliquam. Integer purus odio.
                </p>
                {/* <div class="our-mission">
                  <div class="msn-icon">
                    <img src={icon} alt="Mission Icon" />
                  </div>
                  <div class="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                      Integer purus odio, placerat nec rhoni olor. Class online
                      and video.
                    </p>
                  </div>
                </div> */}
                <div class="cmn-btn">
                  <a href="/about">About More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="about-right">
                <div class="group-images">
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="About Bottom Image"
                  />
                  <div class="about-top">
                    <img
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="About Top Image"
                    />
                  </div>
                  <div class="about-skills">
                    <div class="signle-skill">
                      <svg
                        class="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                        ></path>
                        <path
                          class="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "289.027",
                            strokeDashoffset: "43.354",
                          }}
                        ></path>
                        <text class="CircularProgressbar-text" x="50" y="50">
                          85%
                        </text>
                      </svg>
                      <div class="skill-content">
                        <h6>Web</h6>
                        <p>Clean Design</p>
                      </div>
                    </div>

                    <div class="signle-skill xsm">
                      <svg
                        class="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                        ></path>
                        <path
                          class="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "289.027",
                            strokeDashoffset: "92.4885",
                          }}
                        ></path>
                        <text class="CircularProgressbar-text" x="50" y="50">
                          68%
                        </text>
                      </svg>
                      <div class="skill-content">
                        <h6>App</h6>
                        <p>Developing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About  */}
      {/* why choose  */}
      <section class="why-choose-us sec-mar">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class="title black">
                <span>Why Choose Us</span>
                <h2 class="mb-15">
                  Success is just around the next online corner
                </h2>
              </div>
              <div class="video-demo">
                <img src={bg_3} alt="Play Video" />
                <div class="play-btn">
                  <div class="popup-video">
                    <i class="fas fa-play"></i> Play now
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class="valuable-skills">
                <img src={bg_2} alt="Valuable Skills" />
                <div class="single-bar pt-0">
                  <h6>Web Design</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "85%" }}></div>
                    <span>85%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>App Development</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "75%" }}></div>
                    <span>75%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>Backend</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "55%" }}></div>
                    <span>55%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>Video Animation</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "65%" }}></div>
                    <span>65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose  */}
      {/* call to action  */}
      <section class="lets-talk sec-pad">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-9 col-lg-8 col-xl-7">
              <div class="title special">
                <span>Let’s Talk</span>
                <h2>
                  About Your Next <br />
                  <b>Project</b> On Your Mind
                </h2>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-5 text-end">
              <div class="getin-touch">
                <div class="cmn-btn">
                  <a href="/contact">Get In Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* call to action  */}
        </div>
    )
}

export default About
