import React, { useState } from "react";
import "../App.css";

const Search = ({ handleSearch }) => {
  const [city, setCity] = useState("");
  const [work, setWork] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleWorkChange = (e) => {
    setWork(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city, work);
  };

  return (
    <div className="containersearch">
      <div className="image-slider">
        <img src="back.png" alt="slide" />
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Find City"
          value={city}
          onChange={handleCityChange}
        />
        <input
          type="text"
          placeholder="What kind of work needed"
          value={work}
          onChange={handleWorkChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Search;
