import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <div
        className="main-menu menu-fixed menu-light menu-accordion"
        data-scroll-to-active="true"
      >
        <div
          className="main-menu-content ps-container ps-theme-dark"
          data-ps-id="19ebbcc9-4b0b-0ede-f6c6-9c207a9828bc"
        >
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li
              className={
                props?.match?.path == "/dashboard"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/dashboard">
                <img
                  src="images/dashboard.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Dashboard
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/Driver" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/Driver">
                <img
                  src="images/delivery-man.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Drivers
                </span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="#_">
                <img
                  src="images/wallet.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Wallet
                </span>
              </a>
            </li> */}
            <li
              className={
                props?.match?.path == "/Users" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/Users">
                <img
                  src="images/user-icn.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Users
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/Bookings"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/Bookings">
                <img
                  src="images/car-icn.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Bookings
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/PaymentLogs"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/PaymentLogs">
                <img
                  src="images/credit-card.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Payment Logs
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/Feedback"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/Feedback">
                <img
                  src="images/feedback.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Feedbacks
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/Promos" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/Promos">
                <img
                  src="images/discount.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Promo Codes
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/VehicleTypes"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/VehicleTypes">
                <img
                  src="images/category.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Vehicle Type
                </span>
              </Link>
            </li>
            <li
              className={
                props?.match?.path == "/Reports"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/Reports">
                <img
                  src="images/report-icn.png"
                  alt=""
                  className="img-fluid mr-1"
                />
                <span className="menu-title" data-i18n>
                  Reports
                </span>
              </Link>
            </li>
          </ul>
          <div
            className="ps-scrollbar-x-rail"
            style={{ left: "0px", bottom: "3px" }}
          >
            <div
              className="ps-scrollbar-x"
              tabIndex={0}
              style={{ left: "0px", width: "0px" }}
            />
          </div>
          <div
            className="ps-scrollbar-y-rail"
            style={{ top: "0px", right: "3px" }}
          >
            <div
              className="ps-scrollbar-y"
              tabIndex={0}
              style={{ top: "0px", height: "0px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
