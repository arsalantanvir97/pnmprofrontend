import React from "react";
import { Link } from "react-router-dom";

const PaymentDetails = ({history}) => {
  return (
    <>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12 px-xl-4 pt-xl-2">
                  <div className="row my-sm-2 mx-2 align-items-baseline">
                    <div className="col-12">
                      <Link to='#' onClick={()=>{
                        history?.goBack()
                      }}
                        className="inner-heading-24 black-colour"
                      >
                        <i className="fas fa-arrow-left" /> Payment Details
                      </Link>
                    </div>
                  </div>
                  <div className="card mb-sm-5 mx-2">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row">
                          <div className="col-lg-12">
                            <h6 className="text-16 theme-colour bold">
                              <i className="fas fa-circle" />
                              Unpaid
                            </h6>
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-lg-12">
                            <img src="images/map-web.png" alt="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <h6 className="text-20">Payment Details</h6>
                            <div className="media booking-media">
                              <img
                                src="images/driver-detl-pic.png"
                                className="mr-3"
                                alt="..."
                              />
                              <div className="media-body">
                                <div className="d-flex align-items-center">
                                  <h5 className="text-20 d-inline-block mr-2">
                                    Liam Payne
                                  </h5>
                                </div>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="text-16">Total Amount </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">$ 525</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">My Commission</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">$ 10</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Driver's Share</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">$ 15</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Transaction ID</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">
                                    627a0fd40e582c4783740185
                                    </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Payment Method</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">Card</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Paid to</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">Adam</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Date</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">1 day ago</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Time</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">17:23</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-lg-12">
                            <a
                              href="#_"
                              className="site-btn"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#mark-paid"
                            >
                              Mark Paid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
