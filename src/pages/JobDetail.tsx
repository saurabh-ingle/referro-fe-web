import React from 'react';
import { Link } from 'react-router-dom';
import { FeatherIcon } from '../components/FeatherIcon';

const JobDetail: React.FC = () => {
  return (
    <>
      {/* Start */}
      <section className="bg-half d-table w-100">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow rounded p-4 sticky-bar">
                <img src="/assets/images/company/lenovo-logo.png" className="avatar avatar-medium p-4 rounded-pill shadow bg-white" alt="" />
                
                <div className="mt-4">
                  <h4 className="title mb-3">Back-End Developer</h4>
                  <p className="para-desc text-muted">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-flex align-items-center text-muted me-2">
                      <FeatherIcon icon="layout" className="fea icon-sm text-primary me-1" />
                      Lenovo pvt. ltd.
                    </li>
                    <li className="d-inline-flex align-items-center text-muted">
                      <FeatherIcon icon="map-pin" className="fea icon-sm text-primary me-1" />
                      Beijing, China
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="sidebar border-0">
                <h5 className="mb-0">Job Information:</h5>

                <ul className="list-unstyled mb-0 mt-4">                                
                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="user-check" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Employee Type:</h6>
                        <small className="text-primary mb-0">Full Time</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="map-pin" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Location:</h6>
                        <small className="text-primary mb-0">Beijing, China</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="clock" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Date posted:</h6>
                        <small className="text-primary mb-0">5th Sep, 2021</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="monitor" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Job Type:</h6>
                        <small className="text-primary mb-0">Back-end Developer</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="briefcase" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Experience:</h6>
                        <small className="text-primary mb-0">+2 Year</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="book" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Qualifications:</h6>
                        <small className="text-primary mb-0">MSCIT</small>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                    <div className="d-flex widget align-items-center">
                      <FeatherIcon icon="dollar-sign" className="fea icon-ex-md me-3" />
                      <div className="flex-1">
                        <h6 className="widget-title mb-0">Salary:</h6>
                        <small className="text-primary mb-0">+50k to 70k</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h5>Job Description: </h5>
                <p className="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                <p className="text-muted">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                
                <h5 className="mt-4">Responsibilities and Duties: </h5>
                <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                <ul className="list-unstyled">
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Participate in requirements analysis
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Write clean, scalable code using C# and .NET frameworks
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Test and deploy applications and systems
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Revise, update, refactor and debug code
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Improve existing software
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Develop documentation throughout the software development life cycle (SDLC)
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Serve as an expert on applications and provide technical support
                  </li>
                </ul>

                <h5 className="mt-4">Required Experience, Skills and Qualifications: </h5>
                <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                <ul className="list-unstyled">
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Proven experience as a .NET Developer or Application Developer
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Experience designing, developing and creating RESTful web services and APIs
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Basic know how of Agile process and practices
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Good understanding of object-oriented programming.
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Good understanding of concurrent programming.
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Sound knowledge of application architecture and design.
                  </li>
                  <li className="text-muted mt-2">
                    <FeatherIcon icon="arrow-right" className="fea icon-sm text-primary me-2" />
                    Excellent problem solving and analytical skills
                  </li>
                </ul>

                <div className="mt-4">
                  <Link to="/job-apply" className="btn btn-outline-primary">Apply Now <i className="mdi mdi-send"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center mb-4 pb-2">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-3">Related Vacancies</h4>
                <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="job-post job-type-three rounded shadow bg-white p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src="/assets/images/company/google-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                    <Link to="/employer-profile" className="h5 company text-dark d-block mt-2">Google</Link>
                  </div>

                  <ul className="list-unstyled align-items-center mb-0">
                    <li className="list-inline-item"><a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-3"></i></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="bookmark" className="icons" /></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="arrow-up-right" className="icons" /></a></li>
                  </ul>
                </div>

                <div className="mt-2">
                  <Link to="/job-detail" className="text-dark title h5">Marketing Director</Link>
                  <p className="text-muted mt-2">Looking for an experienced Web Designer for an our company.</p>

                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">Part Time</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">$4,000 - $4,500</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary"><i className="mdi mdi-map-marker me-1"></i>Australia</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="job-post job-type-three rounded shadow bg-white p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src="/assets/images/company/android.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                    <Link to="/employer-profile" className="h5 company text-dark d-block mt-2">Android</Link>
                  </div>

                  <ul className="list-unstyled align-items-center mb-0">
                    <li className="list-inline-item"><a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-3"></i></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="bookmark" className="icons" /></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="arrow-up-right" className="icons" /></a></li>
                  </ul>
                </div>

                <div className="mt-2">
                  <Link to="/job-detail" className="text-dark title h5">Application Developer</Link>
                  <p className="text-muted mt-2">Looking for an experienced Web Designer for an our company.</p>

                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">Remote</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">$4,000 - $4,500</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary"><i className="mdi mdi-map-marker me-1"></i>Australia</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="job-post job-type-three rounded shadow bg-white p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src="/assets/images/company/lenovo-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                    <Link to="/employer-profile" className="h5 company text-dark d-block mt-2">Lenovo</Link>
                  </div>

                  <ul className="list-unstyled align-items-center mb-0">
                    <li className="list-inline-item"><a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-3"></i></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="bookmark" className="icons" /></a></li>
                    <li className="list-inline-item"><a href="" className="btn btn-icon btn-sm btn-soft-primary"><FeatherIcon icon="arrow-up-right" className="icons" /></a></li>
                  </ul>
                </div>

                <div className="mt-2">
                  <Link to="/job-detail" className="text-dark title h5">Senior Product Designer</Link>
                  <p className="text-muted mt-2">Looking for an experienced Web Designer for an our company.</p>

                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">WFH</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary">$4,000 - $4,500</a></li>
                    <li className="d-inline-block me-1"><a href="" className="badge bg-primary"><i className="mdi mdi-map-marker me-1"></i>Australia</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
    </>
  );
};

export default JobDetail; 