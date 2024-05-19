import {AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn,FaInstagram,FaFacebook, FaYoutube,FaTiktok} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SlidingText from './SlidingText';
import TabChange from './TabChange';
import img from '../assets/img/IMG_20230409_182824_803.png'

const Banner=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <div data-aos='fade-down' className="lg:px-30 md:px-22 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center" >
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">

<<<<<<< HEAD
                <h1 data-aos="fade-right" className="sm:text-[25px] md:text-[35px] text-[35px] font-semibold mb-8 leading-normal uppercase"> Welcome to <span className="text-fuchsia-500"> My Portfolio Site </span></h1>
=======
                <h1 data-aos="fade-right" className="sm:text-[25px] md:text-[40px] text-[48px] font-semibold mb-8 leading-normal uppercase"> Welcome to <span className="text-fuchsia-500"> My Portfolio Site </span></h1>
>>>>>>> 999ffc3977d08274745bb358d80bc40fd6667582
                
                <p data-aos="zoom-out" className="text-left">
                
                    <>
                    <SlidingText />
                   
                    </>
                    <br/>
                  
                </p>
                <p data-aos="zoom-in" className="text-left">
                <>
                     <TabChange />
                    </>

                </p>
                   
                

                <div className="flex mt-8 gap-2">
                <div className="flex  items-center justify-center">
                    <div className="flex space-x-2">
                        <a href="https://www.linkedin.com/in/olumide-adeola-745864222" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]" />
                        </a>
                        <a href="https://github.com/Nobiscumdeus" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="https://twitter.com/Chasfat_Project?t=xVU_-2kpkqjxcQgxASZ_Hw&s=09" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FiTwitter className="text-[28px]" />
                        </a>
                        <a href="https://instagram.com/chasfat_projects" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]" />
                        </a>
                        <a href="https://www.tiktok.com/@chasfat?_t=8mORBebKpHi&_r=1"  target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaTiktok className="text-[28px]" />
                        </a>
                        <a href="https://www.facebook.com/oyindamola.adeola.1656" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaFacebook className="text-[28px]" />
                        </a>
                        <a href="https://www.youtube.com/@chasfatprojects"  target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaYoutube className="text-[28px]" />
                        </a>

                    </div>
                </div>
            </div>
            </div>
           <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
        </div>
    )

}

export default Banner