/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import Data from "./mathsdata";

import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, UPDATE_SCORE } from "../../actionTypes/actionTypes";

const Maths = () => {
  const [questionindex, setQuestionindex] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const data = Data[questionindex];
  function selectoption(i) {
    console.log("hi");
    if (data.answer === i) {
      setScore(score + 1);
    }
    const nextq = questionindex + 1;
    if (nextq < Data.length) {
      setQuestionindex(questionindex + 1);
    } else {
      setShowScore(true);
    }
    dispatch({ type: UPDATE_SCORE, sub: 'math', mark: score });
    // console.log(state + " math score");
    console.log("set scor is "+score);
  }
  return (
    <div className="contents">
        {/* <div className="left-arrow">left</div> */}
      <div className="quiz-container">
        {showscore ? (
          <h1 className="quiz-score">Your score : {state.score.math}</h1>
        ) : (
          <div className="quiz-data-container">
            <div className="quiz-question-space">
              <h3 className="quiz-question">{data.question}</h3>
            </div>
            <hr />
            <div className="quiz-options-wrapp">
              <ul class="quiz-container-ul">
                {data.options.map((items, i) => {
                  return (
                    <li className="quiz-option" onClick={() => selectoption(i)}>
                      {items}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* <div className="righ-arrow">right</div> */}
    </div>
  );
};

export default Maths;
