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

const Feedback = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState(false);

  const [feedback, setfeedback] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    handleGetFeedbacks();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetFeedbacks = async () => {
    try {
      setloading(true);
      const res = await axios({
        url: `${baseURL}/feedback/Feedbacklogs`,
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
      setfeedback(res.data?.feedback);
    } catch (err) {
      console.log("err", err);
      setloading(false);
    }
    setloading(false);
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
                      <h5 className="inner-heading-24 bold">Feedbacks</h5>
                      <h6 className="text-black-16">Feedback Listing</h6>
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
                                handler={handleGetFeedbacks}
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
                                {feedback?.docs?.length > 0 ? (
                                  <thead>
                                    <tr>
                                      <th>S.No</th>
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Type</th>
                                      <th>Date</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                ) : (
                                  <h3>No Feedback</h3>
                                )}
                                <tbody>
                                  {feedback?.docs?.length > 0 &&
                                    feedback?.docs?.map((feed, index) => (
                                      <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                          {feed?.firstName +
                                            " " +
                                            feed?.lastName}
                                        </td>
                                        <td>{feed?.email}</td>
                                        <td>{feed?.type}</td>
                                        <td>
                                          {" "}
                                          {moment(
                                            feed?.createdAt
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
                                              <a
                                                href="#_"
                                                className="dropdown-item d-flex align-items-center justify-content-start"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#feedback-view-ridr"
                                              >
                                                <i className="fas fa-eye theme-colour" />
                                                View
                                              </a>
                                              <a
                                                href="#_"
                                                className="dropdown-item d-flex align-items-center justify-content-start"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#delte"
                                              >
                                                <i className="far fa-trash-alt red" />
                                                Delete
                                              </a>
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
                        {feedback?.docs?.length > 0 && (
                          <Pagination
                            totalDocs={feedback?.totalDocs}
                            totalPages={feedback?.totalPages}
                            currentPage={feedback?.page}
                            setPage={setPage}
                            hasNextPage={feedback?.hasNextPage}
                            hasPrevPage={feedback?.hasPrevPage}
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

export default Feedback;
