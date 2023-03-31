import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../Assets/Css/AlumniProfile.css";
import axios from "../axios";
import Navbar from "./Navbar";
import defaultPic from "../Assets/Image/profile_pic.jpeg";

export default function AlumniProfile(props) {
  let location = useLocation();
  const [alumni, setAlumni] = useState({});
  const [auth, setAuth] = useState(false);
  const [about, setAbout] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const aboutRef = useRef();
  const editRef = useRef();

  const id = location.pathname.slice(8);

  let saveBtn = "";

  const fetchProfile = async () => {
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
    setPosition(response.data.alumni.position);
    setCompany(response.data.alumni.company);
    setAbout(response.data.alumni.about);

    // setting auth for alumni access own account
    if (id === response.data.authUser) setAuth(true);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchProfile(); // eslint-disable-next-line
  }, []);

  const saveChange = () => {
    console.log("asdf");
  };

  // Edit alumni
  const handleEdit = (e) => {
    console.log("handleEdit fire");
    const editBtn = e.target;

    let parElm = document.createElement("div");
    parElm.classList = "d-flex gap-2 flex-1 justify-content-center";

    // create save btn
    const element = document.createElement("button");
    element.setAttribute("onClick", saveChange);
    element.classList = "btn btn-outline-success text-white saveBtn";
    const textNode = document.createTextNode("Save");
    element.appendChild(textNode);

    // // create cancel button
    // const element2 = document.createElement("button");
    // element2.classList= "btn btn-outline-danger text-white"
    // const textNode2= document.createTextNode("Cancel")
    // element2.appendChild(textNode2);

    parElm.appendChild(element);
    // parElm.appendChild(element2)
    // editBtn.parentElement.replaceChild(parElm, e.target);

    // editRef.current.outerHTML=`<div><button class="btn btn-outline-success text-white" id="saveBtn" style='width: 100%'>Save</button></div>`
    editBtn.outerHTML = `<div><button class="btn btn-outline-success text-white" id="saveBtn" style='width: 100%'>Save</button></div>`;

    // save change
    const aboutEle = document.getElementById("about");
    aboutEle.outerHTML = `<textarea id='aboutInput' style="width: 100%">${
      alumni.about === undefined ? "" : about
    }</textarea>`;
    saveBtn = document.getElementById("saveBtn");

    // // Position change
    // const positionEle = document.getElementById("position");
    // positionEle.outerHTML = `<input id='positionInput' style="width: 100%" value="${position===undefined?"":position}"/>`;

    // company change
    const companyEle = document.getElementById("company");
    companyEle.outerHTML = `<input id='companyInput' style="width: 100%" value="${
      alumni.company === undefined ? "" : company
    }"/>`;

    saveBtn.addEventListener("click", async () => {
      // about change
      const aboutInput = document.getElementById("aboutInput");
      console.log(aboutInput.value);
      const newAbout = aboutInput.value;
      setAbout(newAbout);
      aboutInput.outerHTML = `<div id="about">${newAbout}</div>`;

      // // position change
      // const positionInput = document.getElementById("positionInput");
      // const newPosition = positionInput.value;
      // setPosition(newPosition);
      // positionInput.outerHTML = `<p id="position">${newPosition}</p>`;

      // company change
      const companyInput = document.getElementById("companyInput");
      const newCompany = companyInput.value;
      setCompany(newCompany);
      companyInput.outerHTML = `<p id="company">${newCompany}</p>`;

      // save btn to edit btn
      saveBtn.outerHTML = `<button id="editBtn" class="btn btn-outline-info text-white" style="width: 100%"> Edit Profile</button>`;

      console.log({ company, about, position });
      const response = await axios.put(`/api/alumnis/${id}`, {
        company: newCompany,
        about:newAbout,
      });

      console.log(response);
    });
  };
  return (
    <>
      <Navbar showAlert={props.showAlert} />
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-10 col-xl-10">
              <div className="card">
                <div className="back-image rounded-top d-flex">
                  <div className="profile-container d-flex flex-column">
                    <img
                      src={defaultPic}
                      alt="Generic placeholder "
                      className="profile-pic img-fluid img-thumbnail mt-4 mb-2"
                    />
                    {auth && (
                      <button
                        ref={editRef}
                        onClick={handleEdit}
                        type="button"
                        id="editBtn"
                        className="btn btn-outline-info text-white"
                        data-mdb-ripple-color="primary"
                        style={{ zIndex: "1" }}
                      >
                        Edit profile
                      </button>
                    )}
                  </div>
                  <div>
                    <h5 className="title">{alumni.name}</h5>
                    <p className="subtitle">
                      {alumni.year}({alumni.dept})
                    </p>
                  </div>
                </div>

                <div className="profile-card-body bg-dark">
                  {/* about */}
                  <div className="about">
                    <h1 className="mb-1">About</h1>
                    <div ref={aboutRef} id="about">
                      {alumni.about}
                    </div>
                  </div>

                  {/* Exprience */}
                  <div className="mb-5">
                    <h1>Exprience</h1>
                    <div>
                      <div
                        id="exprience"
                        className="subtitle text-warning d-flex mb-0"
                      >
                        {/* <p id="position">{position} </p> {position===""?<p>&nbsp;at&nbsp;</p>:""} */}
                        <p id="company" className="mb-0">{alumni.company}</p>
                      </div>
                      <small>Mar 2022- current</small>
                    </div>
                  </div>

                      <h4>Social Media Handle:</h4>
                  <div className="social-menu">
                    <ul className="d-flex justify-content-evenly mt-4">
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href= {`mailto: ${props.email}`}><i className="fa fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
