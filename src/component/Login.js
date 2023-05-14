import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, UPDATE_SCORE } from "../actionTypes/actionTypes";
import { useNavigate } from 'react-router-dom';

function Login() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    dispatch({ type: ADD_USER, username: username });
    console.log(state + "logined");
    navigate('/combine');
  };

  return (
    <div className="login-form">
      <div className="subscribe">
        <p>Hi there!</p>
        <input
          placeholder="Your Name"
          className="subscribe-input"
          name="email"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <div className="submit-btn" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default Login;
