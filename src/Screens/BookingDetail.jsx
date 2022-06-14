import React from "react";
import { Link } from "react-router-dom";

const BookingDetail = ({ history }) => {
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
                      <Link
                        to="#"
                        onClick={() => {
                          history?.goBack();
                        }}
                        className="inner-heading-24 black-colour"
                      >
                        <i className="fas fa-arrow-left" /> Bookings Details
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
                              Completed
                            </h6>
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-lg-12">
                            <img src="images/map-web.png" alt="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <h6 className="text-20">User Details</h6>
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
                                    <p className="text-16">Amount Paid </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">$ 525</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Payment Method</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">Cash</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Time</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">17:23</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Date</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">1 day ago</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 border-right border-left">
                            <h6 className="text-20">Driver Details</h6>
                            <div className="media booking-media">
                              <img
                                src="images/driver-detl-pic.png"
                                className="mr-3"
                                alt="..."
                              />
                              <div className="media-body">
                                <div className="d-flex align-items-center">
                                  <h5 className="text-20 d-inline-block mr-2">
                                    Adam
                                  </h5>
                                </div>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <p className="text-16 m-0">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy.
                                </p>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="text-16">Phone No</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">
                                      +44 123 456678
                                    </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">Email</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">
                                      adam@gmail.com
                                    </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-16">No. of Trips</p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="text-black-16">1</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <h6 className="text-20">Trip Details</h6>
                            <p className="text-16 my-2">
                              <i className="far fa-circle theme-colour" />
                              Pick Up Location:
                              <br />
                              B-15, block 2, Street Claum
                            </p>
                            <p className="text-16 m-0">
                              <i className="fas fa-map-marker-alt theme-colour" />
                              Drop Off Location: <br />
                              A-12, block 2, Street Malibu
                            </p>
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

export default BookingDetail;
