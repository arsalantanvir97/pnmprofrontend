import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/adminActions";
import { baseURL, imageURL } from "../utils/api";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const [notifications, setnotifications] = useState([]);
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const logOutHandler = async () => {
    console.log("logOutHandler");
    dispatch(logout());
  };

  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="navbar-brand site-logo mt-0" to="/dashboard">
                  {" "}
                  <img
                    className="brand-logo img-fluid"
                    alt="stack admin logo"
                    src="../images/logo.png"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-item d-md-none">
                {" "}
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left ml-2">
                <Link to="#" className="site-btn">
                  <i className="fas fa-store" /> Go to Store
                </Link>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-notification nav-item two-bell-icons">
                  <Link
                    className="nav-link nav-link-label"
                    to="#"
                    data-toggle="dropdown"
                  >
                    <img
                      src="../images/bell-icon.png"
                      alt=""
                      className="img-fluid"
                    />
                    {/* <span class="badge badge-pill badge-default badge-danger badge-default badge-up">5</span>  */}
                  </Link>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span className="avatar avatar-online">
                      <img
                        src={
                          adminInfo?.userImage && adminInfo?.userImage !== null
                            ? `${imageURL}${adminInfo?.userImage}`
                            : "../app-assets/images/portrait/small/avatar-s-1.png"
                        }
                        alt="avatar"
                      />
                    </span>
                    <span className="user-name">
                      {" "}
                      {adminInfo?.firstName + " " + adminInfo?.lastName}
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/Profile">
                      <i className="far fa-user theme-colour" />
                      Profile
                    </Link>
                    <a
                      className="dropdown-item"
                      href="#_"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#logout"
                    >
                      <i className="fas fa-sign-out-alt red" />
                      Logout
                    </a>
                  </div>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                    href="#"
                  >
                    <i className="ft-menu" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade blocked-modal"
        id="logout"
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
              <div className="row">
                <div className="col-12">
                  <img src="../images/alert.png" alt="" />
                  <h3 className="text-gobold-30 py-2">System Message</h3>
                  <h6 className="text-20 pb-2">
                    Are you sure you want to logout?
                  </h6>
                </div>
              </div>
              <div className="modal-footer p-0">
                <Link
                  to="#"
                  onClick={logOutHandler}
                  className="site-modal-btn-yes d-block w-50 text-center m-0 modal-btns"
                >
                  Yes
                </Link>
                <Link to='#'
                 data-dismiss="modal"
                 aria-label="Close"
                  className="site-modal-btn-no d-block w-50 text-center m-0 modal-btns-2"
                >
                  No
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
