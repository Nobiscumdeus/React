import {AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn,FaInstagram,FaFacebook, FaYoutube,FaTiktok} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'


const Footer=()=>{
    return(
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Logo</span>
                    <p className="text-[16px] my-4"> Chasfat represents my passions and stands for:  CLASSICALS | HEALTH | ACADEMICS | SERVICE | FINANCE | AGRICULTURE | TECHNOLOGY </p> 
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase"> Services </h2>
                    <ul className="text-[16px] my-4"> 
                        <li className="my-2">Web Development</li>
                        <li className="my-2"> Data Science</li>
                        <li className="my-2"> Cybersecurity</li>
                        <li className="my-2">Telemedicine</li>
                        <li className="my-2">Music training</li>
                        <li className="my-2"> Piano </li>
                        <li className="my-2">Science Courses tutorials </li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase"> Contact </h2> 
                  <p className="text-[16px] my-4"> Email: chasfatprojects@gmail.com</p>
                  <p> <a className="text-decoration-underline text-fuchsia-800 border-underline" href="https://chasfatprojects.netlify.app" target="_blank">Check my site </a> </p>
                </div>
           
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow me
                <div className="flex flex-wrap space-x-3">
                <a href="https://www.linkedin.com/in/olumide-adeola-745864222" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FaLinkedinIn className="text-[28px]" />
                        </a>
                        <a href="https://github.com/Nobiscumdeus" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="https://twitter.com/Chasfat_Project?t=xVU_-2kpkqjxcQgxASZ_Hw&s=09" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FiTwitter className="text-[28px]" />
                        </a>
                        <a href="https://instagram.com/chasfat_projects" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FaInstagram className="text-[28px]" />
                        </a>
                        <a href="https://www.tiktok.com/@chasfat?_t=8mORBebKpHi&_r=1"  target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FaTiktok className="text-[28px]" />
                        </a>
                        <a href="https://www.facebook.com/oyindamola.adeola.1656" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FaFacebook className="text-[28px]" />
                        </a>
                        <a href="https://www.youtube.com/@chasfatprojects"  target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2">
                            <FaYoutube className="text-[28px]" />
                        </a>

                    </div>
                </h2>

               
               
              

            </div>
        </footer>
    )
}

export default Footer 