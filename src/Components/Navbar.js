import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    let navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('authToken')
        props.showAlert('Logout successfully', "success")
        navigate('/login')
    }

    const id= localStorage.getItem('id')
  return (
    <div>
      <nav>
        <ul className="nav justify-content-end navbar-dark bg-dark gap-5 p-3">
          {!localStorage.getItem("authToken") ? (
            <>
              <li className="nav-item">
                <Link className="btn btn-primary" aria-current="page" to="/login" > Login </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary me-3" aria-current="page" to="/signup"> Signup </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-primary" aria-current="page" to={`/alumni/${id}`}> Profile </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" aria-current="page" onClick={handleLogout} > Logout </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
