import React from "react";
import bannerImg from "../Assets/Image/news_1.jpg";

export default function NewsCard() {
  return (
    <div className="container news-card card">
      {/* Section: News of the day */}
      <div className=" card-body row">
        <div className="col-md-6 mb-4">
          <div
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            data-mdb-ripple-color="light"
          >
            <img src={bannerImg} className="img-fluid" alt=" " />
            <a href="/">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </div>
        </div>

        <div className="card-body col-md-6 mb-4">
          <h5 className="all-card-title">Aikatan</h5>
          <h6 className="all-card-subtitle text-warning mb-2">
            This is going to be upcoming new fest website
          </h6>
          <h4>
            <strong>Facilis consequatur eligendi</strong>
          </h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis veritatis
            placeat unde animi laborum sapiente illo possimus, commodi
            dignissimos obcaecati illum maiores corporis.
          </p>
          <button type="button" className="btn btn-primary">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
