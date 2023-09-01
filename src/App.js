import React from 'react'
import './App.css';
import WeatherComponent from './components/Weather.js'
import TodoApp from './components/TodoApp.js'
import Form from './components/CrudForm.js'
import Profile from './components/Profile.js'
import Board from './components/TicTacToe'
import CheckNumber from './components/Number'
import Grade from './components/StudentGrade'
import GradingSummary from './components/StudentGrade'

//using the Portal Component here 
import PortalComponent from './portal/PortalComponent'

/**
 *  
 * import { Link } from 'react-router-dom'
 * <nav>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About us </Link></li>
              <li> <Link to="/contact"> Contact </Link></li>
            </ul>
          </nav>
 */

function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <div>
          <h3> Chasfat Projects </h3>
        </div>
       <h1> Chasfat Projects working on React </h1>
       <Profile />
       <br/>
       <CheckNumber />
       <br/>
        <WeatherComponent />
        <br/>
        <TodoApp />
        <br/>
        <Form />
        <br/>
        <Board />
        {/* Portal Component used here */}
        <br/>
        <PortalComponent targetId="grading-summary-root">
          <GradingSummary grades={grades} />
        </PortalComponent>
      
      </header>
      
    </div>
     
    </>
  );
}

export default App 



