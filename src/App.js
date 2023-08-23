import './App.css';
import WeatherComponent from './components/Weather.js'
import TodoApp from './components/TodoApp.js'
import Form from './components/CrudForm.js'
import Profile from './components/Profile.js'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
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
