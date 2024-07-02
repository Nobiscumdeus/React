import React, { useState } from 'react';

export default function Toggle() {
    const [isChecked, setIsChecked] = useState(false);

   

    return (
        <div className={`antialiased min-h-screen ${isChecked ? 'bg-gray-800 dark:bg-gray-800 dark:text-gray-200' : 'bg-gray-200'} m-auto flex flex-col justify-center items-center`}>
            <div className="w-full max-w-3xl flex flex-col space-y-4 justify-center items-center">
                <h1 className="bg-gradient-to-tr from-blue-800 via-red-400 to-purple-200 bg-clip-text text-transparent">
                    Operating a Toggle Button here
                    <hr />
                </h1>

                <div className={`flex flex-row justify-center items-baseline space-x-2 ${isChecked ? 'text-white':''}`}>
                    <span className="font-bold text-xl">Light mode</span>
                    <label htmlFor="toggle" className={`flex items-center space-x-2 cursor-pointer ${isChecked ? 'text-white':''}`}>
                        <input
                            type="checkbox"
                            id="toggle"
                            className="hidden"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <div className={`w-9 h-5 flex items-center ${isChecked ? 'bg-gray-600' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                            <div className={`toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform ${isChecked ? 'translate-x-4' : ''} transition-transform duration-300 ease-in-out`}></div>
                        </div>
                    </label>
                    <span className="font-bold text-xl">Dark mode</span>
                </div>
            </div>
        </div>
    );
}
