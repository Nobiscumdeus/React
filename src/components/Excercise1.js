import React from 'react'

export default function Excercise(){
    return (
       <div className="px-6 py-6 bg-gradient-60deg bg-gradient-to-br from-violet-200 via-blue-200 to-blue-700 min-h-screen">
        
            <div className="bg-white h-[600px] h-80% rounded-md shadow-md grid grid-cols-12 gap-4">

                    {/* Sidebar 
                    <div className="col-span-2 bg-gray-50 h-full rounded-md w-full">
                        
                        <div className="flex flex-col justify-center pl-3 min-w-full ">
                            
                            <h2 className="font-semibold text-violet-700 text-2xl">Tasky </h2> 
                          
                             <ul className="mt-10 space-y-4 w-full">
                                
                                <li><a href="#" className="text-center block bg-blue-700 text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ">Dashboard</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Reports</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Analytics</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Settings</a></li>

                            </ul> 

                        </div>
                         
                    </div>
                    */}
                    <div className="col-span-2 bg-gray-50 min-h-full rounded-md w-full grid grid-rows-12 gap-4">

                        <div className="row-span-2 flex flex-cols items-center justify-center">

                        <h2 className="font-semibold text-violet-700 text-2xl">Tasky </h2> 

                        </div>
                        <div className="row-span-8 ">

                            <ul className="mt-10 space-y-4 w-full pl-4">
                                
                                <li><a href="#" className="text-center block bg-blue-700 text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ">Dashboard</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Reports</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Analytics</a></li>
                                <li><a href="#" className="text-center block hover:bg-blue-700 hover:text-white w-full py-2 rounded-tl-md rounded-bl-md font-semibold ml-0 px-0">Settings</a></li>

                            </ul> 

                        </div>
                        <div className="row-span-2 bg-blue-600">
                            Footer

                        </div>


                    </div>



                    {/** Main Content  */}
                    <div className="col-span-10  min-h-full w-full grid grid-rows-12 gap-4">

                        <div className="row-span-2 flex flex-cols items-center justify-between">

                            <div className="mx-2">
                                <input className="px-2 py-2 bg-slate-50 border rounded-md" type="text" placeholder="Search tasks" />
                            </div>
                            <ul className="list-none inline">
                                <li className="inline-block mx-2 font-semibold"> First </li>
                                <li className="inline-block mx-2 font-semibold"> Second</li>
                                <li className="inline-block mx-2 font-semibold"> Third </li>
                            </ul>
                            
                        </div>
                        
                        <div className=" row-span-2 flex flex-cols items-center justify-between">

                            <div>
                                <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Preview</a>
                                <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Sort</a>
                                <a className="rounded-md px-4 py-2 shadow-md border m-2" href="" rel="noopener noreferrer">Filter</a>
                            </div>
                            <div className="flex flex-cols justify-around px-4">
                                <button className="px-4 py-2">Icon</button>
                                <button className="bg-white border border-radius-100 rounded-full px-4 font-bold py-2">+</button>
                                <button className="bg-blue-600 text-white rounded-md m-2 px-4 py-2">+ Add task</button>
                            </div>


                        </div>

                        <div className="row-span-1 flex justify-between ">
                            <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4">In Progress <span>(2)</span> </button>
                            <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4"> Completed Task <span>(4)</span> </button>
                            <button className="text-left font-semibold border border-violet-500 w-[300px] rounded-md shadow-md py-2 px-4"> Over-Due <span>(5)</span> </button>

                        </div>

                        <div className="row-span-7 flex flex-cols-3 flex-wrap items-between justify-between">

                            <div class="w-1/3 h-1/2 ">
                                    <div className="flex justify-between">
                                          <button className="rounded-md bg-red-200 text-red-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">High</button>
                                          <button className="rounded-md text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">6:00PM</button>
                                          <button className="rounded-md bg-purple-200 text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">UX Design</button>

                                    </div>
                                    <div className="rounded-x-md shadow-lg bg-gray-100 flex flex-col mx-2 mt-2 min-h-full mb-2 shadow-full px-2 font-semibold">
                                       
                                       <div className="flex justify-between py-2">
                                            <h1 className="font-semibold text-xl"> User Flow</h1>
                                            <i>...</i>
                                       </div>
                                       <p>
                                        Creating a dashboard involves creating a visual interface that...<br/>
                                         <button className="rounded-md shadow-md px-4 py-2"><span>0/3</span></button>
                                       </p>
                                       <div className="flex justify-between">
                                        <span>One </span> 
                                        <span> two </span>
                                       </div>
                                      


                                    </div>
                                  
                                
                            </div>
                            <div class="w-1/3 h-1/2 ">
                                    <div className="flex justify-between">
                                          <button className="rounded-md bg-red-200 text-red-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">High</button>
                                          <button className="rounded-md text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">6:00PM</button>
                                          <button className="rounded-md bg-purple-200 text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">UX Design</button>

                                    </div>
                                    <div className="rounded-x-md shadow-lg bg-gray-100 flex flex-col mx-2 mt-2 min-h-full mb-2 shadow-full px-2 font-semibold">
                                       
                                       <div className="flex justify-between py-2">
                                            <h1 className="font-semibold text-xl"> User Flow</h1>
                                            <i>...</i>
                                       </div>
                                       <p>
                                        Creating a dashboard involves creating a visual interface that...<br/>
                                         <button className="rounded-md shadow-md px-4 py-2"><span>0/3</span></button>
                                       </p>
                                       <div className="flex justify-between">
                                        <span>One </span> 
                                        <span> two </span>
                                       </div>
                                      


                                    </div>
                                  
                                
                            </div>
                            <div class="w-1/3 h-1/2 ">
                                    <div className="flex justify-between">
                                          <button className="rounded-md bg-red-200 text-red-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">High</button>
                                          <button className="rounded-md text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">6:00PM</button>
                                          <button className="rounded-md bg-purple-200 text-purple-900 font-semibold shadow-md px-4 py-2 mx-2 self-center">UX Design</button>

                                    </div>
                                    <div className="rounded-x-md shadow-lg bg-gray-100 flex flex-col mx-2 mt-2 min-h-full mb-2 shadow-full px-2 font-semibold">
                                       
                                       <div className="flex justify-between py-2">
                                            <h1 className="font-semibold text-xl"> User Flow</h1>
                                            <i>...</i>
                                       </div>
                                       <p>
                                        Creating a dashboard involves creating a visual interface that...<br/>
                                         <button className="rounded-md shadow-md px-4 py-2"><span>0/3</span></button>
                                       </p>
                                       <div className="flex justify-between">
                                        <span>One </span> 
                                        <span> two </span>
                                       </div>
                                      


                                    </div>
                                  
                                
                            </div>
                            
                           

                        </div>
                        

                    </div>

              
            </div>

       </div>

    )
}

