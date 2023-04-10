import React, { useState, useEffect } from "react";
import bannerImg from "../Assets/Image/banner.png";
import "../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import Navbar from "../Components/Navbar";

export default function Home(props) {
  document.title = "RKMGEC - Alumnis";

  const [loading, setLoading] = useState(false);

  const loadPage = () => {
    setLoading(true);
    props.setProgress(20);

    setTimeout(() => {
      props.setProgress(100);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadPage(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Navbar />
          <div className="hero-section row justify-content-evenly ">
            <div className="header col-sm-12 col-md-6">
              <div className="hero-title text-white">
                Welcome to <span className="hero-subtitle "> RAKMGEC</span> Alumnis!
              </div> 
              <Link to='/alumni' className="home-btn btn btn-primary">View Alumni</Link>
            </div>

            <div className="banner col-sm-12 col-md-6">
              <img className="banner-img" src={bannerImg} alt="" />
            </div>
          </div>

          {/* News Feed */}
          <h1 className="news-heading text-center">News Feed</h1>
          <NewsCard />
        </>
      )}
    </>
  );
}
