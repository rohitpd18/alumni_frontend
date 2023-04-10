import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/Css/Navbar.css";

const Navbar = (props) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("id");
    props.showAlert("Logout successfully", "success");
    navigate("/login");
  };

  const id = localStorage.getItem("id");
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-dark m-2 h1"
            aria-current="page"
            to="/"
          >
            HomePage
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
            <div>
              <div className=" nav d-flex container-fluid gap-3">
                {!localStorage.getItem("authToken") ? (
                  <>
                    <li className="nav-item">
                      <Link aria-current="page" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link aria-current="page" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link aria-current="page" to={`/alumni/${id}`}>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" aria-current="page" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
