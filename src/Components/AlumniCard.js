import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Css/AlumniCard.css";
import defaultPic from '../Assets/Image/profile_pic.jpeg'; 

export default function Alumni(props) {
  let navigate =useNavigate()

  return (
    <div>
      <div onClick={()=>navigate(`/alumni/${props.id}`)} className="card mb-5 rounded bg-dark" style={{ width: "18rem", zIndex: "10" }}>
        <div
          className="card-up"
          style={{
            height: "25%",
            position: "absolute",
            zIndex: "-10",
            width: "100%",
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          }}
        ></div>

        <div className="avatar mx-auto mt-2">
          <img
            src={defaultPic}
            className="rounded-circle"
            alt="woman avatar"
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle text-warning mb-2">Software Engineer at XYZ Ltd</h6>
          <h6 className="card-subtitle">{props.year}({props.dept})</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>


          <div className="social-menu">
            <ul className="d-flex justify-content-evenly">
              <li><a href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
              <li><a href= {`mailto: ${props.email}`}><i className="fa fa-envelope"></i></a></li>

              {/* <li><a href="/"><i className="fa fa-instagram"></i></a></li> */}
              {/* <li><a href="/"><i className="fa fa-youtube"></i></a></li> */}
            </ul>
          </div>

          {/* <button type="button" className="btn btn-info">View Details</button> */}
        </div>
      </div>
    </div>
  );
}
