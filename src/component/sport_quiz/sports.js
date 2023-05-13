/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import Data from './sportdata'
import './sports.css'
const sports = () => {
  const [questionindex,setQuestionindex] = useState(0);
  const [score,setScore] = useState(0);
  const [showscore,setShowScore]=useState(false);
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
  } 
      console.log(score);
  return (
    <div className="HomeContainer">
    <div className="quiz-container">
      {showscore?<h1 className='quiz-score'>Your score : {score}</h1>:
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

export default sports