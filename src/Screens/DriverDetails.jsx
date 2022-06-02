import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Toasty from "../utils/toast";

const DriverDetails = ({ history, match }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [driver, setdriver] = useState("");
  const [rejectreason, setrejectreason] = useState("");

  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetDriver();
  }, []);

  const handleGetDriver = async () => {
    setloading(true);
    try {
      const res = await axios({
        url: `${baseURL}/driver/driver-details/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      console.log("res", res);
      setloading(false);

      setdriver(res?.data?.driver);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
    setloading(false);
  };
  const UpdateStatus = async (status) => {
    if (status == "Rejected" && !rejectreason?.length > 0) {
      Toasty("error", `Please fill out all the required fields!`);
    } else {
      setloading(true);
      try {
        const res = await axios({
          url: `${baseURL}/driver/updateStatus/${match?.params?.id}`,
          method: "POST",
          data: { status: status, rejectreason },
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        });
        console.log("res", res);
        setloading(false);

        setdriver(res?.data?.driver);
        history?.push("/Driver");
      } catch (err) {
        console.log(err);
        setloading(false);
      }
      setloading(false);
      window?.$(".modal").modal("hide");
    
    
    
      window?.$(".modal-backdrop").remove();
    }
  };
  return (
    <>
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
                            history?.goBack();
                          }}
                          className="inner-heading-24 black-colour"
                        >
                          <i className="fas fa-arrow-left" /> Driver Details
                        </Link>
                      </div>
                    </div>
                    <div className="card mb-sm-5 mx-2">
                      <div className="card-content collapse show">
                        <div className="card-dashboard">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="media align-items-center d-lg-flex d-md-flex d-block">
                                <img
                                  src={
                                    driver?.userImage &&
                                    driver?.userImage !== null
                                      ? `${imageURL}${driver?.userImage}`
                                      : "images/driver-detl-pic.png"
                                  }
                                  className="mr-3"
                                  alt="..."
                                />
                                <div className="media-body">
                                  <div className="d-flex align-items-center">
                                    <h5 className="text-20">
                                      {driver?.firstName +
                                        " " +
                                        driver?.lastName}{" "}
                                      <span
                                        className={`red-text ml-2 text-black-16`}
                                      >
                                        <i className="fas fa-circle" />{" "}
                                        {driver?.adminApproval=='Pending'
                                          ? 'Pending'
                                          : driver?.status
                                          ? "Active"
                                          : "Inactive"}
                                      </span>
                                    </h5>
                                  </div>
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <p className="text-16 m-0">
                                    <i className="fas fa-phone-alt theme-colour" />
                                    +{driver?.phone}
                                  </p>
                                  <p className="text-16">
                                    <i className="fas fa-envelope theme-colour" />
                                    {driver?.email}
                                  </p>
                                  <a href="#_" className="site-dotted-btn">
                                    License.PDF{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20.704"
                                      height="20.704"
                                      viewBox="0 0 20.704 20.704"
                                    >
                                      <g
                                        id="Icon_feather-download"
                                        data-name="Icon feather-download"
                                        transform="translate(1 1)"
                                      >
                                        <path
                                          id="Path_59098"
                                          data-name="Path 59098"
                                          d="M23.2,22.5v4.156a2.078,2.078,0,0,1-2.078,2.078H6.578A2.078,2.078,0,0,1,4.5,26.656V22.5"
                                          transform="translate(-4.5 -10.031)"
                                          fill="none"
                                          stroke="#5568fe"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                        />
                                        <path
                                          id="Path_59099"
                                          data-name="Path 59099"
                                          d="M10.5,15l5.2,5.2,5.2-5.2"
                                          transform="translate(-6.344 -7.727)"
                                          fill="none"
                                          stroke="#5568fe"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                        />
                                        <path
                                          id="Path_59100"
                                          data-name="Path 59100"
                                          d="M18,16.969V4.5"
                                          transform="translate(-8.648 -4.5)"
                                          fill="none"
                                          stroke="#5568fe"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <hr className="web-hr" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-4">
                                  <p className="text-16">Vehicle Type </p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">Mini</p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">Brand Name</p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">Abc</p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">Vehicle Name</p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">Abc</p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">
                                    License plate Number
                                  </p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">134544 534 2</p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">Vehicle Color</p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">Black </p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">VIN Number</p>
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-black-16">1230923</p>
                                </div>
                                <div className="col-lg-4">
                                  <p className="text-16">
                                    Insurance &amp; Other Documents
                                  </p>
                                </div>
                                <div className="col-lg-8">
                                  <a href="#_" className="theme-colour">
                                    Document 1
                                  </a>
                                  <a href="#_" className="theme-colour mx-2">
                                    Document 2
                                  </a>
                                  <a href="#_" className="theme-colour">
                                    Document 3
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {driver?.adminApproval == "Pending" ? (
                            <div className="col-lg-8">
                              <Link
                                to="#"
                                onClick={() => {
                                  UpdateStatus("Accepted");
                                }}
                                className="site-btn-accept"
                                data-dismiss="modal"
                                data-toggle="modal"
                                data-target="#approve"
                              >
                                <i className="fas fa-check" />
                                Accept
                              </Link>
                              <Link
                                to="#"
                                // onClick={() => {
                                //   UpdateStatus("Rejected");
                                // }}
                                className="site-btn-accept red-text"
                                data-dismiss="modal"
                                data-toggle="modal"
                                data-target="#reject-reson"
                              >
                                <i className="fas fa-times" />
                                Reject
                              </Link>
                            </div>
                          ) : (
                            <div className="row my-2">
                              <div className="col-lg-8">
                                <a href="#_" className="site-btn-accept">
                                  <span className="black-colour">
                                    Total Earning{" "}
                                  </span>{" "}
                                  $11,111
                                </a>
                                <a href="#_" className="site-btn-accept">
                                  <span className="black-colour">
                                    No. of Trips
                                  </span>{" "}
                                  45
                                </a>
                              </div>
                            </div>
                          )}
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
      <div
        className="modal fade blocked-modal"
        id="reject-reson"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              <div className="row justify-content-center mb-2">
                <div className="col-10">
                  <h3 className="text-gobold-30 py-2">System Message</h3>
                  <h6 className="text-20 pb-2">
                    Please provide the reason for rejection
                  </h6>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    placeholder="Enter Reason"
                    value={rejectreason}
                    onChange={(e) => {
                      setrejectreason(e.target.value);
                    }}
                  />
                </div>
              </div>
              <Link
                to="#"
                className="site-modal-btn d-block w-100 text-center"
                onClick={() => {
                  UpdateStatus("Rejected");
                }}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverDetails;
