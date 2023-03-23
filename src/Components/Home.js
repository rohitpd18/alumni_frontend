import React from "react";
import bannerImg from "../Assets/Image/main_banner.png";
// import logo from "../Assets/Image/logo.jpg"
import "../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <div
          id="carouselExampleSlidesOnly"
          className="banner-img carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={bannerImg} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        {/* <img src={logo} class="logo" alt="" /> */}
        <Link to="/alumni" type="button" class="alumni-btn btn btn-info text-white">
          View our Alumni
        </Link>
      </div>

      {/* News Feed */}
      <h1 className="news-heading text-center">News Feed</h1>

      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
  );
}
