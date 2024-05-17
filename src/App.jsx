import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  },3000)


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


