import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Toasty from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { validateEmail } from "../utils/validateEmail";

const ForgotPassword = ({ history }) => {
  const [email, setemail] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [loading, setloading] = useState(false);

  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      console.log("TEST");
      setloading(true);

      try {
        const res = await api.post("/auth/adminRecoverPassword", body);
        console.log("res", res);
        setloading(false);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "SUCCESS",
            text: "Verification Code Sent to your mail",
            showConfirmButton: false,
            timer: 1500
          });
          history.push({
            pathname: `/verificationcode${email}`
          });
        }
      } catch (error) {
        setloading(false);

        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      setloading(false);

      Toasty("error", `Please enter a valid email`);
    }
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
                        Please Enter Your Email Address To Get The Verification
                        Code
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
                      <div className="text-center mt-5">
                        {!loading ? (
                          <button
                            className="site-btn d-block w-100 text-center"
                            type="submit"
                            onClick={() =>
                              email?.length > 0
                                ? submitHandler()
                                : Toasty(
                                    "error",
                                    `Please fill out all the required fields!`
                                  )
                            }
                          >
                            Continue
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
            <Link to="/" className="back-web">
              <i className="fas fa-arrow-left" /> Back to Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
