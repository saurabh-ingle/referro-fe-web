import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMenuOperations } from '../hooks/useMenuOperations';
import { useScrollOperations } from '../hooks/useScrollOperations';
import { useAnimations } from '../hooks/useAnimations';
import { tns } from 'tiny-slider';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import { FeatherIcon } from '../components/FeatherIcon';

const Home: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuOperations();
  const { elementRef } = useAnimations();
  const tinySliderRef = useRef<any>(null);
  const choicesRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Tiny Slider
    const sliderElement = document.querySelector('.tiny-five-item');
    if (sliderElement) {
      tinySliderRef.current = tns({
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
          1025: { items: 5 },
          992: { items: 4 },
          767: { items: 3 },
          425: { items: 1 },
        },
      });
    }

    // Initialize Choices.js
    const locationSelect = document.getElementById('choices-location');
    const typeSelect = document.getElementById('choices-type');
    
    if (locationSelect) {
      choicesRef.current = new Choices(locationSelect);
    }
    if (typeSelect) {
      new Choices(typeSelect);
    }

    // Cleanup
    return () => {
      if (tinySliderRef.current) {
        tinySliderRef.current.destroy();
      }
      if (choicesRef.current) {
        choicesRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Hero Start */}
      <section className="bg-half-260 d-table w-100" style={{ background: "url('/assets/images/hero/bg.jpg')" }}>
        <div className="bg-overlay bg-primary-gradient-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title-heading text-center">
                <h1 className="heading text-white fw-bold">Find & Hire Experts <br /> for any Job</h1>
                <p className="para-desc text-white-50 mx-auto mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                
                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-2 mt-4">
                  <form className="card-body text-start">
                    <div className="registration-form text-dark text-start">
                      <div className="row g-lg-0">
                        <div className="col-lg-3 col-md-6 col-12">
                          <div className="mb-3 mb-sm-0">
                            <label className="form-label d-none fs-6">Search :</label>
                            <div className="filter-search-form position-relative filter-border">
                              <FeatherIcon icon="search" className="fea icon-20 icons" />
                              <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keywords" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                          <div className="mb-3 mb-sm-0">
                            <label className="form-label d-none fs-6">Location:</label>
                            <div className="filter-search-form position-relative filter-border">
                              <FeatherIcon icon="map-pin" className="fea icon-20 icons" />
                              <select className="form-select" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                <option value="AF">Afghanistan</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="GM">Gambia</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                          <div className="mb-3 mb-sm-0">
                            <label className="form-label d-none fs-6">Type :</label>
                            <div className="filter-search-form relative filter-border">
                              <FeatherIcon icon="briefcase" className="fea icon-20 icons" />
                              <select className="form-select" data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                                <option selected value="1">Full Time</option>
                                <option value="2">Part Time</option>
                                <option value="3">Freelancer</option>
                                <option value="4">Remote Work</option>
                                <option value="5">Office Work</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                          <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn btn-primary searchbtn w-100" value="Search" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mt-2">
                  <span className="text-white-50">
                    <span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      {/* Hero End */}

      {/* Trending Services Start */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center mb-4 pb-2">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-3">Trending Services</h4>
                <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="tiny-five-item">
                {/* Service Item 1 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/01.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">Product & Branding Design</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Item 2 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/02.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">Wordpress Development</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Item 3 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/03.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">Audio & Video Editing</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Item 4 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/04.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">Admin & Customer Support</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Item 5 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/05.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">UX / UI Designer</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Item 6 */}
                <div className="tiny-slide">
                  <div className="card features rounded shadow position-relative overflow-hidden m-2">
                    <div className="card-body p-0">
                      <div className="card-img">
                        <img src="/assets/images/work/06.jpg" className="img-fluid" alt="" />
                        <div className="card-overlay"></div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Link to="#" className="title h5 text-white">Digital Marketing</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Services End */}

      {/* About Section Start */}
      <div className="container mt-100 mt-60">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="about-left">
              <div className="position-relative shadow rounded img-one">
                <img src="/assets/images/about/ab01.jpg" className="img-fluid rounded" alt="work-image" />
              </div>
              <div className="img-two shadow rounded p-2 bg-white">
                <img src="/assets/images/about/ab02.jpg" className="img-fluid rounded" alt="work-image" />
                <div className="position-absolute top-0 start-50 translate-middle">
                  <Link to="#" className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                    <i className="mdi mdi-play mdi-24px text-primary"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="section-title ms-lg-5">
              <h4 className="title mb-3">Millions of jobs. <br /> Find the one that's right for you.</h4>
              <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              
              <ul className="list-unstyled text-muted mb-0 mt-3">
                <li className="mb-1">
                  <span className="text-primary h5 me-2">
                    <i className="mdi mdi-check-circle-outline align-middle"></i>
                  </span>
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li className="mb-1">
                  <span className="text-primary h5 me-2">
                    <i className="mdi mdi-check-circle-outline align-middle"></i>
                  </span>
                  Our Talented & Experienced Marketing Agency
                </li>
                <li className="mb-1">
                  <span className="text-primary h5 me-2">
                    <i className="mdi mdi-check-circle-outline align-middle"></i>
                  </span>
                  Create your own skin to match your brand
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/about" className="btn btn-primary">
                  About Us <i className="mdi mdi-arrow-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Popular Job Listing Start */}
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center mb-4 pb-2">
          <div className="col-12">
            <div className="section-title text-center">
              <h4 className="title mb-3">Popular Job Listing</h4>
              <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-0">
          {/* Job Item 1 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/facebook-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Web Designer / Developer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 2 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/google-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Marketing Director</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 3 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/android.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Application Developer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 4 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/lenovo-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Senior Product Designer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 5 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/spotify.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">C++ Developer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 6 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/linkedin.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Php Developer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 7 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/circle-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Web Designer / Developer</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* Job Item 8 */}
          <div className="col-12">
            <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
              <div className="d-flex align-items-center w-310px">
                <img src="/assets/images/company/skype.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                <div className="ms-3">
                  <Link to="/job-detail" className="h5 title text-dark">Marketing Director</Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                <span className="badge bg-soft-primary rounded-pill">Full Time</span>
                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                  <FeatherIcon icon="clock" className="fea icon-sm me-1 align-middle" />
                  2 days ago
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                <span className="text-muted d-flex align-items-center">
                  <FeatherIcon icon="map-pin" className="fea icon-sm me-1 align-middle" />
                  Australia
                </span>
                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
              </div>

              <div className="mt-3 mt-md-0">
                <button className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark">
                  <FeatherIcon icon="bookmark" className="icons" />
                </button>
                <Link to="/job-detail" className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
              </div>
            </div>
          </div>

          {/* See More Jobs Button */}
          <div className="col-12">
            <div className="text-center">
              <Link to="/jobs" className="btn btn-link primary text-muted">
                See More Jobs <i className="mdi mdi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Job Listing End */}

      {/* Back to top */}
      <Link to="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="back-to-top" className="back-to-top rounded fs-5">
        <i data-feather="arrow-up" className="fea icon-sm align-middle"></i>
      </Link>
    </>
  );
};

export default Home; 