import React from 'react'
import {Link} from 'react-router-dom';

import './combine.css';

const combine = () => {
  return (
    <div className="contents">
      Combine
      <div className="menu">
       <Link to="/sport"><button className="navigate-button">Sports Quiz</button></Link>
       <Link to="/gk"><button className="navigate-button">GK Quiz</button></Link>
       <Link to="/tnpsc"><button className="navigate-button">TNPSC Quiz</button></Link>
       <Link to="/math"><button className="navigate-button">Maths Quiz</button></Link>
    </div>
    </div>
  )
}

export default combine