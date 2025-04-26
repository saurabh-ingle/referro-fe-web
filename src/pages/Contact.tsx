import React from 'react';
import FeatherIcon from 'feather-icons-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <section className="bg-half-170 d-table w-100" style={{ background: "url('/assets/images/hero/bg.jpg')" }}>
        <div className="bg-overlay bg-primary-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title text-white mb-0"> Contact Us </h4>
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

      <section className="section pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
              <div className="card shadow rounded border-0">
                <div className="card-body py-5">
                  <h4 className="card-title">Get in touch!</h4>
                  <div className="custom-form mt-3">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="First Name :" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input name="subject" id="subject" className="form-control" placeholder="Your subject :" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                            <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Your Message :"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 order-1 order-md-2">
              <div className="card border-0">
                <div className="card-body p-0">
                  <img src="/assets/images/contact.svg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 text-center features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <FeatherIcon icon="mail" className="fea icon-ex-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">Start working with Jobnova that can provide everything</p>
                  <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <FeatherIcon icon="phone" className="fea icon-ex-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">Start working with Jobnova that can provide everything</p>
                  <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <FeatherIcon icon="map-pin" className="fea icon-ex-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-primary">View on Google map</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 