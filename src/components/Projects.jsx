import  img1 from '../assets/img/project-img1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
             <h2  data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"> Projects </h2>
           
            <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20" >

                <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
                <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
                <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
                <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
            </div>
        </div>
    )
}

export default Projects