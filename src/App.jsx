import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Dashboard from "./components/ChasfatAcademy/Dashboard"
import Header from "./components/ChasfatAcademy/Header"
import Quiz from "./components/ChasfatAcademy/Quiz"
import Result from './components/ChasfatAcademy/Result'

function App(){

  return(
    <>
    <div className='antialiased w-full h-screen  '>
        
      
      <Router>
      <Header />
                <Routes>

                <Route path="/" element={<Dashboard />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Result/>} /> 
               
               
                </Routes>
         
               
               

      </Router>
        
           
         
      
    

    </div>
    
    
    
    </>
  )
}

export default App