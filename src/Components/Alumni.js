import React from "react";
import AlumniCard from "./AlumniCard";
import { useState, useEffect } from "react";
import axios from "../axios";
import Navbar from "./Navbar";
import Search from "./Search";


export default function Alumni(props) {
  const [alumnis, setAlumnis] = useState([]);
  const [loading, setLoading] = useState(false) 
  const [query, setQuery] = useState({
    name: "",
    dept:"",
    year: "",
  });

  // setting title
  document.title= "RKMGEC - Alumnis"
  // alumnis fecting
  const fetchAlumni = async (query) => {
    
    // setting loading as true
    setLoading(true)

    props.setProgress(10);

    // fetching data from backend
    const response = await axios.get(`/api/alumnis/${query}`);
    props.setProgress(50);
    const json = JSON.parse(JSON.stringify(response.data.data.alumni));
    const entries = json;

    props.setProgress(80);

    // setting fetched data in alumnis
    setAlumnis(entries);
    props.setProgress(100);

    // setting loading as false
    setLoading(false)


  };


  useEffect(() => {
    fetchAlumni("/"); // eslint-disable-next-line 
  }, []);


  return (
    <>
    {!loading && <>
    <Navbar showAlert={props.showAlert}/>

    <Search setQuery={setQuery} query={query}/>
    
      <div className="d-flex flex-wrap m-3 mx-5 gap-5 mt-5 justify-content-evenly">
        {alumnis.filter((alu) =>alu.name.toLowerCase().includes(query.name)).filter((alu)=>query.year===""?true:alu.year===query.year).filter((alu)=>query.dept===""?true:alu.dept===query.dept).map((a) => {
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
      </div></>}
    </>
  );
}
