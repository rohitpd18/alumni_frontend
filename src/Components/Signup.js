import axios from "../axios";
import React, { useState } from "react";
import SignupImage from "../Assets/Image/sign-up-form.svg";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function Signup(props) {
  // setting title
  document.title = "Alumnis- Login";

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [comPass, setComPass] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== comPass) {
      props.showAlert("Repeat password does not match", "danger");
    }

    // fetching alumni
    let result=''
    try {
      result = await axios.post("/auth/signup", {
        email,
        rollNo: parseInt(rollNo),
        password,
        name,
        year,
      });
    } 
    // showing accont already exists
    catch {
      props.showAlert("Invaild details", "danger");
    }

    
    // checking that alumni make there account or not
    if (result.data.mass === "already account created") {
      props.showAlert("already account created", "danger");
    } else {
      props.showAlert("Signup Sucessfull", "danger");
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card bg-dark my-3 text-black"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="rollNo"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select
                              className="select form-control"
                              onChange={(e) => setYear(e.target.value)}
                            >
                              <option disabled>Select</option>
                              <option value="2016-2020">2016-2020</option>
                              <option value="2017-2021">2017-2021</option>
                              <option value="2018-2022">2018-2022</option>
                            </select>
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Academic Year
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={rollNo}
                              onChange={(e) => setRollNo(e.target.value)}
                              type="number"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your College Roll No.
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={comPass}
                              onChange={(e) => setComPass(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={SignupImage}
                        className="img-fluid"
                        alt="Sample "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
