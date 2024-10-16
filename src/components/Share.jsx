import  { useState } from 'react';
import './Share.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube,  FaTiktok,FaLink,FaInstagram } from 'react-icons/fa';
import { GiShare } from 'react-icons/gi';
import { AiFillGithub } from 'react-icons/ai';

const Share = () => {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <>
        <div className='flex flex-col items-center'> 

         <h2 className="text-[22px] font-bold text-fuchsia-800 py-2 uppercase">
                        Follow me
                       
        </h2>
        <div className={`menu ${active ? 'active' : ''}`}>
            <div className="toggle" onClick={toggleMenu}>
               
                <GiShare />
            </div>
            <li style={{ '--i': 0, '--clr': 'fuchsia' }}>
                <a href="https://www.facebook.com/oyindamola.adeola.1656" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer">
                    
                    <FaFacebookF />
                </a>
            </li>
            <li style={{ '--i': 1, '--clr': 'fuchsia' }}>
                <a href="https://twitter.com/Chasfat_Project?t=xVU_-2kpkqjxcQgxASZ_Hw&s=09" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" rel="noopener noreferrer">
                   
                    <FaTwitter />
                </a>
            </li>
            <li style={{ '--i': 2, '--clr': 'fuchsia' }}>
                <a href="https://www.linkedin.com/in/olumide-adeola-745864222" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer">
                    
                    <FaLinkedinIn />
                </a>
            </li>
            <li style={{ '--i': 3, '--clr': 'fuchsia' }}>
                <a href="https://www.youtube.com/@chasfatprojects" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer">
                   
                    <FaYoutube />
                </a>
            </li>
            <li style={{ '--i': 4, '--clr': 'fuchsia' }}>
                <a href="https://instagram.com/chasfat_projects" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2"  rel="noopener noreferrer">
                   
                    <FaInstagram/>
                    
                </a>
            </li>
            <li style={{ '--i': 5, '--clr': 'fuchsia' }}>
                <a href="https://www.superprof.ng/dashboard.html/my-profile/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer">
                 
                    <FaLink />
                </a>
            </li>
            <li style={{ '--i': 6, '--clr': 'fuchsia' }}>
                <a href="https://www.tiktok.com/@chasfat?_t=8mORBebKpHi&_r=1" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer" >
                   
                    <FaTiktok />
                </a>
            </li>
            <li style={{ '--i': 7, '--clr': 'fuchsia' }}>
                <a href="https://github.com/Nobiscumdeus" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full md:w-1/3 lg:w-1/4 glow p-2" target="_blank" rel="noopener noreferrer">

                    <AiFillGithub />
                </a>
            </li>
        </div>

        </div>
        </>
    );
};

export default Share;
