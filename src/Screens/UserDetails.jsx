import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [user, setuser] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    setloading(true);
    try {
      const res = await axios({
        url: `${baseURL}/user/user-details/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      console.log("res", res);
      setloading(false);

      setuser(res?.data?.user);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
    setloading(false);
  };
  return (
    <>
      <div>
        <div className="app-content content dashboard">
          <div className="content-wrapper">
            <div className="content-body">
              {/* Basic form layout section start */}
              <section id="configuration">
                <div className="row">
                  {loading ? (
                    <div
                    className="mt-5"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <div className="custommloader"></div>
                    </div>
                  ) : (
                    <div className="col-12 px-xl-4 pt-xl-2">
                      <div className="row my-sm-2 mx-2 align-items-baseline">
                        <div className="col-12">
                          <Link
                            to="#"
                            onClick={() => {
                              history.goBack();
                            }}
                            className="inner-heading-24 black-colour"
                          >
                            <i className="fas fa-arrow-left" />{" "}
                            {!user?.status && "Blocked"} Users Details
                          </Link>
                        </div>
                      </div>
                      <div className="card mb-sm-5 mx-2">
                        <div className="card-content collapse show">
                          <div className="card-dashboard">
                            <div className="row">
                              <div className="col-lg-5">
                                <div className="media d-lg-flex d-md-flex d-block">
                                  <img
                                    src={
                                      user?.userImage &&
                                      user?.userImage !== null
                                        ? `${imageURL}${user?.userImage}`
                                        : "../images/driver-detl-pic.png"
                                    }
                                    className="mr-3"
                                    alt="..."
                                  />
                                  <div className="media-body">
                                    <div className="d-flex align-items-center">
                                      <h5 className="text-20 d-inline-block mr-2">
                                        {user?.firstName + " " + user?.lastName}
                                      </h5>
                                      {/* <label className="switch">
                                      <input type="checkbox" defaultChecked />
                                      <span className="slider round" />
                                    </label>
                                    <span className="text-black-16 ml-1">
                                      {" "}
                                      Active
                                    </span> */}
                                    </div>
                                    <p className="text-16 m-0">
                                      <i className="fas fa-phone-alt theme-colour" />
                                      +{user?.phone}
                                    </p>
                                    <p className="text-16">
                                      <i className="fas fa-envelope theme-colour" />
                                      {user?.email}
                                    </p>
                                    <a href="#_" className="site-bodr-btn">
                                      No. of Trips Taken{" "}
                                      <span className="bold">12</span>{" "}
                                    </a>
                                    <br />
                                    <a href="#_" className="site-bodr-btn my-1">
                                      Wallet{" "}
                                      <span className="bold"> $ 1234</span>{" "}
                                    </a>
                                  </div>
                                </div>
                                <a
                                  href="#_"
                                  className="site-btn"
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#wallet-pop"
                                >
                                  View Wallet Details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
        {/*Modal confm*/}
        <div
          className="modal fade blocked-modal"
          id="wallet-pop"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body text-center p-0">
                <img src="../images/driver-detl-pic.png" alt="" />
                <h6 className="text-20">Mark Carson</h6>
                <h3 className="text-gobold-30">£ 12,234</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="maain-tabble table-responsive">
                      <table className="table table-striped table-bordered zero-configuration">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Action</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Total Amount</th>
                            <th>Transaction ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>Paid Through Wallet</td>
                            <td>03/15/2020</td>
                            <td>Amount</td>
                            <td>$ 123</td>
                            <td>$ 123</td>
                            <td>ch_1Eg3mXLFMNZXO4dgwef</td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>Paid Through Wallet</td>
                            <td>03/15/2020</td>
                            <td>Amount</td>
                            <td>$ 123</td>
                            <td>$ 123</td>
                            <td>ch_1Eg3mXLFMNZXO4dgwef</td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>Paid Through Wallet</td>
                            <td>03/15/2020</td>
                            <td>Amount</td>
                            <td>$ 123</td>
                            <td>$ 123</td>
                            <td>ch_1Eg3mXLFMNZXO4dgwef</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="dataTables_paginate paging_simple_numbers pr-1">
                      <ul className="pagination justify-content-end">
                        <li className="paginate_button page-item previous disabled">
                          <a href="#" className="page-link">
                            Previous
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a href="#" className="page-link">
                            4
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a href="#" className="page-link">
                            5
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next disabled"
                          i
                        >
                          <a href="#" className="page-link">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href="#_"
                  className="site-modal-btn d-block w-100 text-center"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
