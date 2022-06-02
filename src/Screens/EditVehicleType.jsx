import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../Components/ImageSelector";
import { baseURL } from "../utils/api";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import InputNumber from "../Components/InputNumber";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";

const EditVehicleType = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [facilities, setfacilities] = useState([]);
  const [rate, setrate] = useState("");
  const [is_edit, setis_edit] = useState(true);
  const [image, setimage] = useState("");

  useEffect(() => {
    handlegetSingleVehicleType();
  }, []);

  const handlegetSingleVehicleType = async () => {
    setloading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.get(
        `${baseURL}/vehicle/getSingleVehicleType/${match?.params?.id}`,
        config
      );
      console.log("res", res);
      setloading(false);
      setname(res?.data?.vehicle?.name);
      setfacilities(res?.data?.vehicle?.facilities);
      setrate(res?.data?.vehicle?.rate);
      setimage(res?.data?.vehicle?.image);
      // setSetting(res?.data?.setting);
    } catch (err) {
      setloading(false);

      console.log(err);
    }
    setloading(false);
  };

  const handleChange = (val) => {
    setfacilities(val);
  };

  const editVehicleTypeHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`
      }
    };
    console.log("createVehicleTypeHandler", facilities);
    setloading(true);

    try {
      const formData = new FormData();
      formData.append("id", match?.params?.id);

      formData.append("name", name);
      formData.append("facilities", JSON.stringify(facilities));
      formData.append("rate", rate);
      formData.append("user_image", image);
      const res = await axios.post(
        `${baseURL}/vehicle/editVehicleType`,
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
          text: "VechileType Edited Successfully",
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
                        <i className="fas fa-arrow-left" /> Edit Vehicle Type
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
                          <div className="row">
                            <div className="col-lg-4">
                              <ImageSelector
                                setImage={setimage}
                                image={image}
                                is_edit={is_edit}
                              />
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
                                    type="email"
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
                                    Facilities
                                    <span className="red-text">*</span>
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
                                    className="site-btn"
                                    onClick={() => {
                                      name?.length > 0 &&
                                      facilities?.length > 0 &&
                                      rate > 0 &&
                                      image
                                        ? editVehicleTypeHandler()
                                        : Toasty(
                                            "error",
                                            `Please fill out all the required fields!`
                                          );
                                    }}
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

export default EditVehicleType;
