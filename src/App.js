import React from 'react'
import './App.css';
import './index.css';
import WeatherComponent from './components/Weather.js'
import TodoApp from './components/TodoApp.js'
import Form from './components/CrudForm.js'
import Profile from './components/Profile.js'
import Board from './components/TicTacToe'
import Garage from './components/Tutorial'


function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <div>
          <h3> Chasfat Projects </h3>
        </div>
     
     
       <Garage />

       <Profile />
     
       <br/>
        <WeatherComponent />
        <br/>
        <TodoApp />
        <br/>
        <Form />
        <br/>
        <Board />
  

       
      </header>
      
    </div>
     
    </>
  );
}

export default App 



