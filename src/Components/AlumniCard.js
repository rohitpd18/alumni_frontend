import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Css/AlumniCard.css";
import defaultPic from '../Assets/Image/profile_pic.webp'; 

export default function Alumni(props) {
  let navigate =useNavigate()

  return (
    <div>
      <div onClick={()=>navigate(`/alumni/${props.id}`)} className="all-card fadeInUp card mb-5 rounded">
        {/* <div
          className="card-up"
          style={{
            height: "25%",
            position: "absolute",
            zIndex: "-10",
            width: "100%",
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          }}
        ></div> */}

        <div className="avatar mx-auto mt-2">
          <img
            src={defaultPic}
            className="all-card-img rounded-circle"
            alt="woman avatar"
          />
        </div>
        <div className="all-card-body text-center">
          <h5 className="all-card-title">{props.name}</h5>
          <h6 className="all-card-subtitle text-warning mb-2">Software Engineer at XYZ Ltd</h6>
          <h6 className="all-card-subtitle">{props.year}({props.dept})</h6>
          <p className="all-card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <div className="blur"></div> */}

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
