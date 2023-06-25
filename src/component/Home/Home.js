import React, { useState } from "react";
import "./Home.css";
import Combine from "../combine/combine";
import HomeBody from "./HomeBody";
import Tnpsc from "../tnpsc_quiz/Tnpsc";
import Gk from "../gk_quiz/gk";
import Sports from "../sport_quiz/sports";
import Maths from "../maths_quiz/maths";
import Login from "../Login";
import { useSelector,  useDispatch } from "react-redux";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  const store = useSelector((store) => store);
  console.log(store);

  const [showScoreCard,setShowScoreCard]=useState(false);

  function toggle(){
    setShowScoreCard(prev=> !prev);
  }

  return (
    <div className="HomeContainer">
      <Router>
        <div className="HomeHeader">
          <div className="header-logo">
            <Link to="/combine" style={{ textDecoration: "none" }}>
              <h1>
                Sn<span className="o-design">o</span>th
              </h1>
            </Link>
          </div>
          <div className="header-nav">
            <ul className="header-list">
              <li className="headerlisten-content">&nbsp;&nbsp; </li>
              <li className="headerlisten-content">&nbsp;&nbsp; </li>
              {store.name !== " " && (
                <div>
                  <li className="headerlisten-content"><b>{store.name}</b></li>
                  <li className="headerlisten-content" onClick={toggle}>View Scores</li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li className="headerlisten-content">Sign Out</li>
                  </Link>{" "}
                </div>
              )}
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
      <div className={`score-card ${showScoreCard?"card-visible":""}`}>
        <div>Score</div>
        <div>GK: {store.score.gk}</div>
        <div>Math: {store.score.math}</div>
        <div>Sport: {store.score.sport}</div>
        <div>TNPSC: {store.score.tnpsc}</div>
      </div>
    </div>
  );
};

export default Home;
