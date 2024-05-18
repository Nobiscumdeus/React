
import AOS from 'aos';
import 'aos/dist/aos.css';


import img from '../assets/img/project-img2.png';
import img1 from '../assets/img/IMG_2242.png';


const About=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        
             
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center" >
             <img data-aos="fade-down" src={img1} width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">

                <h1 data-aos="fade-right" className="text-[45px] font-semibold mb-8 text-fuchsia-500 leading-normal uppercase"> About me</h1>
                <p data-aos="fade-left" className="text-left"> I'm a multifaceted individual with a passion for both science and art. As a dedicated physician, I find fulfillment in 
                healing and caring for others, utilizing my medical expertise to make a positive impact on people's lives. <br/><br/>

In addition to my work in medicine, I'm also a skilled programmer, adept at 
harnessing technology to solve complex problems and streamline processes. 
Whether it's developing innovative healthcare solutions or crafting efficient software applications, I thrive on the challenge of coding and creating.
<br/><br/>
Beyond my professional pursuits, I find solace and joy in music. As a pianist, I express my creativity and emotions through the elegant melodies and harmonies of the piano. Whether performing classical masterpieces or composing my own pieces, music serves as a source of inspiration and personal fulfillment in my life.
<br/><br/>
In all aspects of my endeavors, I am driven by a desire to learn, grow, and make a meaningful difference in the world. With a curious mind, compassionate heart, and artistic soul, I strive to embrace the richness of life's experiences and contribute to the betterment of society.</p>

                <div className="flex mt-8 gap-2">
                <div className="flex  items-center justify-center">
                    <div className="flex space-x-2">
                       <button class="neno-button shadow-c=xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
                        Resume
                       </button>
                       <a className="neno-button shadow-c=xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden" href="/src/assets/images/Olumide CV.pdf" download > Download CV</a>

                    </div>
                </div>
            </div>
            </div>
          
        </div>
       
    )

}

export default About