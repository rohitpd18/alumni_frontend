import React from "react";
import AlumniCard from "./AlumniCard";
import { useState, useEffect } from "react";
import axios from "../axios";
import Navbar from "./Navbar";


export default function Alumni(props) {
  const [alumnis, setAlumnis] = useState([]);


  // alumnis fecting
  const fetchAlumni = async (query) => {
    console.log("fire");
    props.setProgress(10);
    const response = await axios.get(`/api/alumnis/${query}`);
    props.setProgress(50);
    const json = JSON.parse(JSON.stringify(response.data.data.alumni));
    const entries = json;

    props.setProgress(80);
    setAlumnis(entries);
    props.setProgress(100);
  };

  const handleLoction = (e) => {
    const btns = Array.from(document.getElementsByClassName("filter"));

    btns.forEach((e) => {
      e.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  useEffect(() => {
    fetchAlumni("/"); // eslint-disable-next-line 
  }, []);


  return (
    <>
    <Navbar showAlert={props.showAlert}/>
      <div className="year-filter d-flex justify-content-center gap-5 mt-4">
        <nav
          id="navbar flex-wrap"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <ul>
            <button
              onClick={(e)=>{handleLoction(e); fetchAlumni("?year=2016-2020")}}
              className="filter btn btn-outline-info"
            >
              2016-2020
            </button>
          </ul>
          <ul>
            <button 
              onClick={(e)=>{handleLoction(e); fetchAlumni("?year=2017-2021")}}
              className="filter btn btn-outline-info"
            >
              2017-2021
            </button>
          </ul>
          <ul>
            <button
              onClick={(e)=>{handleLoction(e); fetchAlumni("?year=2018-2022")}}
              className="filter btn btn-outline-info"
            >
              2018-2022
            </button>
          </ul>
          <ul>
            <button
              onClick={(e)=>{handleLoction(e); fetchAlumni("/")}}
              className="filter btn btn-outline-info active"
            >
              All Alumni
            </button>
          </ul>
        </nav>
      </div>
      <div className="d-flex flex-wrap m-3 mx-5 gap-5 mt-5 justify-content-evenly">
        {alumnis.map((a) => {
          return <AlumniCard
            key={a._id}
            id={a._id}
            name={a.name}
            year={a.year}
            email={a.email}
            mobileNo={a.mobileNo}
            dept={a.dept}
          />;
        })}
      </div>
    </>
  );
}
