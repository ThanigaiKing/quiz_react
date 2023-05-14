import React from "react";
import "./Home.css";
import {Link } from "react-router-dom";


function HomeBody() {
  return (
    <div className="HomeBody">
      <div className="HomeBodyContent">
        <h1>Team 6 QUIZ APP</h1>
        <h4>
          purpose of app is to calculate user scores over different domains
        </h4>
      </div>
      <Link to="/login">
            <button className="welcome-button">Enter Snothy</button>
      </Link>
    </div>
  );
}

export default HomeBody;
