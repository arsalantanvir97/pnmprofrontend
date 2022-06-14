import React from "react";

const Reports = () => {
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
                      <h5 className="inner-heading-24 bold">Reports</h5>
                      <h6 className="text-black-16">Reports Listing</h6>
                    </div>
                  </div>
                  <div className="card my-sm-2 mx-2">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row ml-0 mr-0 py-2">
                          <div className="col-12 d-xl-flex align-items-center justify-content-between">
                            <div className="d-sm-flex align-items-center for-select">
                              <label
                                htmlFor
                                className="mr-sm-1 dash-label mb-0"
                              >
                                Showing
                              </label>
                              <select className="dash-select entri-drop">
                                <option value>10</option>
                                <option value>11</option>
                                <option value>12</option>
                                <option value>13</option>
                                <option value>14</option>
                                <option value>15</option>
                              </select>
                              <label
                                htmlFor
                                className="ml-sm-1 dash-label mb-0"
                              >
                                Entries
                              </label>
                            </div>
                            <div className="search-barr w-300 mt-1 mt-xl-0">
                              <input
                                type="search"
                                placeholder="Search"
                                className="p-1 dash-input srch-int"
                                name
                                id
                              />
                              <button className="search-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19.04"
                                  height="19.045"
                                  viewBox="0 0 19.04 19.045"
                                >
                                  <path
                                    id="Icon_ionic-ios-search"
                                    data-name="Icon ionic-ios-search"
                                    d="M23.317,22.159l-5.3-5.345a7.546,7.546,0,1,0-1.145,1.16l5.261,5.31a.815.815,0,0,0,1.15.03A.82.82,0,0,0,23.317,22.159Zm-11.226-4.12a5.959,5.959,0,1,1,4.215-1.745A5.922,5.922,0,0,1,12.091,18.039Z"
                                    transform="translate(-4.5 -4.493)"
                                    fill="#5568FE"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="maain-tabble table-responsive">
                          <table className="table table-striped table-bordered zero-configuration">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                             
                            
                              <tr>
                                <td>01</td>
                                <td>Mike Phelan</td>
                                <td>mike@gmail.com</td>
                                <td>2 days ago</td>
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
                                        data-target="#report-view"
                                      >
                                        <i className="fas fa-eye theme-colour" />
                                        View
                                      </a>
                                      {/* <a
                                        href="#_"
                                        className="dropdown-item d-flex align-items-center justify-content-start"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        data-target="#delte"
                                      >
                                        <i className="far fa-trash-alt red" />
                                        Delete
                                      </a> */}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            {/* <div className="dataTables_info pl-1">
                              Showing 1 to 3 of 3 entries
                            </div> */}
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers pr-1">
                              <ul className="pagination justify-content-end">
                                <li className="paginate_button page-item previous disabled">
                                  <a href="#" className="page-link">
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a href="#" className="page-link">
                                    1
                                  </a>
                                </li>
                                <li className="paginate_button page-item">
                                  <a href="#" className="page-link">
                                    2
                                  </a>
                                </li>
                                <li className="paginate_button page-item">
                                  <a href="#" className="page-link">
                                    3
                                  </a>
                                </li>
                                <li className="paginate_button page-item">
                                  <a href="#" className="page-link">
                                    4
                                  </a>
                                </li>
                                <li className="paginate_button page-item">
                                  <a href="#" className="page-link">
                                    5
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  i
                                >
                                  <a href="#" className="page-link">
                                    Next
                                  </a>
                                </li>
                              </ul>
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
      <div className="modal fade blocked-modal" id="report-view" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body p-0">
        <div className="row px-4">
          <div className="col-lg-12">
            <h5 className="text-20 bold my-2">Report Details</h5>
          </div>
          <div className="col-lg-12">
            <img src="../images/report-pic.png" alt="" />
          </div>
          <div className="col-lg-6">
            <h6 className="text-18">User Details</h6>
            <div className="row">
              <div className="col-lg-6">
                <p className="text-16">User Name</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">Mike</p>
              </div>
              <div className="col-lg-6">
                <p className="text-16">Email</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">mike@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="text-18">Driver Details</h6>
            <div className="row">
              <div className="col-lg-6">
                <p className="text-16">Driver Name</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">Adam</p>
              </div>
              <div className="col-lg-6">
                <p className="text-16">Email</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">adam@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <hr className="web-hr" />
        </div>
        <div className="row px-4 align-items-center">
          <div className="col-lg-6">
            <h6 className="text-20">Trip ID 001</h6>
            <p className="text-16 my-2"><i className="far fa-circle theme-colour" />
              Pick Up Location:<br />B-15, block 11, Street Claum</p>
            <p className="text-16 m-0"><i className="fas fa-map-marker-alt theme-colour" />
              Drop Off Location: <br />A-12, block 5, Street Malibu</p>
          </div>
          <div className="col-lg-6 border-left">
            <div className="row">
              <div className="col-lg-6">
                <p className="text-16">Discounted Fare</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">$ 20</p>
              </div>
              <div className="col-lg-6">
                <p className="text-16">Topup Amount</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16">$ 20</p>
              </div>
              <div className="col-lg-6">
                <p className="text-16">Total Fare</p>
              </div>
              <div className="col-lg-6">
                <p className="text-black-16"> $ 40</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <hr className="web-hr" />
        </div>
        <div className="row px-3">
          <div className="col-lg-12">
            <h6 className="text-16">Issue</h6>
            <p>For natively created Axure widgets, you do not have to look any further. For natively created
              Axure widgets, you do not have to look any further. For natively created Axure widgets, you
              do not have to look any further. For natively created Axure widgets, you do not have to look
              any</p>
          </div>
        </div>
        <a href="#_" className="site-modal-btn d-block w-100 text-center">Go Back</a>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Reports;
