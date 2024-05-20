import React, { useState } from 'react';
import classnames from 'classnames';

const TabChange = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (

    <div className="p-2 bg-slate-900">

      <div className="max-w-lg  md:max-w-md mx-auto">


        <div className="flex mb-8">
          <button
            className={classnames("px-4 py-2 mr-4 text-lg font-semibold rounded-t-lg focus:outline-none", {
              "bg-fuchsia-800 text-white": activeTab === "skills",
              "bg-gray-200 text-gray-600": activeTab !== "skills"
            })}
            onClick={() => handleTabChange('skills')}
          >
            Skills
          </button>
          <button
            className={classnames("px-4 py-2 mr-4 text-lg font-semibold rounded-t-lg focus:outline-none", {
              "bg-fuchsia-800 text-white": activeTab === "experience",
              "bg-gray-200 text-gray-600": activeTab !== "experience"
            })}
            onClick={() => handleTabChange('experience')}
          >
            Experience
          </button>
          <button
            className={classnames("px-4 py-2 text-lg font-semibold rounded-t-lg focus:outline-none", {
              "bg-fuchsia-800 text-white": activeTab === "education",
              "bg-gray-200 text-gray-600": activeTab !== "education"
            })}
            onClick={() => handleTabChange('education')}
          >
            Education
          </button>
        </div>

        <div className="bg-slate-800 rounded-b-lg shadow-md p-6">
          <div className={classnames({ 'hidden': activeTab !== 'skills' })}>
            <ul>
              <li><span className="text-gray-200 font-bold">Web Development: <br/> Web App Development</span> </li> <br/>
              <li><span className="text-gray-200 font-bold">Data Science:<br/> Making meaning of large chunks of data</span> </li> <br/>
              <li><span className="text-gray-200 font-bold">Mobile/Desktop App Development: <br/> Building Android/iOS/Windows apps</span> </li><br/>
              <li><span className="text-gray-200 font-bold">Cyber Security: <br/> Protecting computer infrastructures with Ethical Hacking</span></li><br/>
            </ul>
          </div>
          <div className={classnames({ 'hidden': activeTab !== 'experience' })}>
            <ul>
              <li><span className="text-gray-200 font-bold"> (2022 - current) <br/>CEO, Chasfat Project$</span> </li> <br/>
              <li><span className="text-gray-200 font-bold">  (2019 - 2020) <br/>Intern at Microbiology and Parasitology Lab, Obafemi Awolowo University Ile-Ife</span></li>
            </ul>
          </div>
          <div className={classnames({ 'hidden': activeTab !== 'education' })}>
            <ul>
              <li><span className="text-gray-200 font-bold">Medical Student at College of Medicine, University of Ibadan (2023)</span> </li>
              <li><span className="text-gray-200 font-bold">Student at Hacker-X (2022)</span> </li>
              <li><span className="text-gray-200 font-bold">Student at 365 Data Science (2022)</span> </li>
              <li><span className="text-gray-200 font-bold">B.Sc (Honours) in Microbiology  (2020)</span></li>
              <li><span className="text-gray-200 font-bold">Senior School Leaving Certificate (2015)</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabChange;
