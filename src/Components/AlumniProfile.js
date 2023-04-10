import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Assets/Css/AlumniProfile.css";
import axios from "../axios";
import Navbar from "./Navbar";
import defaultPic from "../Assets/Image/profile_pic.webp";

export default function AlumniProfile(props) {
  let location = useLocation();
  const [alumni, setAlumni] = useState({});
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const id = location.pathname.slice(8);

  const fetchProfile = async () => {
    setLoading(true);
    props.setProgress(20);
    const response = await axios
      .get(`/api/alumnis/${id}`, {
        headers: {
          authToken: localStorage.getItem("authToken"),
        },
      })
      .catch((err) => console.log(err));

    props.setProgress(80);

    setAlumni(response.data.alumni);

    // setting auth for alumni access own account
    if (id === response.data.authUser) setAuth(true);
    props.setProgress(100);
    setLoading(false);

    // setting title
    document.title = `Alumni - ${alumni.name}`;
  };

  useEffect(() => {
    fetchProfile(); // eslint-disable-next-line
  }, []);

  // making element Editable
  const editEle = (e) => {
    const editBtn=e.target
    editBtn.innerText="Save"
    editBtn.classList="alumni-btn btn btn-outline-success text-white"


    // save change
    const aboutEle = document.getElementById("about");
    aboutEle.outerHTML = `<textarea id='aboutInput' style="width: 100%">${
      alumni.about === undefined ? "" : alumni.about
    }</textarea>`

    // selecting alumnis
    const companyEle = document.getElementById("company");
    const mobileEle = document.getElementById("mobileNo");
    const emailEle = document.getElementById("email");
    const inUrlEle = document.getElementById("inUrl");
    const fbUrlEle = document.getElementById("fbUrl");
    const ghUrlEle = document.getElementById("ghUrl");
    const twUrlEle = document.getElementById("twUrl");

    // replaceing with input tag
    companyEle.outerHTML = `<input name="company" id='companyInput' style="width: 100%" value="${
      alumni.company === undefined ? "" : alumni.company
    }"/>`;
    mobileEle.outerHTML = `<input name="mobileNo" id='mobileInput' style="width: 100%" value="${
      alumni.mobileNo === undefined ? "" : alumni.mobileNo
    }"/>`;
    emailEle.outerHTML = `<input name="email" id='emailInput' style="width: 100%" value="${
      alumni.email === undefined ? "" : alumni.email
    }"/>`;
    inUrlEle.outerHTML = `<input name="inUrl" id='inInput' style="width: 50%" value="${
      alumni.inUrl === undefined ? "" : alumni.inUrl
    }"/>`;
    fbUrlEle.outerHTML = `<input name="fbUrl" id='fbInput' style="width: 50%" value="${
      alumni.fbUrl === undefined ? "" : alumni.fbUrl
    }"/>`;
    ghUrlEle.outerHTML = `<input name="ghUrl" id='ghInput' style="width: 50%" value="${
      alumni.ghUrl === undefined ? "" : alumni.ghUrl
    }"/>`;
    twUrlEle.outerHTML = `<input name="twUrl" id='twInput' style="width: 50%" value="${
      alumni.twUrl === undefined ? "" : alumni.twUrl
    }"/>`;
  };

  // update alumni
  const updateAlumni = async (e) => {
    const saveBtn= e.target
    // selecting all input tag
    const aboutInput = document.getElementById("aboutInput");
    const companyInput = document.getElementById("companyInput");
    const mobileInput = document.getElementById("mobileInput");
    const emailInput = document.getElementById("emailInput");
    const inInput = document.getElementById("inInput");
    const fbInput = document.getElementById("fbInput");
    const ghInput = document.getElementById("ghInput");
    const twInput = document.getElementById("twInput");

    // collecting data from input tag
    const newAbout = aboutInput.value;
    const newCompany = companyInput.value;
    const newMobile = mobileInput.value;
    const newEmail = emailInput.value;
    const newIn = inInput.value;
    const newFb = fbInput.value;
    const newGh = ghInput.value;
    const newTw = twInput.value;

    // replaceing input tag with element
    aboutInput.outerHTML = `<div id="about" class="text-muted mb-0">${newAbout}</div>`;
    companyInput.outerHTML = `<p id="company" class="text-muted mb-0">${newCompany}</p>`;
    mobileInput.outerHTML = `<p id="mobileNo" class="text-muted mb-0">${newMobile}</p>`;
    emailInput.outerHTML = `<p id="email" class="text-muted mb-0">${newEmail}</p>`;
    inInput.outerHTML = `<a id="inUrl" href=${
      newIn === "" ? "/alumnis" : newIn
    } class="social-handle mb-0">${
      newIn === "" ? "Not updated yet" : "Linkedin"
    }</a>`;
    fbInput.outerHTML = `<a id="fbUrl" href=${
      newFb === "" ? "/alumnis" : newFb
    } class="social-handle mb-0">${
      newFb === "" ? "Not updated yet" : "Facebook"
    }</a>`;
    ghInput.outerHTML = `<a id="ghUrl" href=${
      newGh === "" ? "/alumnis" : newGh
    } class="social-handle mb-0">${
      newGh === "" ? "Not updated yet" : "GitHub"
    }</a>`;
    twInput.outerHTML = `<a id="twUrl" href=${
      newTw === "" ? "/alumnis" : newTw
    } class="social-handle mb-0">${
      newTw === "" ? "Not updated yet" : "Twitter"
    }</a>`;

    // save btn to edit btn
    saveBtn.innerText= "Edit"
    saveBtn.classList= "alumni-btn btn btn-outline-info text-white"

    await axios.put(`/api/alumnis/${id}`, {
      email: newEmail,
      about: newAbout,
      company: newCompany,
      mobileNo: newMobile,
      inUrl: newIn,
      fbUrl: newFb,
      ghUrl: newGh,
      twUrl: newTw,
    });
  };

  // handleClick alumni
  const handleClick = (e) => {
    if (e.target.innerText === "Edit") {
      editEle(e);
    } else {
      updateAlumni(e);
    }
  };
  return (
    <>
      {!loading && (
        <>
          <Navbar showAlert={props.showAlert} />

          {/* profile card */}
          <section>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="alumni-card card mb-4">
                    <div className="card-body my-5 text-center">
                      <img
                        src={defaultPic}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: " 150px" }}
                      />
                      <h5 className="alumni-title my-3">{alumni.name}</h5>
                      <p className="alumni-subtitle text-muted mb-1">
                        {alumni.year}({alumni.dept})
                      </p>
                      <p className="alumni-subtitle text-muted mb-1">
                        Ramkrishna Mahato Government Engineering College
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                        {auth && (
                          <button
                            onClick={handleClick}
                            id="edit"
                            type="button"
                            className="alumni-btn btn btn-outline-info text-white ms-1"
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="alumni-card card mb-4 mb-lg-0">
                    <div className="card-body p-0">
                      <ul className="alumni-card list-group list-group-flush rounded-3">
                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            className="fab fa-linkedin fa-lg"
                            style={{ color: " #0072b1" }}
                          ></i>
                          <a
                            id="inUrl"
                            href={
                              alumni.inUrl === undefined || alumni.inUrl === ""
                                ? "/alumnis"
                                : alumni.inUrl
                            }
                            className="social-handle mb-0"
                          >
                            {alumni.inUrl === undefined || alumni.inUrl === ""
                              ? "Not updated yet"
                              : "Linkedin"}
                          </a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            className="fab fa-twitter fa-lg"
                            style={{ color: " #55acee" }}
                          ></i>
                          <a
                            id="twUrl"
                            href={
                              alumni.twUrl === undefined || alumni.twUrl === ""
                                ? "/alumnis"
                                : alumni.twUrl
                            }
                            className="social-handle mb-0"
                          >
                            {alumni.twUrl === undefined || alumni.twUrl === ""
                              ? "Not updated yet"
                              : "Twitter"}
                          </a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            className="fab fa-facebook-f fa-lg"
                            style={{ color: " #3b5998" }}
                          ></i>
                          <a
                            id="fbUrl"
                            href={
                              alumni.fbUrl === undefined || alumni.fbUrl === ""
                                ? "/alumnis"
                                : alumni.fbUrl
                            }
                            className="social-handle mb-0"
                          >
                            {alumni.fbUrl === undefined || alumni.fbUrl === ""
                              ? "Not updated yet"
                              : "Facebook"}
                          </a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            className="fab fa-github fa-lg"
                            style={{ color: " #333333" }}
                          ></i>
                          <a
                            id="ghUrl"
                            href={
                              alumni.ghUrl === undefined || alumni.ghUrl === ""
                                ? "/alumnis"
                                : alumni.ghUrl
                            }
                            className="social-handle mb-0"
                          >
                            {alumni.ghUrl === undefined || alumni.ghUrl === ""
                              ? "Not updated yet"
                              : "GitHub"}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="alumni-card card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{alumni.name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p id="email" className="text-muted mb-0">
                            {alumni.email}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mobile</p>
                        </div>
                        <div className="col-sm-9">
                          <p id="mobileNo" className="text-muted mb-0">
                            {alumni.mobileNo}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Company</p>
                        </div>
                        <div className="col-sm-9">
                          <p id="company" className="text-muted mb-0">
                            {alumni.company}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Department</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{alumni.dept}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="alumni-card m-2 p-5 col-md-12">
                      <h1>About</h1>
                      <p className="text-muted mb-0" id="about">
                        {alumni.about === "" ? "Not updated yet" : alumni.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
