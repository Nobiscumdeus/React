import React from 'react'
import {FaPhone,FaEnvelope,FaMapMarkerAlt,FaFacebookF,FaTwitter,FaInstagram,FaGithub} from "react-icons/fa"

export default function ContactForm(){
    return(
       
        <div className="antialiased bg-gray-100 min-h-screen flex w-full justify-center items-center ">

                <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-600 w-full max-w-4xl p-8 rounded-xl shadow-lg text-gray-600 sm:p-12 overflow-hidden">

                   <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="tracking-wide">Contact Us</h1>
                            <p className="pt-2 text-cyan-100 text-sm"> Anatomy can be defined as the stufy of structure of the body in relation to its function
                            The subject of anatomy can be studied under different concepts such as Regional</p> 
                        </div>
                        <div className="flex flex-col space-y-4 text-teal-300 text-xl">
                            <div className="inline-flex space-x-2 items-center"><FaPhone className="text-teal-300 text-xl"/><span> + {123} 456 7890</span></div>
                            <div className="inline-flex space-x-2 items-center"><FaEnvelope className="text-teal-300 text-xl"/><span> contact@xyzwebsite.com</span></div>
                            <div className="inline-flex space-x-2 items-center"><FaMapMarkerAlt className="text-teal-300 text-xl"/><span> 11, Street 342, Abcd New York</span></div>
                        </div>
                        <div className="flex space-x-4 text-lg mt-4 text-teal-300">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <FaTwitter />

                            </a>
                            <a href="#">
                                <FaInstagram />

                            </a>
                            <a href="#">
                                <FaGithub />
                            </a>
                        </div>
                   </div>


                   <div className="relative">
                    <div className="absolute w-40 h-40 bg-teal-400 rounded-full  -right-28 -top-28"></div>
                    <div className="absolute w-40 h-40 bg-teal-400 rounded-full  -left-28 -bottom-16"></div>
                            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 md:w-80">
                                <form action="#" className="flex flex-col space-y-4">

                                    
                                    <div>
                                    <label htmlFor="">Your Name</label>
                                        <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                    </div>
                                    
                                
                                    
                                    <div>
                                    <label htmlFor=""> Email Address </label>
                                        <input type="email" placeholder=" Email Address"
                                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                    </div>

                                    
                                    <div>
                                    <label htmlFor=""> Message </label>
                                        <textarea rows="4" placeholder="Email Address"
                                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" ></textarea>
                                    </div>
                                    <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                                        Send Message
                                    </button>


                                </form>

                            </div>
                   </div>

                </div>
           
        </div>
    
       
    )
}