import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Graph from "../Components/Graph";
import { baseURL } from "../utils/api";

const Dashboard = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState(false);

  const [user, setUser] = useState("");
  const [year, setyear] = useState("");

  const [dashboarddata, setdashboarddata] = useState("");

  useEffect(() => {
    handleGetDashboarddata();
  }, [year]);

  const handleGetDashboarddata = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: `${baseURL}/auth/getCountofallCollection`,
        params: { year },
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      console.log("handleGetDashboarddatares", res);
      setdashboarddata(res?.data);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
    setloading(false);
  };
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
                                {loading ? (
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center"
                                    }}
                                  >
                                    <div className="custommloader"></div>
                                  </div>
                                ) : (
                                  <h3 className="theme-colour text-50 mt-1">
                                    $525
                                  </h3>
                                )}
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
                                {loading ? (
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center"
                                    }}
                                  >
                                    <div className="custommloader"></div>
                                  </div>
                                ) : (
                                  <h3 className="theme-colour text-50 mt-1">
                                    1
                                  </h3>
                                )}
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
                                {loading ? (
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center"
                                    }}
                                  >
                                    <div className="custommloader"></div>
                                  </div>
                                ) : (
                                  <h3 className="theme-colour text-50 mt-1">
                                    {dashboarddata?.drivercount}
                                  </h3>
                                )}
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
                                {loading ? (
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center"
                                    }}
                                  >
                                    <div className="custommloader"></div>
                                  </div>
                                ) : (
                                  <h3 className="theme-colour text-50 mt-1">
                                    {dashboarddata?.user}
                                  </h3>
                                )}
                              </div>
                              <h6 className="text-18">Total users</h6>
                            </div>
                          </div>
                        </div>
                        <div className="bottom tickets mt-2">
                          {/* <div className="offset-md-9 col-lg-3 col-md-3 col-12 text-md-right text-center">
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
                          </div> */}
                          {loading ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div className="custommloader"></div>
                            </div>
                          ) : (
                            <Graph graph_data={dashboarddata?.graph_data1} label={'Revenue Analytics'}/>
                          )}
                          {loading ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <div className="custommloader"></div>
                            </div>
                          ) : (
                            <Graph graph_data={dashboarddata?.graph_data2} label={'Drivers Registered'}/>
                          )}
                          {loading ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <div className="custommloader"></div>
                            </div>
                          ) : (
                            <Graph graph_data={dashboarddata?.graph_data1} label={'New Users Registered'}/>
                          )}
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
