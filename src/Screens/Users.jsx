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

const Users = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState(false);

  const [users, setusers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState(true);
  const [type, setType] = useState("");
  const [blockstatus, setblockstatus] = useState("");

  const [blockid, setblockid] = useState("");

  useEffect(() => {
    handleGetUsers();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetUsers = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: `${baseURL}/user/userlogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false);

      console.log("res", res);
      setusers(res.data?.user);
    } catch (err) {
      console.log("err", err);
      setloading(false);
    }
    setloading(false);
  };

  const toggleActiveStatus = async (id) => {
    try {
      const res = await axios({
        url: `${baseURL}/user/toggle-active/${id}`,
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
      handleGetUsers();
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
                      <h5 className="inner-heading-24 for-bold">Users</h5>
                    </div>
                    <div className="col-md-6 text-right">
                      <Link
                        to="#"
                        onClick={() => {
                          setStatus(!status);
                        }}
                        className="site-btn"
                      >
                        {status ?'Blocked' : 'Active'} Users
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
                                handler={handleGetUsers}
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
                                {users?.docs?.length > 0 ?
                                    (
                                <thead>
                                  <tr>
                                    <th>S.No</th>
                                    <th>Driver Name</th>
                                    <th>Email</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>) : <h3>No Users</h3>}
                                <tbody>
                                  {users?.docs?.length > 0 &&
                                    users?.docs?.map((user, index) => (
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
                                                to={`/UserDetails/${user?._id}`}
                                                className="dropdown-item d-flex align-items-center justify-content-start"
                                              >
                                                <i className="fas fa-eye theme-colour" />
                                                View
                                              </Link>
                                              <Link
                                                onClick={() =>
                                                  toggleActiveStatus(user._id)
                                                }
                                                to="#"
                                                className="dropdown-item d-flex align-items-center justify-content-start"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#inactive-pop1"
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
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </>
                            )}
                          </table>
                        </div>
                        {users?.docs?.length > 0 && (
                          <Pagination
                            totalDocs={users?.totalDocs}
                            totalPages={users?.totalPages}
                            currentPage={users?.page}
                            setPage={setPage}
                            hasNextPage={users?.hasNextPage}
                            hasPrevPage={users?.hasPrevPage}
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

export default Users;
