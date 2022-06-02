import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Toasty from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import InputNumber from "../Components/InputNumber";

const VerificationCode = ({ match, history }) => {
  const [code, setcode] = useState(0);
  const [loading, setloading] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const onSubmitHandler = async () => {
    setloading(true);
    try {
      console.log("body", code, match?.params?.email);
      const body = { code, email: match?.params?.email };
      console.log("TEST");
      // try {
      const res = await api.post("/auth/adminverifyRecoverCode", body);
      setloading(false);

      console.log("res", res);
      history?.push({
        pathname: "/resetPassword",
        state: { code: code, email: match?.params?.email }
      });
    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }

    //   if(res?.status==201){
    //     Toasty('success',`Verification Code Has Been Emailed To Your Email Address`);
    //     history.push('/verificationcode')

    //   }
    // } catch (error) {
    //   Toasty('error',`🦄 Invalid Email!`);

    // }
  };
  const resentCodeHandler = async (e) => {
    e.preventDefault();
    const useremail = match?.params?.email;
    const body = { email: useremail };
setloading(true)
    try {
      const res = await api.post("/auth/adminRecoverPassword", body);
      setloading(false)

      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Verification Code Sent to your mail",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error.response);
      Toasty("error", `🦄 Invalid Email!`);
    }
    setloading(false)

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
                    src="../images/login-logo.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div>
                    <div className="login-heading">
                      <h1 className="white-colour text-center">
                        Password Recovery
                      </h1>
                      <p className="white-colour text-center">
                        Please Enter Your The Code to Set The New Password
                      </p>
                    </div>
                    <form action="password-recovery-v3.php">
                      <div className="form-field combine-field">
                        <label htmlFor className="ml-3 mt-xl-1">
                          Verification Code<span className="red-text">*</span>
                        </label>

                        <InputNumber
                          min={0}
                          value={code}
                          onChange={setcode}
                          max={9}
                          className="site-input left-icon"
                        />
                      </div>
                      <div className="text-right">
                      {!loading ? (
                        <Link to="#" onClick={resentCodeHandler} className="forgot-link">
                          Resend Code 
                        </Link> ) : (
                          <i className="fas fa-spinner fa-pulse"></i>
                        )}
                      </div>
                      <div className="text-center mt-5">
                        {!loading ? (
                          <button
                            onClick={() =>
                              code > 0
                                ? onSubmitHandler()
                                : Toasty(
                                    "error",
                                    `Please fill out all the required fields!`
                                  )
                            }
                            className="site-btn d-block w-100 text-center"
                            type="submit"
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

export default VerificationCode;
