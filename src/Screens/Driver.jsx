import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Pagination from "../Components/Padgination";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import PerPage from "../Components/PerPage";
import SearchFilter from "../Components/SearchFilter";

const Driver = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState(false);

  const [drivers, setdrivers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState(true);
  const [adminApproval, setadminApproval] = useState("");

  const [type, setType] = useState("");
  const [blockstatus, setblockstatus] = useState("");

  const [blockid, setblockid] = useState("");

  useEffect(() => {
    handleGetDrivers();
  }, [page, perPage, from, to, status, searchString, adminApproval]);

  const handleGetDrivers = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: `${baseURL}/driver/driverlogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
          adminApproval
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false);

      console.log("res", res);
      setdrivers(res.data?.driver);
    } catch (err) {
      console.log("err", err);
      setloading(false);
    }
    setloading(false);
  };

  const toggleActiveStatus = async (id) => {
    try {
      const res = await axios({
        url: `${baseURL}/driver/toggle-active/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: res.data.message,
        showConfirmButton: false,
        timer: 1500
      });
      handleGetDrivers();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.message
          ? err?.response?.data?.message
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setblockid("");
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
                    <div className="col-md-6">
                      <h5 className="inner-heading-24">Drivers</h5>
                    </div>
                    <div className="col-md-6 text-right">
                      <Link
                        to="#"
                        onClick={() => {
                          setadminApproval(
                            adminApproval === "Pending" ? "Rejected" : "Pending"
                          );
                          setStatus("");
                        }}
                        className="badge-a mr-2"
                      >
                        <img src="../images/driver-pic.png" alt="" />
                        <span className="badge badge-light">.</span>{" "}
                        <span className="text-18 theme-colour">
                          {" "}
                          {adminApproval == "Pending"
                            ? "Rejected"
                            : adminApproval == "Rejected"
                            ? "New"
                            : "New"}{" "}
                          Drivers
                        </span>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => {
                          setStatus(!status);
                          setadminApproval("");
                        }}
                        className="site-btn"
                      >
                        {status ? "Blocked" : "Active"} Drivers
                      </Link>
                    </div>
                  </div>
                  <div className="card my-sm-2 mx-2">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row ml-0 mr-0 py-2">
                          <div className="col-12 d-xl-flex align-items-center justify-content-between">
                            <PerPage
                              perPage={perPage}
                              setPerPage={setPerPage}
                              setPage={setPage}
                            />
                            <div className="search-barr w-300 mt-1 mt-xl-0">
                              <SearchFilter
                                setSearchString={setSearchString}
                                searchString={searchString}
                                setPage={setPage}
                                handler={handleGetDrivers}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="maain-tabble table-responsive">
                          <table className="table table-striped table-bordered zero-configuration">
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
                              <>
                                {drivers?.docs?.length > 0 ? (
                                  <thead>
                                    <tr>
                                      <th>S.No</th>
                                      <th>Driver Name</th>
                                      <th>Email</th>
                                      <th>Created</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                ) : (
                                  <h3>No Drivers</h3>
                                )}
                                <tbody>
                                  {drivers?.docs?.length > 0 &&
                                    drivers?.docs?.map((user, index) => (
                                      <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                          {user?.firstName +
                                            " " +
                                            user?.lastName}
                                        </td>
                                        <td>{user?.email}</td>
                                        <td>
                                          {" "}
                                          {moment(
                                            user?.createdAt
                                          ).fromNow()}{" "}
                                        </td>
                                        <td>
                                          <div className="btn-group custom-dropdown ml-2 mb-1">
                                            <button
                                              type="button"
                                              className="btn transparent-btn btn-drop-table btn-sm theme-colour"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              {user?.status == true
                                                ? "Active"
                                                : user?.status == false
                                                ? "Inactive"
                                                : user?.adminApproval}
                                            </button>
                                            <div className="dropdown-menu text-left custom-dropdown tble-switch"></div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="btn-group custom-dropdown ml-2 mb-1">
                                            <button
                                              type="button"
                                              className="btn transparent-btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              {" "}
                                              <i className="fa fa-ellipsis-v" />
                                            </button>
                                            <div className="dropdown-menu text-left custom-dropdown">
                                              <Link
                                                to={`/DriverDetails/${user?._id}`}
                                                className="dropdown-item d-flex align-items-center justify-content-start"
                                              >
                                                <i className="fas fa-eye theme-colour" />
                                                View
                                              </Link>
                                              {user?.status === true ||
                                              user?.status === false ? (
                                                <Link
                                                  onClick={() =>
                                                    toggleActiveStatus(user._id)
                                                  }
                                                  to="#"
                                                  className="dropdown-item d-flex align-items-center justify-content-start"
                                                >
                                                  <i
                                                    className={
                                                      user.status
                                                        ? "fas fa-ban red-text"
                                                        : "fas fa-undo"
                                                    }
                                                  />
                                                  {user.status
                                                    ? "Inactive"
                                                    : "Restore"}
                                                </Link>
                                              ) : null}
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>{" "}
                              </>
                            )}
                          </table>
                        </div>
                        {drivers?.docs?.length > 0 && (
                          <Pagination
                            totalDocs={drivers?.totalDocs}
                            totalPages={drivers?.totalPages}
                            currentPage={drivers?.page}
                            setPage={setPage}
                            hasNextPage={drivers?.hasNextPage}
                            hasPrevPage={drivers?.hasPrevPage}
                          />
                        )}
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

export default Driver;
