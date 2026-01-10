import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPortfolio from './components/ProjectPortfolio'; // Import your new component
import { BallTriangle } from 'react-loader-spinner';
import './index.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced from 5000 to 2000
  }, []);

  return (
    <Router>

      <ScrollToTop />
      
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle 
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <div className="bg-slate-900">
              <Nav />
              <Banner />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </div>
          } />
          
          {/* Projects Portfolio Route */}
          <Route path="/projects-portfolio" element={
            <div className="min-h-screen">
             
              <ProjectPortfolio />
              
            </div>
          } />
        </Routes>
      )}
    </Router>
  );
}

export default App;

/*
import { useState,useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Nav  from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'
import './App.css'
import { BallTriangle } from 'react-loader-spinner';



function App() {

const [loading,setLoading]=useState(false)
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },5000)


},[])
  return (
    <>
      
       
         <>
         {
          loading ? 
          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle 
          height={100}
          width={100}
          radius={5}
          color="#d946ef"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
          
          
          />
          </div>

          :
          <div className="bg-slate-900">
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
           </div>
         }
         </>
          
         

      
    </>
  )
}

export default App

*/

