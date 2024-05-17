
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/img/project-img2.png'
const About=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        
             
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center" >
             <img data-aos="fade-down" src={img} width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">

                <h1 data-aos="fade-right" className="text-[45px] font-semibold mb-8 text-fuchsia-500 leading-normal uppercase"> About me</h1>
                <p data-aos="fade-left" className="text-left"> I am a Christian who is 
                greatly interested in solving problems, impacting lives positively
                 and making simple contributions of
                 herculean value to advance human well-being.
                I am the CEO of Chasfat Project$ whose vision 
                revolves round acheiving excellence in pursuit of 
                Classical Music, Health, Academics, Service to humanity,
                 Financial capacity , Agriculture and Technology.</p>

                <div className="flex mt-8 gap-2">
                <div className="flex  items-center justify-center">
                    <div className="flex space-x-2">
                       <button class="neno-button shadow-c=xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
                        Resume
                       </button>
                    </div>
                </div>
            </div>
            </div>
          
        </div>
       
    )

}

export default About