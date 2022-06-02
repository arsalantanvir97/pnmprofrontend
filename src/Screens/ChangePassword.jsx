import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminverfyadnresetpasword } from "../actions/adminActions";
import Toasty from "../utils/toast";
import { imageURL } from "../utils/api";

const ChangePassword = ({ history }) => {
  const dispatch = useDispatch();
  const [existingpassword, setexistingpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [showicon3, setshowicon3] = useState(true);
  const [loading, setloading] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const submitHandler = async (e) => {
    console.log("submitHandler");
    console.log(
      "submitHandlerreqbody",
      existingpassword,
      newpassword,
      confirm_password
    );
    e.preventDefault();
    console.log("submitHandler");
    if (
      confirm_password?.length > 0 &&
      existingpassword?.length > 0 &&
      newpassword?.length > 0
    ) {
      try {
        setloading(true);
        await dispatch(
          adminverfyadnresetpasword(
            existingpassword,
            newpassword,
            confirm_password,
            adminInfo?.email,
            history
          )
        );
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    } else {
      Toasty("error", `Please fill out all the required fields!`);
    }
    setloading(false);

    setexistingpassword("");
    setnewpassword("");
    setconfirm_password("");
  };
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
                        <i className="fas fa-arrow-left" /> Change Password
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
                                  adminInfo?.userImage &&
                                  adminInfo?.userImage !== null
                                    ? `${imageURL}${adminInfo?.userImage}`
                                    : "../app-assets/images/portrait/small/avatar-s-1.png"
                                }
                                style={{
                                  maxWidth: 138,
                                  maxHeight: 138,
                                  minWidth: 138,
                                  minHeight: 138,
                                  boxSizing: "border-box",
                                  borderRadius: 84
                                }}
                                className="mr-3"
                                alt="..."
                              />
                              <div className="media-body">
                                <form
                                 onSubmit={(e) => {
                                  e.preventDefault();
                                }}
                                >
                                  <div className="form-field combine-field-wth-bdr">
                                    <label htmlFor className="ml-3 mt-xl-1">
                                      Current Password
                                      <span className="red-text">*</span>
                                    </label>
                                    <input
                                      className="site-input left-icon"
                                      placeholder="***************"
                                      name
                                      id
                                      value={existingpassword}
                                      onChange={(e) => {
                                        setexistingpassword(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="form-field combine-field-wth-bdr">
                                    <label htmlFor className="ml-3 mt-xl-1">
                                      New Password
                                      <span className="red-text">*</span>
                                    </label>
                                    <input
                                      type="password"
                                      className="site-input left-icon"
                                      placeholder="***************"
                                      name
                                      id
                                      value={newpassword}
                                      onChange={(e) => {
                                        setnewpassword(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="form-field combine-field-wth-bdr">
                                    <label htmlFor className="ml-3 mt-xl-1">
                                      Confirm New Password
                                      <span className="red-text">*</span>
                                    </label>
                                    <input
                                      type="password"
                                      className="site-input left-icon"
                                      placeholder="***************"
                                      name
                                      id
                                      value={confirm_password}
                                      onChange={(e) => {
                                        setconfirm_password(e.target.value);
                                      }}
                                    />
                                  </div>
                                </form>
                                {!loading ? (
                                <Link
                                  to="#"
                                  onClick={submitHandler}
                                  className="site-btn "
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#confm"
                                >
                                  Save
                                </Link>
                                 ) : (
                                  <i className="fas fa-spinner fa-pulse"></i>
                                )}
                              </div>
                            </div>
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

export default ChangePassword;
