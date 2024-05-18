import  img1 from '../assets/img/project-img1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioSection from './Portfolio'

const Projects=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
 
             <h2  data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"> Projects </h2>
           
            
            <PortfolioSection />


           
        </div>
       
    )
}

export default Projects