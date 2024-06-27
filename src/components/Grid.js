import React from 'react'

function Grid(){
    return(
        <div className="px-auto">
      <div className="body bg-gradient-to-tl bg-blue-300 min-h-screen px-4 py-4 ">
        
        {/* Side bar */}
        <aside className="bg-gray-800 text-white w-16 min-h-full fixed top-0 left-0 transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:w-64 z-10">
            
            {/* Mobile burger menu */}
            <button id="toggleSidebar" className=" text-black fixed top-4 right-4 z-20 bg-white p-2 rounded-md shadow-md">
                Click           
            </button>
             {/* Sidebar content */}
             <ul className="mt-10 space-y-4">
                {/* Sidebar items go here  */}
                <li><a href="#" className="block p-2">Dashboard</a></li>
                <li><a href="#" className="block p-2">Reports</a></li>
                <li><a href="#" className="block p-2">Analytics</a></li>
                <li><a href="#" className="block p-2">Settings</a></li>

             </ul>


        </aside>
        <main className="md:ml-16 lg:ml-64">
            {/* Main Page content */}
         <header className="bg-white shadow-lg p-4 lg:py-4 lg:sticky lg:top-0 lg:z-20 flex justify-between">

            <div className="flex items-center">
                {/* Left Search Bar */}
                <div class="w-1/2">
                    <input type="text" className="w-full border rounded p-2" placeholder="Search items for your use ..."/>

                </div>
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
                {/*** Right: Notifications  */}
                <div className="ml-4 lg:ml-0">
                    <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Notifications</button>
                </div>
            </div>

         </header>

         {/*** Content  */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {/*** Tiles  */}
            <div className="bg-white rounded-lg shadow p-4">
                {/* Tile content goes here */}
                <h2 className="text-xl font-semibold"> Tile 1</h2>
                <p>This is some content for the Tile 1. </p>
            </div>

            {/** Table */}
            <div className="bg-white rounded-lg shadow p-4">
                {/** Table content goes here  */}
                <h2 class="text-xl font-semibold"> Table</h2>
                <table className="min-w-full border-collapse table-auto">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-100 text-left">Name </th>
                            <th className="px-6 py-3 bg-gray-100 text-left">Name </th>
                            <th className="px-6 py-3 bg-gray-100 text-left">Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>

                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>

                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Chasfat </td>

                        </tr>
                       
                    </tbody>


                </table>
            </div>            
         </div>
        </main>

      </div>
      </div>
    )
}

export default Grid