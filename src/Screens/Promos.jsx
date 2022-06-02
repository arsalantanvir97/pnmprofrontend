import React from 'react'

const Promos = () => {
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
                  <h5 className="inner-heading-24 bold">Promo</h5>
                </div>
                <div className="col-md-6 text-right">
                  <a href="#_" className="site-btn" data-dismiss="modal" data-toggle="modal" data-target="#add-promo">Add Promo</a>
                </div>
              </div>
              <div className="card my-sm-2 mx-2">
                <div className="card-content collapse show">
                  <div className="card-dashboard">
                    <div className="row ml-0 mr-0 py-2">
                      <div className="col-12 d-xl-flex align-items-center justify-content-between">
                        <div className="d-sm-flex align-items-center for-select">
                          <label htmlFor className="mr-sm-1 dash-label mb-0">Showing</label>
                          <select className="dash-select entri-drop">
                            <option value>10</option>
                            <option value>11</option>
                            <option value>12</option>
                            <option value>13</option>
                            <option value>14</option>
                            <option value>15</option>
                          </select>
                          <label htmlFor className="ml-sm-1 dash-label mb-0">Entries</label>
                        </div>
                        <div className="search-barr w-300 mt-1 mt-xl-0">
                          <input type="search" placeholder="Search" className="p-1 dash-input srch-int" name id />
                          <button className="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.04" height="19.045" viewBox="0 0 19.04 19.045">
                              <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M23.317,22.159l-5.3-5.345a7.546,7.546,0,1,0-1.145,1.16l5.261,5.31a.815.815,0,0,0,1.15.03A.82.82,0,0,0,23.317,22.159Zm-11.226-4.12a5.959,5.959,0,1,1,4.215-1.745A5.922,5.922,0,0,1,12.091,18.039Z" transform="translate(-4.5 -4.493)" fill="#5568FE" />
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
                            <th>Promo Name</th>
                            <th>Promo Code</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>Mark Carson</td>
                            <td>MB40A</td>
                            <td>04/13/2020</td>
                            <td>Active</td>
                            <td>
                              <div className="btn-group custom-dropdown ml-2 mb-1">
                                <button type="button" className="btn transparent-btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                                <div className="dropdown-menu text-left custom-dropdown">
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start" data-dismiss="modal" data-toggle="modal" data-target="#feedback-view"><i className="fas fa-eye theme-colour" />View</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-ban red" />Block</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-pen theme-colour" />Edit</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>Mark Carson</td>
                            <td>MB40A</td>
                            <td>04/13/2020</td>
                            <td>Active</td>
                            <td>
                              <div className="btn-group custom-dropdown ml-2 mb-1">
                                <button type="button" className="btn transparent-btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                                <div className="dropdown-menu text-left custom-dropdown">
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start" data-dismiss="modal" data-toggle="modal" data-target="#feedback-view"><i className="fas fa-eye theme-colour" />View</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-ban red" />Block</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-pen theme-colour" />Edit</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>Mark Carson</td>
                            <td>MB40A</td>
                            <td>04/13/2020</td>
                            <td>Active</td>
                            <td>
                              <div className="btn-group custom-dropdown ml-2 mb-1">
                                <button type="button" className="btn transparent-btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                                <div className="dropdown-menu text-left custom-dropdown">
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start" data-dismiss="modal" data-toggle="modal" data-target="#promp-view"><i className="fas fa-eye theme-colour" />View</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-ban red" />Block</a>
                                  <a href="#_" className="dropdown-item d-flex align-items-center justify-content-start"><i className="fas fa-pen theme-colour" />Edit</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info pl-1">Showing 1 to 3 of 3
                          entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers pr-1">
                          <ul className="pagination justify-content-end">
                            <li className="paginate_button page-item previous disabled">
                              <a href="#" className="page-link">Previous</a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a href="#" className="page-link">1</a>
                            </li>
                            <li className="paginate_button page-item"><a href="#" className="page-link">2</a>
                            </li>
                            <li className="paginate_button page-item"><a href="#" className="page-link">3</a>
                            </li>
                            <li className="paginate_button page-item"><a href="#" className="page-link">4</a>
                            </li>
                            <li className="paginate_button page-item"><a href="#" className="page-link">5</a>
                            </li>
                            <li className="paginate_button page-item next disabled" i><a href="#" className="page-link">Next</a>
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
  </>
  )
}

export default Promos