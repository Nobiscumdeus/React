

import ResumeDownload from './ResumeDownload';
import Share from './Share';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                <div>
                    <h2 className="text-[22px] text-3xl font-bold text-fuchsia-800 py-2 uppercase">CHASFAT</h2>
                    <p className="text-[16px] my-4">
                        Chasfat represents my passions and stands for: <br />
                        CLASSICALS | HEALTH | ACADEMICS | SERVICE | FINANCE | AGRICULTURE | TECHNOLOGY
                    </p>
                </div>
                <div>
                    <h2 className="text-[22px] font-bold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Development</li>
                        <li className="my-2">Data Science</li>
                        <li className="my-2">Cybersecurity</li>
                        <li className="my-2">Telemedicine</li>
                        <li className="my-2">Music training</li>
                        <li className="my-2">Piano</li>
                        <li className="my-2">Science Courses tutorials</li>
                    </ul>
                </div>
               
               
                <div className="mb-4 md:mb-0 md:ml-4">
                     <ResumeDownload className="mt-4" />
                   
                </div>
                <div className="col-span-1 md:col-span-4 mt-4 ">
                     <Share className="mt-4" />
                   
                </div>
              

            </div>
        </footer>
    );
};

export default Footer;
