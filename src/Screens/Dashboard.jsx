import React from "react";

const Dashboard = () => {
  return (
    <>

      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card ">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row">
                          <div className="col-xl-3 mt-1 col-sm-6 col-12 w-100">
                            <div className="dash-card mb-0">
                              <div className="d-sm-flex text-center mt-1 align-items-center justify-content-between">
                                <div>
                                  <img
                                    src="images/even.png"
                                    alt=""
                                    className="img-fluid mt-1"
                                  />
                                </div>
                                <h3 className="theme-colour text-50 mt-1">
                                  $316
                                </h3>
                              </div>
                              <h6 className="text-18">Total Revenue</h6>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-1 col-sm-6 col-12 w-100">
                            <div className="dash-card mb-0">
                              <div className="d-sm-flex text-center mt-1 align-items-center justify-content-between">
                                <div>
                                  <img
                                    src="images/booking.png"
                                    alt=""
                                    className="img-fluid mt-1"
                                  />
                                </div>
                                <h3 className="theme-colour text-50 mt-1">
                                  330
                                </h3>
                              </div>
                              <h6 className="text-18">Total Bookings</h6>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-1 col-sm-6 col-12 w-100">
                            <div className="dash-card mb-0">
                              <div className="d-sm-flex text-center mt-1 align-items-center justify-content-between">
                                <div>
                                  <img
                                    src="images/drive.png"
                                    alt=""
                                    className="img-fluid mt-1"
                                  />
                                </div>
                                <h3 className="theme-colour text-50 mt-1">
                                  330
                                </h3>
                              </div>
                              <h6 className="text-18">Total Drivers</h6>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-1 col-sm-6 col-12 w-100">
                            <div className="dash-card mb-0">
                              <div className="d-sm-flex text-center mt-1 align-items-center justify-content-between">
                                <div>
                                  <img
                                    src="images/usrs.png"
                                    alt=""
                                    className="img-fluid mt-1"
                                  />
                                </div>
                                <h3 className="theme-colour text-50 mt-1">
                                  330
                                </h3>
                              </div>
                              <h6 className="text-18">Total users</h6>
                            </div>
                          </div>
                        </div>
                        <div className="bottom tickets mt-2">
                          <div className="offset-md-9 col-lg-3 col-md-3 col-12 text-md-right text-center">
                            <div className="form-field">
                              <select
                                className="site-input box-shadow"
                                name
                                id
                                required
                              >
                                <option value>2020</option>
                                <option value>2019</option>
                                <option value>2018</option>
                              </select>
                              <i
                                className="fa fa-chevron-down right-icon"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <h5 className="text-24">Revenue Analytics</h5>
                          <img
                            src="images/graph.png"
                            alt=""
                            className="img-fluid w-100"
                          />
                          <h5 className="text-24">Drivers Registered</h5>
                          <img
                            src="images/graph.png"
                            alt=""
                            className="img-fluid w-100"
                          />
                          <h5 className="text-24">New Users Registered </h5>
                          <img
                            src="images/graph.png"
                            alt=""
                            className="img-fluid w-100"
                          />
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

export default Dashboard;
