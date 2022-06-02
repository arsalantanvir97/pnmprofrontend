import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminResetPasswordAction } from "../actions/adminActions";
import Toasty from "../utils/toast";

const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [loading, setloading] = useState(false);

  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");

  // const [state, setstate] = useState(initialState)

  // useEffect(() => {
  //   console.log('prpos',props.location.state.code)

  // }, [])
  const onSubmitHandler = async () => {
    setloading(true);

    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );
    dispatch(
      await adminResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email
      )
    );
    setloading(false);
  };
  return (
    <>
      <section className="login-bg">
        <div className="container-fluid px-lg-0">
          <div className="login-card">
            <div className="row justify-content-center">
              <div className="col-md-6 col-xl-4 col-12 px-lg-0 login-right-col">
                <div className="login-right-content">
                  <img
                    src="images/login-logo.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div>
                    <div className="login-heading">
                      <h1 className="white-colour text-center">
                        Password Recovery
                      </h1>
                      <p className="white-colour text-center">
                        Please Enter Your New Password to Continue Login
                      </p>
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="form-field combine-field">
                        <label htmlFor className="ml-3 mt-xl-1">
                          New Password<span className="red-text">*</span>
                        </label>
                        <input
                          type={showicon ? "password" : "text"}
                          className="site-input both-icon confirm-input"
                          placeholder="Enter New Password"
                          name
                          id
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                        />
                        <i
                          onClick={() => setshowicon(!showicon)}
                          className={
                            showicon
                              ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                              : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                          }
                          aria-hidden="true"
                        />
                      </div>
                      <div className="form-field combine-field">
                        <label htmlFor className="ml-3 mt-xl-1">
                          Confirm Password<span className="red-text">*</span>
                        </label>
                        <input
                          type={showicon2 ? "password" : "text"}
                          className="site-input both-icon confirm-input"
                          placeholder="Confirm Password"
                          name
                          id
                          value={confirm_password}
                          onChange={(e) => {
                            setconfirm_password(e.target.value);
                          }}
                        />
                        <i
                          onClick={() => setshowicon2(!showicon2)}
                          className={
                            showicon2
                              ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                              : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                          }
                          aria-hidden="true"
                        />
                      </div>
                      {/* <div className="text-right">
                        <a href="forget-password.php" className="forgot-link">
                          Forgot Password ?
                        </a>
                      </div> */}
                      <div className="text-center mt-2">
                        {!loading ? (
                          <button
                            className="site-btn d-block w-100 text-center"
                            type="submit"
                            onClick={() =>
                              password?.length > 0 &&
                              confirm_password?.length > 0
                                ? onSubmitHandler()
                                : Toasty(
                                    "error",
                                    `Please fill out all the required fields!`
                                  )
                            }
                          >
                            Update
                          </button>
                        ) : (
                          <i className="fas fa-spinner fa-pulse"></i>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/' className="back-web">
              <i className="fas fa-arrow-left" /> Back to Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
