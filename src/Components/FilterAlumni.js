import React from "react";
import { Link, useLocation } from "react-router-dom";

const FilterAlumni = () => {
  let location = useLocation();

  return (
    <div>
      <div className="year-filter">
        {/* Nav bar */}
        <nav
          id="navbar flex-wrap"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <ul>
            <Link
              className={`btn btn-outline-info ${
                location.pathname === "/alumni" ? "active" : ""
              }`}
              to="/"
            >
              2017-2021
            </Link>
          </ul>
          <ul>
            <Link
              className={`btn btn-outline-info ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              2017-2021
            </Link>
          </ul>
          <ul>
            <Link
              className={`btn btn-outline-info ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              2017-2021
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilterAlumni;
