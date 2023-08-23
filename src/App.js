import './App.css';
import WeatherComponent from './components/Weather.js'
import TodoApp from './components/TodoApp.js'
import Form from './components/CrudForm.js'
import Profile from './components/Profile.js'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <div>
          <h3> Chasfat Projects </h3>
          <nav>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About us </Link></li>
              <li> <Link to="/contact"> Contact </Link></li>
            </ul>
          </nav>
        </div>
       <h1> Chasfat Projects working on React </h1>
       <Profile />
       <br/>
        <WeatherComponent />
        <br/>
        <TodoApp />
        <br/>
        <Form />
      
      </header>
      
    </div>
     
    </>
  );
}

export default App;
