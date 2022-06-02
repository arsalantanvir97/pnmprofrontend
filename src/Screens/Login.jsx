import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  adminLoginAction,
  adminResetPasswordAction
} from "../actions/adminActions";
import Swal from "sweetalert2";
import api from "../utils/api";
import Toasty from "../utils/toast";

import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../utils/validateEmail";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [code, setcode] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [new_password, setnew_password] = useState();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [showicon3, setshowicon3] = useState(true);
  const [loading, setloading] = useState(false);

  const [forgotpasswordModal, setforgotpasswordModal] = useState(0);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      try {
        setloading(true);

        console.log("submitHandler");
        await dispatch(adminLoginAction(email, password, history));
        setemail("");
        setpassword("");
        setloading(false);
      } catch (error) {
        setloading(false);
      }
      setloading(false);
    } else {
      Toasty("error", `Please enter a valid email`);
    }
    setloading(false);
  };

  useEffect(() => {
    if (adminInfo) {
      history.replace("/dashboard");
    }
  }, [adminInfo]);
  return (
    <div>
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
                      <h1 className="white-colour text-center">Admin Login</h1>
                      <p className="white-colour text-center">
                        Please Enter Your Email Address and Password To Continue
                      </p>
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="form-field combine-field">
                        <label htmlFor className="ml-3 mt-xl-1">
                          Email Address<span className="red-text">*</span>
                        </label>
                        <input
                          type="email"
                          className="site-input left-icon"
                          placeholder="Enter Email Address"
                          name
                          id
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-field combine-field">
                        <label htmlFor className="ml-3 mt-xl-1">
                          Password<span className="red-text">*</span>
                        </label>
                        <input
                          type={showicon ? "password" : "text"}
                          className="site-input both-icon confirm-input"
                          placeholder="Enter Password"
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
                      <div className="text-right">
                      <Link to="/ForgotPassword" className="forgot-link">
                          Forgot Password 
                        </Link>
                      </div>
                      <div className="text-center mt-2">
                        {!loading ? (
                          <button
                            className="site-btn d-block w-100 text-center"
                            type="submit"
                            onClick={() =>
                              email?.length > 0 && password?.length > 0
                                ? submitHandler()
                                : Toasty(
                                    "error",
                                    `Please fill out all the required fields!`
                                  )
                            }
                          >
                            Login
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
    </div>
  );
};

export default Login;
