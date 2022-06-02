import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";

const VehicleTypes = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [vehicletypes, setvehicletypes] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handlegetVehicleTypes();
  }, []);

  const handlegetVehicleTypes = async () => {
    setloading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.get(`${baseURL}/vehicle/getAllVehicles`, config);
      console.log("res", res);
      setloading(false);

      setvehicletypes(res?.data?.vehicle);
      // setSetting(res?.data?.setting);
    } catch (err) {
      setloading(false);

      console.log(err);
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
                    <div className="col-md-6">
                      <h5 className="inner-heading-24">Vehicle Types</h5>
                    </div>
                    <div className="col-md-6 text-right">
                      <Link to="/AddVehicleTypes" className="site-btn">
                        Add New Type
                      </Link>
                    </div>
                  </div>
                  <div className="card mb-sm-5 mx-2">
                    <div className="card-content collapse show">
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
                        <div className="card-dashboard">
                          {vehicletypes?.length > 0 ? (
                            vehicletypes?.map((veh) => (
                              <div className="row my-2">
                                <div className="col-lg-6">
                                  <div className="for-doted-bdr">
                                    <div className="row align-items-center">
                                      <div className="col-lg-8">
                                        <div className="media align-items-center">
                                          <img
                                            style={{
                                              maxWidth: 114,
                                              maxHeight: 114,
                                              minWidth: 114,
                                              minHeight: 114
                                            }}
                                            src={
                                              veh?.image && veh?.image !== null
                                                ? `${imageURL}${veh?.image}`
                                                : "../app-assets/images/portrait/small/avatar-s-1.png"
                                            }
                                            className="mr-3"
                                            alt="..."
                                          />
                                          <div className="media-body">
                                            <h5 className="text-24">
                                              {veh?.name}
                                            </h5>
                                            {veh?.facilities?.length > 0 &&
                                              veh?.facilities?.map((vehh) => (
                                                <h6 className="text-18">
                                                  {vehh}
                                                </h6>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 text-lg-center">
                                        <Link
                                          to={`/EditVehicleType/${veh?._id}`}
                                          className="theme-colour"
                                        >
                                          <i className="fas fa-pen" />
                                          Edit
                                        </Link>
                                        <h3 className="text-30 mt-2">
                                          ${veh?.rate}
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>No Vehciles Found</p>
                          )}
                        </div>
                      )}
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

export default VehicleTypes;
