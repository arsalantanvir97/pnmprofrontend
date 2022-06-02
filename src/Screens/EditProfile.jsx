import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../Components/ImageSelector";
import { updateAdminInfoAction } from "../actions/adminActions";
import Toasty from "../utils/toast";

const EditProfile = ({ history }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      setfirstName(adminInfo?.firstName);
      setlastName(adminInfo?.lastName);
      setemail(adminInfo?.email);
      setimage(adminInfo?.userImage);
    }
  }, [adminInfo]);

  const updateProfileData = async (e) => {
    if (firstName?.length > 0 && lastName?.length > 0) {
      try {
        setloading(true);
        const formData = new FormData();
        formData.append("user_image", image);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", adminInfo?.email);

        await dispatch(updateAdminInfoAction(formData));
        setloading(false);

        setIsEdit(false);
      } catch (error) {
        setloading(false);
      }
    } else {
      Toasty("error", `Please fill out all the required fields!`);
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
                      <Link
                        to="#"
                        onClick={() => {
                          history?.goBack();
                        }}
                        className="inner-heading-24 black-colour"
                      >
                        <i className="fas fa-arrow-left" /> Edit Profile
                      </Link>
                    </div>
                  </div>
                  <div className="card mb-sm-5 mx-2">
                    <div className="card-content collapse show">
                      <div className="card-dashboard">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="media d-lg-flex d-md-flex d-block ">
                              <div className="mr-3">
                              <ImageSelector
                                setImage={setimage}
                                image={image}
                                is_edit={is_edit}
                              />
                              </div>
                              <div className="media-body mt-2">
                                <p className="text-16" style={{marginBottom:0}}>
                                  <i className="fas fa-envelope theme-colour" />
                                  {email}
                                </p>
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                  }}
                                >
                                  {" "}
                                  {is_edit ? (
                                    <div className="form-field combine-field-wth-bdr">
                                      <label htmlFor className="ml-3 mt-xl-1">
                                        First Name
                                        <span className="red-text">*</span>
                                      </label>

                                      <input
                                        type="text"
                                        className="site-input left-icon"
                                        placeholder="Enter First Name"
                                        value={firstName}
                                        onChange={(e) => {
                                          setfirstName(e.target.value);
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <h5 className="text-20">{firstName}</h5>
                                  )}
                                  {is_edit ? (
                                    <div className="form-field combine-field-wth-bdr">
                                      <label htmlFor className="ml-3 mt-xl-1">
                                        Last Name
                                        <span className="red-text">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="site-input left-icon"
                                        placeholder="Enter Last Name"
                                        name
                                        value={lastName}
                                        id
                                        onChange={(e) => {
                                          setlastName(e.target.value);
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <p>{lastName}</p>
                                  )}
                                </form>
                                <div className="col-lg-12 my-2">
                                  {" "}
                                  {!loading ? (
                                    <Link
                                      href="edit-profile.php"
                                      className="site-btn "
                                      onClick={() => {
                                        if (!is_edit) {
                                          setIsEdit(true);
                                        } else {
                                          updateProfileData();
                                        }
                                      }}
                                    >
                                      {" "}
                                      {is_edit ? "Update" : "Edit"}
                                    </Link>
                                  ) : (
                                    <i className="fas fa-spinner fa-pulse"></i>
                                  )}
                                  {!is_edit && (
                                    <Link
                                      to="/ChangePassword"
                                      className="site-btn-accept"
                                    >
                                      Change Password
                                    </Link>
                                  )}
                                </div>
                              </div>
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
  );
};

export default EditProfile;
