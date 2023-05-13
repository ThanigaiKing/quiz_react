import React from 'react'
import ReactDom from "react-dom/client"
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Sport from '../sport_quiz/sports'
import Gk from '../gk_quiz/gk'
import Tnpsc from '../tnpsc_quiz/Tnpsc'
import Maths from '../maths_quiz/maths'
const combine = () => {
  return (
    <div className="HomeContainer">
      {/* <Router>
       <Link to="/sport"><button className="welcome-button">Sports Quiz</button></Link>
       <Link to="/gk"><button className="welcome-button">GK Quiz</button></Link>
       <Link to="/tnpsc"><button className="welcome-button">TNPSC Quiz</button></Link>
       <Link to="/math"><button className="welcome-button">Maths Quiz</button></Link>
       <Routes>
        <Route exact path='/sport' element={<Sport/>}></Route>
        <Route exact path='/gk' element={<Gk/>}></Route>
        <Route exact path='/tnpsc' element={<Tnpsc/>}></Route>
        <Route exact path='/math' element={<Maths/>}></Route>
       </Routes>
        </Router> */}
    </div>
  )
}

export default combine