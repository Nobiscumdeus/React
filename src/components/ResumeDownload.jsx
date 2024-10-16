import  { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. Define the ResumeDownload component
const ResumeDownload = () => {
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    // 2. State to hold selected resume URLs
    const [selectedResumes, setSelectedResumes] = useState([]);

    // 3. List of resumes with names and corresponding PDF URLs
    const resumes = [
        { name: 'Python Full Stack Developer', url: 'src/components/images/python-fullstack-dev-resume.pdf' },
        { name: 'PHP Full Stack Developer', url: 'src/components/images/php-fullstack-dev-resume.pdf' },
        { name: 'Data Scientist', url: 'src/components/images/datascience-dataanalysis-resume.pdf' },
        { name: 'Cybersecurity Expert', url: 'src/components/images/ethicalhacking-resume.pdf' },
        { name: 'Academic', url: 'src/components/images/Olumide CV.pdf' },
        
    ];

    // 4. Function to toggle the selection of a resume
    const toggleResume = (url) => {
        setSelectedResumes((prev) => 
            // 5. If the URL is already selected, remove it; otherwise, add it to the selection
            prev.includes(url) ? prev.filter((item) => item !== url) : [...prev, url]
        );
    };

    // 6. Function to download selected resumes
    const downloadSelectedResumes = () => {
        selectedResumes.forEach((url) => {
            // 7. Create a temporary link element
            const link = document.createElement('a');
            link.href = url; // 8. Set the href to the resume URL
            link.download = url.split('/').pop(); // 9. Use the last part of the URL as the filename
            document.body.appendChild(link); // 10. Append the link to the body
            link.click(); // 11. Trigger a click on the link to start the download
            document.body.removeChild(link); // 12. Remove the link from the document
        });
    };

    // 13. Render the component
    return (
        <div id='Resume'>
           <h1 className="text-[22px] font-bold mb-15 leading-normal uppercase text-fuchsia-800 py-2"> Download Resume </h1>
            <ul>
                {resumes.map((resume) => (
                    <li key={resume.url} className='p-1'>
                        <label className='text-[16px] hover:cursor-pointer'>
                            <input
                                type="checkbox" // 14. Checkbox for each resume
                                onChange={() => toggleResume(resume.url)} // 15. Handle checkbox change
                                checked={selectedResumes.includes(resume.url)} // 16. Check if the resume is selected
                               className='w-5 h-5 hover:cursor-pointer'
                            />
                            <span className='pl-2'>{resume.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <button
                onClick={downloadSelectedResumes} // 18. Handle button click to download
                disabled={selectedResumes.length === 0} // 19. Disable if no resumes are selected
                className={`mt-4 p-2 bg-fuchsia-500 text-white rounded ${selectedResumes.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} // 20. Apply styling
            >
                Download Selected
            </button>
        </div>
    );
};

// 21. Export the component for use in other parts of the application
export default ResumeDownload;
