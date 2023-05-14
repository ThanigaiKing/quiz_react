/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import Data from './sportdata'
import './sports.css'

import { useDispatch, useSelector } from "react-redux";
import { UPDATE_SCORE } from "../../actionTypes/actionTypes";

const Sports = () => {
  const [questionindex,setQuestionindex] = useState(0);
  const [score,setScore] = useState(0);
  const [showscore,setShowScore]=useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const data=Data[questionindex];

  function selectoption(i) {
    console.log("hi");
    if (data.answer === i) {
      setScore(score+1);
    }
    const nextq=questionindex+1;
    if(nextq<Data.length){
    setQuestionindex(questionindex+1);
    }
    else{
       setShowScore(true);
      }
      dispatch({ type: UPDATE_SCORE, sub: 'sport', mark: score });
      console.log(state + " sport score");
      console.log("set scor is "+score);
  } 
      // console.log(score);
  return (
    <div className="contents">
    <div className="quiz-container">
      {showscore?<h1 className='quiz-score'>Your score : {state.score.sport}</h1>:
        (<div className="quiz-data-container">
          <div className='quiz-question-space'>
        <h3 className='quiz-question'>{data.question}</h3>
        </div>
        <hr/>
        <div className='quiz-options-wrapp'>
        <ul class="quiz-container-ul">
        {
          data.options.map((items,i)=>{
            return <li className="quiz-option" onClick={()=>selectoption(i)}>{items}</li>
          })
        }
        </ul>
        </div>
        </div>)}
    </div>
    </div>
  )
}

export default Sports