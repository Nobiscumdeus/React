
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

import imageUrl1 from './images/pexels-neo-2653362.jpg';
import imageUrl3 from './images/banner-bg.png';
import imageUrl2 from './images/pexels-fabricio-trujillo-60626.png';

const PortfolioCard = ({ title, description, imageUrl, link, isInternal = false }) => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750,
    });

    return (
        <div data-aos="flip-right" className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-900/30">
            <img 
                className="w-full h-48 object-cover" 
                src={imageUrl} 
                alt={title} 
            />
            <div className="px-6 py-5">
                <div className="text-fuchsia-400 dark:text-fuchsia-300 font-bold text-xl mb-3">
                    {title}
                </div>
                <p className="text-gray-300 dark:text-gray-400 text-base leading-relaxed">
                    {description}
                </p>
            </div>
            {link && (
                <div className="px-6 pb-6">
                    {isInternal ? (
                        <Link 
                            to={link}
                            className="inline-flex items-center px-5 py-3 bg-fuchsia-700 hover:bg-fuchsia-600 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                        >
                            <span>Explore Projects</span>
                            <FaExternalLinkAlt className="ml-3" />
                        </Link>
                    ) : (
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-5 py-3 bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                        >
                            <span>{title.includes('Blog') ? 'Read Blog' : 'View GitHub'}</span>
                            <FaExternalLinkAlt className="ml-3" />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isInternal: PropTypes.bool
};

PortfolioCard.defaultProps = {
    isInternal: false
};

const PortfolioSection = () => {
    const portfolioItems = [
        {
            title: "Web Development",
            description: "Explore my complete portfolio of web projects, from beginner to advanced full-stack applications with live demos and source code.",
            imageUrl: imageUrl1,
            link: "/projects-portfolio",
            isInternal: true
        },
        {
            title: "Technical Writing & Blogging",
            description: "Check out my blog posts on programming, web development, and technology topics with practical tutorials and insights.",
            imageUrl: imageUrl2,
            link: "https://chasfatprojects.hashnode.dev",
            isInternal: false
        },
        {
            title: "Other Projects",
            description: "Browse my GitHub repositories for various projects including data science, mobile apps, and open-source contributions.",
            imageUrl: imageUrl3,
            link: "https://github.com/Nobiscumdeus/",
            isInternal: false
        },
    ];

    return (
        <section 
            id="portfolio"
            className="py-16 bg-gray-900 dark:bg-black transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-4">
                        My Work & Expertise
                    </h2>
                    <p className="text-lg text-gray-400 dark:text-gray-500 max-w-3xl mx-auto">
                        A showcase of my projects across different domains, from web development to technical writing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard 
                            key={index} 
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            link={item.link}
                            isInternal={item.isInternal}
                        />
                    ))}
                </div>

                {/* Optional Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-1 bg-gradient-to-r from-fuchsia-700 to-blue-700 rounded-xl">
                        <div className="bg-gray-800 dark:bg-gray-900 px-8 py-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-3">
                                Want to see more?
                            </h3>
                            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-2xl mx-auto">
                                Browse through detailed project breakdowns, code samples, and live demonstrations
                            </p>
                            <Link 
                                to="/projects-portfolio"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white rounded-lg transition-all font-medium"
                            >
                                View Complete Portfolio
                                <FaExternalLinkAlt className="ml-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;

/*
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Example icon from react-icons
import AOS from 'aos';
import 'aos/dist/aos.css';

import imageUrl1 from './images/pexels-neo-2653362.jpg';
import imageUrl3 from './images/banner-bg.png';
import imageUrl2 from './images/pexels-fabricio-trujillo-60626.png';
const PortfolioCard = ({ title, description, imageUrl, link }) => {
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
 
  return (

    <div data-aos="flip-right" className="max-w-sm rounded overflow-hidden shadow-lg">

  
    <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className=" text-fuchsia-800 font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
      {link && (
        <div className="px-6 pt-4 pb-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
            Check out
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

const PortfolioSection = () => {
  const portfolioItems = [
      {
          title: "Web Development",
          description: "The Web app showcases some fully-fledged web projects created with cutting-edge web technologies ",
          imageUrl: imageUrl1,
          link: "https://chasfatproject-frontend.netlify.app/"
      },
      {
          title: "Technical Writing & Blogging",
          description: "Check out my blog posts on a range of topics which includes programming and other topics you can benefit from in no mean way.",
          imageUrl: imageUrl2,
          link: "https://chasfatprojects.hashnode.dev"
      },
      // Add more portfolio items as needed
      {
          title: "Other Projects",
          description: "This link takes you to other cutting edge projects developed with various technologies.",
          imageUrl: imageUrl3,
          link: "https://github.com/Nobiscumdeus/"
      },
  ];

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
          ))}
      </div>
  );
};


export default PortfolioSection;

*/
