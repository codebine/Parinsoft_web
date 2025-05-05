import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/style.css";
import "../CSS/services.css";
import "../CSS/main.css";
import "../CSS/owl.css";
import "../CSS/animated.css";
import "../CSS/head.css";
import Logo from "../img/logo.png"

import step_1 from "../img/step-1.png"
import step_2 from "../img/step-2.jpg"
import step_3 from "../img/step-3.jpg"
import img1 from "../img/illustration1.svg"
import img2 from "../img/illustration2.svg"
import img3 from "../img/illustration3.svg"

const Services = () => {
    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <img src={Logo} alt="Chain App Dev" />
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <NavLink to="/Home">Home</NavLink>
                                    </li>
                                    <li className="scroll-to-section">
                                        <NavLink to="/About" >About</NavLink>
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

            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <h1>Services</h1>
                                <nav>
                                    <a href="/">Home</a>
                                    <i class="bi bi-slash"></i>
                                    <span>Services</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Head  */}
            {/* Services  */}
            <div class="section optech-section-padding5">
                <div class="container">
                    <div class="optech-section-title center">
                        <h2>Our working process on how to grow your business</h2>
                    </div>
                    <div class="row z-index">
                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
                            <div class="optech-numberbox-wrap">
                                <div class="optech-numberbox-icon">
                                    <img alt="Initiation and Planning Icon" width="228" height="220" decoding="async" src={img1} />
                                </div>
                                <div class="optech-numberbox-data">
                                    <span>01</span>
                                    <h4>Initiation &amp; Planning</h4>
                                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                            <div class="optech-numberbox-wrap">
                                <div class="optech-numberbox-icon">
                                    <img alt="Execution and Development Icon" width="228" height="220" decoding="async" src={img2} />
                                </div>
                                <div class="optech-numberbox-data">
                                    <span>02</span>
                                    <h4>Execution &amp; Development</h4>
                                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="900">
                            <div class="optech-numberbox-wrap">
                                <div class="optech-numberbox-icon">
                                    <img alt="Testing and Maintenance Icon" width="228" height="220" decoding="async" src={img3} />
                                </div>
                                <div class="optech-numberbox-data">
                                    <span>03</span>
                                    <h4>Testing &amp; Maintenance</h4>
                                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light1">
                    <div class="sectin  optech-section-padding">
                        <div class="container">
                            {/* <div class="optech-section-title center">
              <h2>Our awesome services to give you success</h2>
            </div> */}
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
                                        {/* <img alt="icon" width="36" height="36" decoding="async"
                        src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} /> */}
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
                                        {/* <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} /> */}
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
                                        {/* <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} /> */}
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
                                        {/* <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} /> */}
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
                                        {/* <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} /> */}
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

                {/* Services  */}
                {/* procedure */}
                <section class="service-details sec-mar">
                    <div class="container">
                        <div class="single-service-work-process">
                            <h3>How We Work in Our Services</h3>
                            <div class="single-step">
                                <div class="row">
                                    <div class="col-md-8 col-xl-8 or2">
                                        <div class="step">
                                            <div class="step-count">
                                                <span>01</span>
                                            </div>
                                            <h4>Wireframe &amp; Design</h4>
                                            <p>
                                                In euismod lacinia rhoncus. Morbi ornare, lectus quis
                                                mattis finibus, metus sapien venenatis orci, eget lacinia
                                                magna justo vehiculametus. Morbi sit amet erat faucibus,
                                                sagittis libero sed, condimentum tortor. Aenean ac nunc
                                                dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xl-4 or1">
                                        <div class="step-img">
                                            <img src={step_1} alt="Step 1" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="single-step">
                                <div class="row">
                                    <div class="col-md-4 col-xl-4">
                                        <div class="step-img">
                                            <img src={step_2} alt="Step 2" />
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-xl-8">
                                        <div class="step">
                                            <div class="step-count">
                                                <span>02</span>
                                            </div>
                                            <h4>Developing</h4>
                                            <p>
                                                In euismod lacinia rhoncus. Morbi ornare, lectus quis
                                                mattis finibus, metus sapien venenatis orci, eget lacinia
                                                magna justo vehiculametus. Morbi sit amet erat faucibus,
                                                sagittis libero sed, condimentum tortor. Aenean ac nunc
                                                dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="single-step">
                                <div class="row">
                                    <div class="col-md-8 col-xl-8 or2">
                                        <div class="step">
                                            <div class="step-count">
                                                <span>03</span>
                                            </div>
                                            <h4>Checkup &amp; Launch</h4>
                                            <p>
                                                In euismod lacinia rhoncus. Morbi ornare, lectus quis
                                                mattis finibus, metus sapien venenatis orci, eget lacinia
                                                magna justo vehiculametus. Morbi sit amet erat faucibus,
                                                sagittis libero sed, condimentum tortor. Aenean ac nunc
                                                dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xl-4 or1">
                                        <div class="step-img">
                                            <img src={step_3} alt="Step 3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* procedure */}
                {/* services */}
                <section id="services" class="services section">
                    <div class="container section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>Check our Services</p>
                    </div>

                    <div class="container">
                        <div class="row gy-4">
                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-activity"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Nesciunt Mete</h3>
                                    </a>
                                    <p>
                                        Provident nihil minus qui consequatur non omnis maiores. Eos
                                        accusantium minus dolores iure perferendis tempore et
                                        consequatur.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-broadcast"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Eosle Commodi</h3>
                                    </a>
                                    <p>
                                        Ut autem aut autem non a. Sint sint sit facilis nam iusto
                                        sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-easel"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Ledo Markt</h3>
                                    </a>
                                    <p>
                                        Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                                        Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-bounding-box-circles"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Asperiores Commodit</h3>
                                    </a>
                                    <p>
                                        Non et temporibus minus omnis sed dolor esse consequatur.
                                        Cupiditate sed error ea fuga sit provident adipisci neque.
                                    </p>
                                    <a class="stretched-link"> </a>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-calendar4-week"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Velit Doloremque</h3>
                                    </a>
                                    <p>
                                        Cumque et suscipit saepe. Est maiores autem enim facilis ut
                                        aut ipsam corporis aut. Sed animi at autem alias eius labore.
                                    </p>
                                    <a class="stretched-link"> </a>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <div class="service-item position-relative">
                                    <div class="icon">
                                        <i class="bi bi-chat-square-text"></i>
                                    </div>
                                    <a class="stretched-link">
                                        <h3>Dolori Architecto</h3>
                                    </a>
                                    <p>
                                        Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                                        neque non et debitis iure. Corrupti recusandae ducimus enim.
                                    </p>
                                    <a class="stretched-link"> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services */}

            </div>
        </div>

    )
}

export default Services
