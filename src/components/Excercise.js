import React from 'react'
import { BiSearch ,BiCalendar} from "react-icons/bi";
import {FaTachometerAlt,FaUsers,FaTasks,FaEnvelope,FaUserCheck,FaBell,FaUser,FaUserPlus,FaEye,FaBox,FaRocket,FaTrash,FaPencilAlt,FaEllipsisV,FaListOl,FaClock,FaLayerGroup} from "react-icons/fa"
import { HiEye,HiTrash,HiPencil,HiEllipsisVertical,HiClock} from 'react-icons/hi'

const styles={
    sidebar:{
        '@media(max-width:768px)':{
            display:'none',
        },
        '@media(max-width:480px)':{
            display:'none'
        }
    }
}
export default function Excercise(){
    return (
       <div className="px-6 py-6 bg-gradient-60deg bg-gradient-to-br from-violet-200 via-blue-200 to-blue-700 min-h-screen">
        

            <div className=" xsMax:scale-[0.9] bg-white min-h-[600px] min-h-80% rounded-md shadow-md grid grid-cols-12">

                {/*** Side bar  */}
                   
                    <div className="col-span-2 bg-gray-50 max-h-full rounded-md w-full grid grid-rows-12 gap-8">

                        <div className="row-span-4 flex flex-cols items-center justify-center ">
                            
                                
                                    <div className="self-start ml-4 w-full py-5">
                                        <h2 className="mb-5 font-semibold text-violet-700 text-2xl flex space-x-2"><FaLayerGroup className="mt-2" /><span> Tasky </span> </h2> 

                                        <ul className="mt-10 space-y-4 w-full">
                                            
                                            <li><a href="#" className="text-center block bg-blue-700 text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold flex justify-start items-center space-x-2"><FaTachometerAlt className="text-2xl" /><span>Dashboard</span></a></li>
                                            <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0 flex justify-start items-center space-x-2"><FaTasks className="text-2xl" /><span>Tasks</span></a></li>
                                            <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0 flex justify-start items-center space-x-2 "><BiCalendar className="text-2xl"/> <span>Calendar</span></a></li>
                                            
                                            <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0 flex justify-start items-center space-x-2"><FaUsers className="text-2xl" /><span>Members</span></a></li>

                                        </ul> 

                                    </div>

                              
                                   
                                    
                               

                               

                        

                           

                        </div>
                        
                        <div className="row-span-8 flex flex-rows p-6 justify-end items-end ">
                          
                                <div className="relative w-full h-full  ">

                                    {/*** Box  */}
                                    
                                   
                                    <div className="hover:bg-blue-300 hover:cursor-pointer absolute  bottom-0 left-0 p-4 text-sm bg-gradient-to-t from-blue-600 to-fuchsia-300 border-t-0 border-r-0 outline-none rounded-md">
                                    <FaRocket className="absolute top-0 right-0 text-5xl mb-5 text-blue-700 font-semibold"/>
                                        <p className="text-white mt-7 ">Upgrade to Pro ! </p> 

                                    </div>

                                </div>
                           
                        </div>


                    </div>

                    {/**** main Content  */}

                    <div className="col-span-10  min-h-full w-full grid grid-rows-12 py-2">
                            <div className="row-span-1 flex flex-cols items-center justify-between max-h-[50px] ">

                                <div className="mx-2 relative w-72">
                                    <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 font-bold text-2xl" />
                                    <input type="text" className="px-2 py-2 bg-slate-50 border rounded-md placeholde-gray-400 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search tasks" />
                                </div>
                                <ul className="list-none inline">
                                    <li className="inline-block mx-2 font-semibold"><a className="flex justify-start items-center space-x-2"><FaEnvelope className="text-gray-400 hover:cursor-pointer text-2xl" /><span></span></a></li> 
                                    <li className="inline-block mx-2 font-semibold"><a className="flex justify-start items-center space-x-2"><FaBell className="text-gray-400 hover:cursor-pointer text-2xl" /><span></span></a></li>
                                    <li className="inline-block mx-2 font-semibold"><a className="flex justify-start items-center space-x-2"><FaUsers className="hover:cursor-pointer text-orange-300 text-2xl" /><span></span></a></li>
                                </ul>

                            </div>
                            
                            <div className="row-span-1 flex flex-cols items-center justify-between flex-wrap max-h-[50px] ">

                                        <div>
                                            <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Preview</a>
                                            <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Sort</a>
                                            <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Filter</a>
                                        </div>
                                        <div className="flex flex-cols justify-around flex-wrap px-4">
                                            <button className="px-4 py-2"><FaUsers className="text-2xl"/></button>
                                            <button className="broken-button outline-dash-array bg-white hover:bg-gray-100 rounded-full px-4 outline-none py-2 font-bold border mt-2 w-10 h-10 outline-dash-array border-dashed">+</button>
                                            <button className="bg-blue-800 text-white rounded-md m-2 px-4 py-2 hover:bg-blue-400">+ Add task</button>
                                        </div>


                            </div>
                            <div className="row-span-1 flex flex-cols flex-wrap justify-between px-2 max-h-[50px]  ">
                                <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4">In Progress <span>(2)</span> </button>
                                <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4"> Completed Task <span>(4)</span> </button>
                                <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4"> Over-Due <span>(5)</span> </button>

                            </div>



                            <div className=" row-span-9 grid grid-cols-12 gap-x-12 wrap justify-between h-full">
                                
                                <div className="col-span-4 h-1/3 my-10 ">

                                    <div className="flex justify-around w-full">

                                        <button className="rounded-md bg-red-200 text-red-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
                                        <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>6:00 PM</span></button>
                                        <button className="rounded-md bg-fuchsia-200 text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


                                    </div>
                                      
                                        <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">
               
                                            <div className="flex justify-between">
                                                    <h1 className="font-semibold text-xl"> User Flow</h1>
                                                    <i><FaEllipsisV className="mt-2"/></i>
                                            </div>
                                            <p>
                                                Designing a dashboard involves creating a visual interface that...<br/>
                                                <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>3</span></button>
                                            </p>
                                            <div className="flex justify-between">
                                                <span><FaUsers className="text-2xl"/> </span> 
                                                <span className="flex space-x-4"> <FaEye className="text-xl text-blue-400" /> <HiTrash className="text-xl text-blue-400" /> <FaPencilAlt className="text-blue-400 text-xl font-semibold" /> </span>
                                            </div>
                                       
                                                            
                                        </div>


                                </div>
                                <div className="col-span-4 h-1/3 my-10 ">

                                <div className="flex justify-around w-full">

                                    <button className="rounded-md bg-red-200 text-red-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
                                    <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>6:00 PM</span></button>
                                    <button className="rounded-md bg-fuchsia-200 text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


                                </div>
                                
                                    <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">

                                        <div className="flex justify-between">
                                                <h1 className="font-semibold text-xl"> User Flow</h1>
                                                <i><FaEllipsisV className="mt-2" /></i>
                                        </div>
                                        <p>
                                            Designing a dashboard involves creating a visual interface that...<br/>
                                            <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>3</span></button>
                                        </p>
                                        <div className="flex justify-between">
                                            <span><FaUsers className="text-2xl"/> </span> 
                                            <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className="text-xl font-semibold" /> </span>
                                        </div>
                                
                                                        
                                    </div>


                                </div>
                                <div className="col-span-4 h-1/3 my-10 ">

                                    <div className="flex justify-around w-full">

                                        <button className="rounded-md bg-red-200 text-red-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
                                        <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>22/06/23</span></button>
                                        <button className="rounded-md bg-fuchsia-200 text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


                                    </div>

                        <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">

                            <div className="flex justify-between">
                                    <h1 className="font-semibold text-xl"> User Flow</h1>
                                    <i><FaEllipsisV className="mt-2"/></i>
                            </div>
                            <p>
                                Designing a dashboard involves creating a visual interface that...<br/>
                                <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>3</span></button>
                            </p>
                            <div className="flex justify-between">
                                <span><FaUsers className="text-2xl"/> </span> 
                                <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className="text-xl font-semibold" /> </span>
                            </div>

                                            
                        </div>


                        </div>


                        <div className="col-span-4 h-1/3 my-10 ">

                        <div className="flex justify-around w-full">

                            <button className="rounded-md bg-orange-200 text-orange-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
                            <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>Tomorrow</span></button>
                            <button className="rounded-md text-teal-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


                        </div>

                            <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">

                                <div className="flex justify-between">
                                        <h1 className="font-semibold text-xl"> User Flow</h1>
                                        <i><FaEllipsisV className="mt-2"/></i>
                                </div>
                                <p>
                                    Designing a dashboard involves creating a visual interface that...<br/>
                                    <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>4</span></button>
                                </p>
                                <div className="flex justify-between">
                                    <span><FaUsers className="text-2xl"/> </span> 
                                    <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className="text-xl" /> </span>
                                </div>

                                                
                            </div>


                        </div>
                                
                        <div className="col-span-4 h-1/3 my-10 ">

                        <div className="flex justify-around w-full">

                            <button className="rounded-md text-green-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
                            <button className="rounded-md bg-fuchsia-200 text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>Tomorrow</span></button>
                            <button className="rounded-md text-teal-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


                        </div>
                        
                            <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">

                                <div className="flex justify-between">
                                        <h1 className="font-semibold text-xl"> User Flow</h1>
                                        <i><FaEllipsisV className="mt-2" /></i>
                                </div>
                                <p>
                                    Designing a dashboard involves creating a visual interface that...<br/>
                                    <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>4</span></button>
                                </p>
                                <div className="flex justify-between">
                                    <span><FaUsers className="text-2xl"/> </span> 
                                    <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className=" text-xl font-semibold" /> </span>
                                </div>
                        
                                                
                            </div>


                        </div>

                        <div className="col-span-4 h-1/3 my-10 ">

<div className="flex justify-around w-full">

    <button className="rounded-md  text-yellow-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
    <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>Tomorrow</span></button>
    <button className="rounded-md text-teal-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


</div>

    <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2 ">

        <div className="flex justify-between">
                <h1 className="font-semibold text-xl"> User Flow</h1>
                <i><FaEllipsisV  className="mt-2"/></i>
        </div>
        <p>
            Designing a dashboard involves creating a visual interface that...<br/>
            <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>4</span></button>
        </p>
        <div className="flex justify-between">
            <span><FaUsers className="text-2xl"/> </span> 
            <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className=" text-xl font-semibold" /> </span>
        </div>

                        
    </div>


</div>

<div className="col-span-4 h-1/3 my-10 ">

<div className="flex justify-around w-full">

    <button className="rounded-md  text-yellow-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
    <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>14/04/23</span></button>
    <button className="rounded-md text-teal-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


</div>

    <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2">

        <div className="flex justify-between">
                <h1 className="font-semibold text-xl"> User Flow</h1>
                <i><FaEllipsisV  className="mt-2"/></i>
        </div>
        <p>
            Designing a dashboard involves creating a visual interface that...<br/>
            <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>4</span></button>
        </p>
        <div className="flex justify-between">
            <span><FaUsers className="text-2xl"/> </span> 
            <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className=" text-xl font-semibold" /> </span>
        </div>

                        
    </div>


</div>

<div className="col-span-4 h-1/3 my-10 ">

<div className="flex justify-around w-full">

    <button className="rounded-md  text-yellow-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">High</button>
    <button className="rounded-md text-fuchsia-400 font-semibold shadow-md px-2 py-2 mx-2 self-center flex space-x-1"><FaClock className="mt-1" /><span>9:00 AM</span></button>
    <button className="rounded-md text-teal-400 font-semibold shadow-md px-2 py-2 mx-2 self-center">UX Design</button>


</div>

    <div className="rounded-x-md shadow-lg  bg-stone-100 flex flex-col space-y-4 mx-2 mt-2 min-h-full mb-2 shadow-full px-2">

        <div className="flex justify-between">
                <h1 className="font-semibold text-xl"> User Flow</h1>
                <i><FaEllipsisV  className="mt-2"/></i>
        </div>
        <p>
            Designing a dashboard involves creating a visual interface that...<br/>
            <button className="rounded-md shadow-md py-2 px-2 flex space-x-2 justify-baseline"><FaListOl className="mt-1" /><span>0</span>/<span>4</span></button>
        </p>
        <div className="flex justify-between">
            <span><FaUsers className="text-2xl"/> </span> 
            <span className="flex space-x-4"> <FaEye className="text-xl " /> <HiTrash className="text-xl " /> <FaPencilAlt className=" text-xl font-semibold" /> </span>
        </div>

                        
    </div>


</div>
                

{/**** End of contents  */}
                                
                             


                            </div>

                    </div>


              
            </div>

       </div>

    )
}
