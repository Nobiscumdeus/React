import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Example icon from react-icons
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/img/IMG_20230409_182824_803.png'
import img2 from '../images/pexels-fabricio-trujillo-60626.png'
import img3 from '../images/pexels-neo-2653362.jpg'

const PortfolioCard = ({ title, description, imageUrl, link }) => {
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
 
  return (

    <div data-aos="flip-right" className="max-w-sm rounded overflow-hidden shadow-lg">

  
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className=" text-fuchsia-800 font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
      {link && (
        <div className="px-6 pt-4 pb-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
            Check out
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

const PortfolioSection = () => {

  const portfolioItems = [
    {
      title: "Web Development",
      description: "The Web app showcases some fully-fledged web projects created with cutting-edge web technologies ",
      imageUrl: img2,

   
      link: "../images/pexels-neo-2653362.jpg"
    },
    {
      title: "Technical Writing & Blogging",
      description: "Check out my blog posts on a range of topics which includes programming and other topics you can benefit from in no mean way.",
      imageUrl: "../images/pexels-fabricio-trujillo-60626.png",

      link: "https://chasfatprojects.hashnode.dev"
    },
    // Add more portfolio items as 
    {
        title: "Other Projects",
        description: "This link takes you to other cutting edge projects developed with various technologies.",
        imageUrl:"images/banner-bg.png",
        
        link: "https://projects-a0js.onrender.com"
      },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={index} {...item} />
      ))}
    </div>
  );
};

export default PortfolioSection;
