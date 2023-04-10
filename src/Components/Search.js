import React from "react";
import "../Assets/Css/Search.css"

const Search = ({query, setQuery }) => {
  const handelChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   const temp = alumnis
  //   setAlumnis(temp); // eslint-disable-next-line
  // }, [query]);

  return (
    <>
      {/* alumnis Filter */}
      <form>
        <div className="d-flex flex-wrap m-5 justify-content-evenly">
            <input
              value={query.name}
              onChange={handelChange}
              style={{width: "400px"}}
              className="form-input"
              type="text"
              name="name"
              placeholder="Write Alumni Name"
              aria-label="default input example"
            />
            <select
              name="year"
              onChange={handelChange}
              style={{width: "400px"}}
              className="form-input"
              aria-label="Default select example"
            >
              <option value="">Select Year</option>
              <option value="2016-2020">2016-2020</option>
              <option value="2017-2021">2017-2021</option>
              <option value="2018-2022">2018-2022</option>
            </select>

            <select
              name="dept"
              onChange={handelChange}
              style={{width: "400px"}}
              className="form-input"
              aria-label="Default select example"
            >
              <option>Select Department</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="CE">CE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
            </select>
        </div>
      </form>
    </>
  );
};

export default Search;
