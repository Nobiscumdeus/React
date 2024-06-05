import React, { useState } from 'react';
import classnames from 'classnames';
import { FaAtom } from 'react-icons/fa'
import { FaList,FaBars,FaCrown } from 'react-icons/fa'

const TabChange = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (

    <div className="p-2 bg-slate-900">

      <div className="max-w-lg  md:max-w-md mx-auto">


        <div className="flex items-center justify-center mb-8">
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
              <li><span className="text-gray-200 font-bold "> <h1 className="uppercase text-2xl "> <span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Web Development</h1> <br/> I am a full stack developer using front end frameworks  like Vanilla Javascript, VueJS,React etc
              <br/> I also use backend frameworks like Django,Laravel and NodeJS</span> </li> <br/>
              <li><span className="text-gray-200 font-bold "><h1 className="uppercase text-2xl "> <span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Data Science & Analytics</h1><br/> I make meaning of large chunks of data with languages like R and Python. <br/> I trust to be a good fit for your medical and scientific based researches.</span> </li> <br/>
              
             
              <li><span className="text-gray-200 font-bold "><h1 className="uppercase text-2xl "><span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Pentration Testing  </h1>  <br/> Protecting computer infrastructures with Ethical Hacking</span></li><br/>
              
              <li><span className="text-gray-200 font-bold "><h1 className="uppercase text-2xl "> <span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Science & Coding Educator </h1><br/>I am a passionate inborn-tutor dedicated to helping students excel in science subjects and programming languages <br>
              </br>
               My interests are in subjects like biology,chemistry,physics and coding languages like Python, PHP and more.</span></li><br/>
              <li><span className="text-gray-200 font-bold "><h1 className="uppercase text-2xl "><span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Piano & Keyboard Coach </h1> <br/> My expertise are mainly in the areas of Classical music, Gospel music and African music </span></li><br/>
              <li><span className="text-gray-200 font-bold "><h1 className="uppercase text-2xl "><span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>Medical Educator & Content Creator</h1> <br/>  Being a medical professional , I love to educate people about medicine and courses associated with it. <br/> At my leisure time, I create contents on solving programming errors and troubleshooting issues whether its in medicine, music,marital or the miscellaneous</span></li><br/>
            </ul>
          </div>
          <div className={classnames({ 'hidden': activeTab !== 'experience' })}>
            <ul>
              <li><span className="text-gray-200 font-bold"> <h1 className="uppercase text-2xl"><span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>(2022-current)</h1> <br/>CEO, Chasfat Project$</span> </li> <br/>
              <li><span className="text-gray-200 font-bold"> <h1 className="uppercase text-2xl"> <span class="inline-block mr-2"><FaList size={20} color="#fff" /></span>(2019 - 2020)</h1> <br/>Intern at Microbiology and Parasitology Lab, Obafemi Awolowo University Ile-Ife</span></li>
            </ul>
          </div>
          <div className={classnames({ 'hidden': activeTab !== 'education' })}>
            <ul>
              <li className="mb-2"><span class="inline-block mr-2"><FaAtom size={20} color="#fff" /></span><span className="text-gray-200 font-bold ">Medical Student at College of Medicine, University of Ibadan (2023)</span> </li>
              <li className="mb-2"><span className="inline-block mr-2"><FaAtom size={20} color="#fff" /></span><span className="text-gray-200 font-bold">Student at Hacker-X (2022)</span> </li>
              <li className="mb-2"><span className="inline-block mr-2"><FaAtom size={20} color="#fff" /></span><span className="text-gray-200 font-bold">Student at 365 Data Science (2022)</span> </li>
              <li className="mb-2"><span className="inline-block mr-2"><FaAtom size={20} color="#fff" /></span><span className="text-gray-200 font-bold">B.Sc (Honours) in Microbiology  (2020)</span></li>
              <li className="mb-2"><span className="inline-block mr-2"><FaAtom size={20} color="#fff" /></span><span className="text-gray-200 font-bold">Senior School Leaving Certificate (2015)</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabChange;
