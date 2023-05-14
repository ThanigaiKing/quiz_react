import React from "react";
import "./Home.css";
import {Link } from "react-router-dom";


function HomeBody() {
  return (
    <div className="HomeBody">
      <div className="HomeBodyContent">
        <h1>Master Data Manager</h1>
        <h4>
          purpose of app is manage the data with calculation and without
          writting in notes
        </h4>
      </div>
      <Link to="/login">
            <button className="welcome-button">Welcome to Snothy</button>
      </Link>
    </div>
  );
}

export default HomeBody;
