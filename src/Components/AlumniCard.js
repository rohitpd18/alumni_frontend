import React from "react";
import "../Assets/Css/AlumniCard.css";

export default function Alumni() {
  // let account= document.getElementsByClassName("social-account")
  // console.log(account)
  // account.array.forEach(element => {
  //   element.add
  // });
  return (
    <div>
      <div className="card mb-5 rounded bg-dark" style={{ width: "18rem", zIndex: "10" }}>
        <div
          className="card-up "
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
            src="https://media.licdn.com/dms/image/D4D03AQHFeftBP1xHFQ/profile-displayphoto-shrink_200_200/0/1669483445071?e=1684368000&v=beta&t=BUu3ppbzmW2gvWNLufWMJI1OxJlfmB5upaXmkNoyGYw"
            className="rounded-circle"
            alt="woman avatar"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Rohit Prasad</h5>
          <h6 className="card-subtitle  mb-2">Web Developer</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>


          <div class="social-menu">
            <ul className="d-flex justify-content-evenly">
              <li><a href="/"><i class="fa fa-facebook"></i></a></li>
              <li><a href="/"><i class="fa fa-twitter"></i></a></li>
              <li><a href="/"><i class="fa fa-linkedin"></i></a></li>

              {/* <li><a href="/"><i class="fa fa-instagram"></i></a></li> */}
              {/* <li><a href="/"><i class="fa fa-youtube"></i></a></li> */}
            </ul>
          </div>

          {/* <button type="button" class="btn btn-info">View Details</button> */}
        </div>
      </div>
    </div>
  );
}
