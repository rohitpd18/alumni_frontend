import React, {useState, useEffect } from "react";
import bannerImg from "../Assets/Image/main_banner.png";
// import logo from "../Assets/Image/logo.jpg"
import "../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function Home(props) {

  document.title = "RKMGEC - Alumnis";

  const [loading, setLoading] = useState(false)

  const loadPage =()=>{
    setLoading(true)
    props.setProgress(20)
    
    setTimeout(() => {
      props.setProgress(100)
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    loadPage(); // eslint-disable-next-line
  }, [])
  
  return (
    <>
    {!loading &&<>
      <div className="hero-section">
        <div
          id="carouselExampleSlidesOnly"
          className="banner-img carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bannerImg} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        {/* <img src={logo} className="logo" alt="" /> */}
        <Link to="/alumni" type="button" className="alumni-btn btn btn-info text-white">
          View our Alumni
        </Link>
      </div>

      {/* News Feed */}
      <h1 className="news-heading text-center">News Feed</h1>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      </>}
    </>
  );
}
