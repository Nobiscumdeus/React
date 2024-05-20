import React from 'react';
import { FaDatabase, FaLaptop, FaUserSecret, FaMusic } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';




const Services = () => {
        AOS.init({
                easing:'ease-out-quart',
                delay:0,
                duration:750,
            })
            

  return (
    <div id="services" className="py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="service bg-gray-800 rounded-lg p-8 text-center text-white hover:bg-fuchsia-800 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

          <FaDatabase className="text-pink-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-4">Data Science & Machine Learning</h2>
          <p >I work on data science and machine learning projects.</p>
          <p >I use cutting-edge software and programming languages such as Python and R.</p>
        </div>

        <div data-aos="flip-left" className="service bg-gray-800 rounded-lg p-8 text-center text-white hover:bg-fuchsia-800 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

          <FaLaptop className="text-pink-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-4">Web/App Development</h2>
          <p>I am proficient in both front-end and back-end technologies for web applications.</p>
          <p>I provide services in debugging source codes to fix loopholes.</p>
        </div>

        <div data-aos="flip-right" className="service bg-gray-800 rounded-lg p-8 text-center text-white hover:bg-fuchsia-800 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

   
          <FaUserSecret className="text-pink-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-4">Cyber Security</h2>
          <p>I use my skills as an ethical hacker to provide security to computer infrastructures.</p>
          <p>I am proficient with Linux and Windows Operating Systems.</p>
        </div>

        <div data-aos="flip-up" className="service bg-gray-800 rounded-lg p-8 text-center text-white hover:bg-fuchsia-800 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

          <FaMusic className="text-pink-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-4">Music</h2>
          <p>I have a special interest in western classical music and am adept at Piano and Organ.</p>
          <p>I use music as relaxation after coding and offer musical instrument training.</p>
        </div>
      </div>
      </div>
    
  );
};

export default Services;
