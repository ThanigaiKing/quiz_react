import Sports from './component/sport_quiz/sports.js'
import './App.css';
import Home from './component/Home/Home'
import Maths from './component/maths_quiz/maths'
import Gk from './component/gk_quiz/gk'
import Tnpsc from './component/tnpsc_quiz/Tnpsc'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Home/>
      <Sports/>
      <Maths/>
      <Gk/>
      <Tnpsc/>
    </div>
  );
}

export default App;
