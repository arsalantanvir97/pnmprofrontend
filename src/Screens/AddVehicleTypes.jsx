import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageSelector from "../Components/ImageSelector";
import InputNumber from "../Components/InputNumber";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Toasty from "../utils/toast";
import axios from "axios";
import Swal from "sweetalert2";
import { baseURL } from "../utils/api";
import { useSelector } from "react-redux";

const AddVehicleTypes = ({ history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const [name, setname] = useState("");
  const [facilities, setfacilities] = useState([]);
  const [rate, setrate] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setis_edit] = useState(true);
  const [loading, setloading] = useState(false);

  const handleChange = (val) => {
    setfacilities(val);
  };

  const createVehicleTypeHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`
      }
    };
    console.log("createVehicleTypeHandler", facilities);
    setloading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("facilities", JSON.stringify(facilities));
      formData.append("rate", rate);
      formData.append("user_image", image);
      const res = await axios.post(
        `${baseURL}/vehicle/createVehicleType`,
        formData,
        config
      );
      setloading(false);

      console.log("res", res);
      if (res?.status == 201) {
        console.log("blockkk");
        Swal.fire({
          icon: "success",
          title: "",
          text: "VechileType Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        console.log("blockkk2");

        history.push("/VehicleTypes");
        console.log("blockkk3");
      }
    } catch (error) {
      setloading(false);

      console.log("error", error?.response?.data);
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
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
                      <Link
                        to="#"
                        onClick={() => {
                          history?.goBack();
                        }}
                        className="inner-heading-24 black-colour"
                      >
                        <i className="fas fa-arrow-left" /> Add New Vehicle Type
                      </Link>
                    </div>
                  </div>
                  <div className="card mb-sm-5 mx-2">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row my-1">
                          <div className="col-lg-12">
                            <h6 className="text-24 for-bold">Add Image</h6>
                          </div>
                        </div>
                        <div className="row my-2">
                          <div className="col-lg-6">
                            <ImageSelector
                              setImage={setimage}
                              image={image}
                              is_edit={is_edit}
                            />
                            {/* <div className="file-upload-wrap">
                              <div className="preview">
                                <div className="d-inline-block text-center">
                                  <img id="file-ip-1-preview" />
                                </div>
                              </div>
                              <div id="upload-icon" className="upload-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.72"
                                  height="22.72"
                                  viewBox="0 0 22.72 22.72"
                                >
                                  <g
                                    id="Icon_feather-upload"
                                    data-name="Icon feather-upload"
                                    transform="translate(-3.5 -3.5)"
                                    opacity="0.5"
                                  >
                                    <path
                                      id="Path_59090"
                                      data-name="Path 59090"
                                      d="M25.22,22.5v4.6a2.3,2.3,0,0,1-2.3,2.3H6.8a2.3,2.3,0,0,1-2.3-2.3V22.5"
                                      transform="translate(0 -4.187)"
                                      fill="none"
                                      stroke="#262121"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                    />
                                    <path
                                      id="Path_59091"
                                      data-name="Path 59091"
                                      d="M22.011,10.256,16.256,4.5,10.5,10.256"
                                      transform="translate(-1.396)"
                                      fill="none"
                                      stroke="#262121"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                    />
                                    <path
                                      id="Path_59092"
                                      data-name="Path 59092"
                                      d="M18,4.5V18.313"
                                      transform="translate(-3.14)"
                                      fill="none"
                                      stroke="#262121"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                    />
                                  </g>
                                </svg>
                              </div>
                              <div className="d-inline-block align-bottom text-center">
                                <label
                                  htmlFor="upload-input"
                                  className="d-block mb-0 "
                                >
                                  <span className="black-text"> Upload</span>
                                  <p>JPG, PNG (max size 3 MB)</p>
                                </label>
                                <input
                                  type="file"
                                  id="upload-input"
                                  name="file"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="row my-1">
                          <div className="col-lg-12">
                            <h6 className="text-24 for-bold">Details</h6>
                          </div>
                        </div>
                        <div className="row my-2">
                          <div className="col-lg-6">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <div className="form-field combine-field-wth-bdr">
                                <label htmlFor className="ml-3 mt-xl-1">
                                  Name<span className="red-text">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="site-input left-icon"
                                  placeholder="Mini "
                                  name
                                  id
                                  value={name}
                                  onChange={(e) => {
                                    setname(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="form-field combine-field-wth-bdr">
                                <label htmlFor className="ml-3 mt-xl-1">
                                  Facilities<span className="red-text">*</span>
                                </label>
                                <TagsInput
                                  style={{
                                    color: "black",
                                    borderRight: "none"
                                  }}
                                  value={facilities}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-field combine-field-wth-bdr">
                                <label htmlFor className="ml-3 mt-xl-1">
                                  Rate ($)<span className="red-text">*</span>
                                </label>
                                <InputNumber
                                  min={0}
                                  value={rate}
                                  onChange={setrate}
                                  max={9}
                                  className="site-input left-icon"
                                />
                              </div>
                              {!loading ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    name?.length > 0 &&
                                    facilities?.length > 0 &&
                                    rate > 0 &&
                                    image?.name?.length > 0
                                      ? createVehicleTypeHandler()
                                      : Toasty(
                                          "error",
                                          `Please fill out all the required fields!`
                                        );
                                  }}
                                  className="site-btn"
                                  data-dismiss="modal"
                                  data-toggle="modal"
                                  data-target="#updt-suc"
                                >
                                  Save
                                </button>
                              ) : (
                                <i className="fas fa-spinner fa-pulse"></i>
                              )}
                            </form>
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
  );
};

export default AddVehicleTypes;
