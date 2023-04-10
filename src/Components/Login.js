import React, { useState } from "react";
import loginImage from "../Assets/Image/login.svg";
import axios from "../axios";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handling after submiting
  const handleSubmit = async (e) => {
    e.preventDefault();

    // fecthing alumni
    let response = "";
    try {
      response = await axios.post("/auth/login", {
        email,
        password,
      });
    } catch {
      // showing that invaild details
      props.showAlert("Invaild Credentials", "danger");
    }

    // if alumni does not exist then just simple return
    if (response === undefined) return;
    else {
      const authToken = response.data.authToken;
      console.log(response.data);
      props.showAlert("Login successfully", "success");

      // setting auth-token and id in local stroage
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("id", response.data.data.alumni.id);

      // navigate to alumni page
      navigate("/alumni");
    }
  };
  return (
    <div>
      <Navbar />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="form-card card row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={loginImage} className="img-fluid" alt="Phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <h1 className="mb-3">Login form</h1>
                {/* Email input  */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* Password input  */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox  */}
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div> */}
                  <a href="#!">Forgot password?</a>
                </div>

                {/* Submit button  */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
