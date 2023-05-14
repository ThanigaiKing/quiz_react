import React from "react";
import "./Home.css";
import Combine from "../combine/combine";
import HomeBody from "./HomeBody";
import Tnpsc from "../tnpsc_quiz/Tnpsc";
import Gk from "../gk_quiz/Gk";
import Sports from "../sport_quiz/Sports";
import Maths from "../maths_quiz/Maths";
import Login from "../Login";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomeContainer">
      <Router>
      <div className="HomeHeader">
        <div className="header-logo">
          <Link to="/combine" style={{textDecoration:'none'}}>
            <h1>
              Sn<span className="o-design">o</span>th
            </h1>
          </Link>
        </div>
        <div className="header-nav">
          <ul className="header-list">
            <li className="headerlisten-content">Help</li>
            <li className="headerlisten-content">About Us</li>
            <li className="headerlisten-content">Contact</li>
            <li className="headerlisten-content">Sign In</li>
            <li className="headerlisten-content">Sign Up</li>
          </ul>
        </div>
      </div>

      <div className="contents">
        
          <Routes>
            <Route exact path="/" element={<HomeBody />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/combine" element={<Combine />}></Route>
            <Route exact path="/sport" element={<Sports />}></Route>
            <Route exact path="/gk" element={<Gk />}></Route>
            <Route exact path="/tnpsc" element={<Tnpsc />}></Route>
            <Route exact path="/math" element={<Maths />}></Route>
          </Routes>
      </div>
        </Router>
    </div>
  );
};

export default Home;
