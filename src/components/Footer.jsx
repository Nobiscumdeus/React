import {FaGithub} from 'react-icons/fa';
import { FaLinkedinIn,FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const Footer=()=>{
    return(
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Logo</span>
                    <p className="text-[16px] my-4">Lorem Ipsum dolor consecteur afirm ationlixationn here </p> 
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase"> Services </h2>
                    <ul className="text-[16px] my-4"> 
                        <li className="my-2">Web Development</li>
                        <li className="my-2"> Data Science</li>
                        <li className="my-2"> Cybersecurity</li>
                        <li className="my-2">Telemedicine</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase"> Contact </h2> 
                  <p className="text-[16px] my-4"> Email: chasfatprojects@gmail.com</p>
                  <p className="text-[16px] my-4"> Phone : +234 80807605</p> 
                </div>
           
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow me
                <div className="flex space-x-4">
                <a href="" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                        <FaGithub />
                    </a>
                    <a href="" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                        <FaLinkedinIn />
                    </a>
                    <a href="" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                        <FiTwitter />
                    </a>
                    <a href="" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">
                        <FaInstagram />
                    </a>
                    </div>
                </h2>

               
               
              

            </div>
        </footer>
    )
}

export default Footer 