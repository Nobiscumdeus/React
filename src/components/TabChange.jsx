import { useState } from 'react';
import classnames from 'classnames';
import { FaAtom, FaList, FaBars, FaCrown } from 'react-icons/fa';

const TabChange = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="p-2 bg-slate-800">
      <div className="max-w-lg md:max-w-md mx-auto">
        
        {/* Responsive Tab Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mb-8 mt-4 gap-2 sm:gap-0">
          <button
            className={classnames(
              "w-full sm:w-auto px-3 sm:px-4 py-2 sm:mr-2 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-t-lg focus:outline-none transition-all duration-200",
              {
                "bg-fuchsia-800 text-white": activeTab === "skills",
                "bg-gray-200 text-gray-600 hover:bg-gray-300": activeTab !== "skills"
              }
            )}
            onClick={() => handleTabChange('skills')}
          >
            Skills
          </button>
          <button
            className={classnames(
              "w-full sm:w-auto px-3 sm:px-4 py-2 sm:mr-2 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-t-lg focus:outline-none transition-all duration-200",
              {
                "bg-fuchsia-800 text-white": activeTab === "experience",
                "bg-gray-200 text-gray-600 hover:bg-gray-300": activeTab !== "experience"
              }
            )}
            onClick={() => handleTabChange('experience')}
          >
            Experience
          </button>
          <button
            className={classnames(
              "w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-t-lg focus:outline-none transition-all duration-200",
              {
                "bg-fuchsia-800 text-white": activeTab === "education",
                "bg-gray-200 text-gray-600 hover:bg-gray-300": activeTab !== "education"
              }
            )}
            onClick={() => handleTabChange('education')}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="rounded-b-lg sm:rounded-lg shadow-md p-4 sm:p-6 bg-slate-700">
          
          {/* Skills Tab */}
          <div className={classnames({ 'hidden': activeTab !== 'skills' })}>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Web Development
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I am a full stack developer using front end frameworks like Vanilla Javascript, VueJS, React etc.
                    <br />
                    I also use backend frameworks like Django, Laravel and NodeJS
                  </p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Data Science & Analytics
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I make meaning of large chunks of data with languages like R and Python.
                    <br />
                    I trust to be a good fit for your medical and scientific based researches.
                  </p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Penetration Testing
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Protecting computer infrastructures with Ethical Hacking
                  </p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Science & Coding Educator
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    I am a passionate inborn-tutor dedicated to helping students excel in science subjects and programming languages.
                    <br />
                    My interests are in subjects like biology, chemistry, physics and coding languages like Python, PHP and more.
                  </p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Piano & Keyboard Coach
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    My expertise are mainly in the areas of Classical music, Gospel music and African music
                  </p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    Medical Educator & Content Creator
                  </h1>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Being a medical professional, I love to educate people about medicine and courses associated with it.
                    <br />
                    At my leisure time, I create contents on solving programming errors and troubleshooting issues whether its in medicine, music, marital or the miscellaneous
                  </p>
                </span>
              </li>
            </ul>
          </div>
          
          {/* Experience Tab */}
          <div className={classnames({ 'hidden': activeTab !== 'experience' })}>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    (2024-current)
                  </h1>
                  <p className="text-sm sm:text-base">Volunteer Full Stack Developer, URecover-App</p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    (2022-current)
                  </h1>
                  <p className="text-sm sm:text-base">CEO, Chasfat Project$</p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    (2024)
                  </h1>
                  <p className="text-sm sm:text-base">Full Stack Developer, Monimoore</p>
                </span>
              </li>
              
              <li>
                <span className="text-gray-200 font-bold">
                  <h1 className="uppercase text-lg sm:text-2xl flex items-center mb-2">
                    <FaList size={16} className="mr-2 sm:mr-3" color="#fff" />
                    (2019 - 2020)
                  </h1>
                  <p className="text-sm sm:text-base">Intern at Microbiology and Parasitology Lab, Obafemi Awolowo University Ile-Ife</p>
                </span>
              </li>
            </ul>
          </div>
          
          {/* Education Tab */}
          <div className={classnames({ 'hidden': activeTab !== 'education' })}>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaAtom size={16} className="mr-2 sm:mr-3 mt-1 flex-shrink-0" color="#fff" />
                <span className="text-gray-200 font-bold text-sm sm:text-base">
                  Medical Student at College of Medicine, University of Ibadan (2023)
                </span>
              </li>
              
              <li className="flex items-start">
                <FaAtom size={16} className="mr-2 sm:mr-3 mt-1 flex-shrink-0" color="#fff" />
                <span className="text-gray-200 font-bold text-sm sm:text-base">
                  Student at Hacker-X (2022)
                </span>
              </li>
              
              <li className="flex items-start">
                <FaAtom size={16} className="mr-2 sm:mr-3 mt-1 flex-shrink-0" color="#fff" />
                <span className="text-gray-200 font-bold text-sm sm:text-base">
                  Student at 365 Data Science (2022)
                </span>
              </li>
              
              <li className="flex items-start">
                <FaAtom size={16} className="mr-2 sm:mr-3 mt-1 flex-shrink-0" color="#fff" />
                <span className="text-gray-200 font-bold text-sm sm:text-base">
                  B.Sc (Honours) in Microbiology (2020)
                </span>
              </li>
              
              <li className="flex items-start">
                <FaAtom size={16} className="mr-2 sm:mr-3 mt-1 flex-shrink-0" color="#fff" />
                <span className="text-gray-200 font-bold text-sm sm:text-base">
                  Senior School Leaving Certificate (2015)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabChange;