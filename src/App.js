import './App.css';


/** Dealing with Routes  
 * 
 * import Form from './components/Form';
import { BrowserRouter, Routes,Route,Link} from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Grid from './components/Grid'

**/

import Excercise from './components/Excercise'




function App() {
  return (
    <>

    <Excercise />
    </>
    
       
  )

}

    
   
  
    /*

     
   
    <div className="App mx-auto max-w-screen-lg p-4 flex flex-col justify-between min-h-screen">
    
    <div className="mb-4 bg-gray-300 flex  items-center font-bold text-2xl h-20 px-2 rounded-md shadow-md">
      
      <div className="p-2 bg-blue-200">Chasfat Projects </div>
      <div className="flex-grow">

      <BrowserRouter>
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/blogs" className="text-blue-500">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="blogs" element={<Blogs />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
      </div>
      <div>Block 3</div>

    </div>


    <section className="flex flex-wrap justify-center gap-4">
    <div className="flex-grow basis-64">
      <h2 className="font-bold text-2xl"> Project1:  React Form </h2>
          <Form />
        </div>
      <div className="flex-grow basis-64">
          <Form />
      </div>
      <div className="flex-grow basis-64">
          <Form />
      </div>
     
    
      
    </section>
      
      

    </div>
    
**/


export default App;
