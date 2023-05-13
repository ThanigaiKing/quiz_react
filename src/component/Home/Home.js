import React from 'react'
import './Home.css'
import Combine from '../combine/combine'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeHeader">
        <div className="header-logo">
          {/* <img src={Logo} alt="error"/> */}
          <h1>Sn<span className="o-design">o</span>thy</h1>
        </div>
        <div className="header-nav">
          <ui className="header-list">
            <li className="headerlisten-content">Help</li>
            <li className="headerlisten-content">About Us</li>
            <li className="headerlisten-content">Contact</li>
            <li className="headerlisten-content">Sign In</li>
            <li className="headerlisten-content">Sign Up</li> 
          </ui>
        </div>
      </div>
      <div className="HomeBody">
        <div className="HomeBodyContent">
           <h1>Master Data Manager</h1>
           <h4>purpose of app is manage the data with calculation and without writting in notes</h4>  
        </div>
        <Router>
       <Link to="/combine"><button className="welcome-button">Welcome to Snothy</button></Link>
       <Routes>
        <Route exact path='/combine' element={<Combine/>}></Route>
       </Routes>
        </Router>
      </div>
    </div>
  )
}

export default Home