import { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaRocket, 
  FaHandsHelping,
  FaShieldAlt,
  FaBrain,
  FaMobile,
  FaFilter,
  FaTimes,
  FaArrowLeft,
  FaImages
} from 'react-icons/fa';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';

const PROJECTS_DATA = [
  // WEB DEVELOPMENT PROJECTS
  {
  id: 'rapha-intl-ministries',
  name: 'Rapha International Ministries — Official Church Website',
  description:
    'A robust public-facing church platform built for Rapha International Ministries. Designed as a complete digital presence for the ministry, covering the visitor journey from the landing page through branch information, leadership, ministries, programs, media, giving, prayer requests, contact, and other essential church resources.',
  category: 'web',
  level: 'personal',
  stack: 'fullstack',
  tech: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vercel'
  ],
  keyFeatures: [
    'Responsive, production-ready church website with dedicated mobile, tablet, and desktop experiences',
    'Church landing page with welcome messaging, ministry vision, service information, and calls to action',
    'Dedicated branch pages for Bethel Tabernacle and Brook Tabernacle',
    'Branch-specific service schedules, locations, contact information, social links, and embedded maps',
    'Branch-specific welcome songs with audio playback, lyrics, excerpts, and musical information',
    'Leadership and ministers directory with profiles and ministry information',
    'Ministries and programs sections for communicating church activities and upcoming gatherings',
    'Media and content-ready architecture for sermons, resources, and other ministry materials',
    'Prayer request and contact pathways for visitor and member engagement',
    'Giving interface for supporting the ministry and designated ministry projects',
    'Reusable component architecture for consistent layouts and scalable content management',
    'Responsive navigation with adaptive tablet and desktop layouts',
    'SEO-conscious page structure and deployment optimized for the public web'
  ],
  github: 'https://github.com/Nobiscumdeus/raphaintlministries',
  live: 'https://raphaintlministries.vercel.app',
  gallery: []
},

  {
  id: 'read-time-ai',
  name: 'ReadTime - Smart Reading Tracker',
  description: 'Full-stack reading analytics platform with AI-ready architecture. Currently features comprehensive data tracking and visualization, with scikit-learn integration prepared for upcoming ML model deployment. Built to evolve from analytics to predictive AI.',
  category: 'web',
  level: 'personal',
  stack: 'fullstack',
  tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'FastAPI', 'Python', 'Pandas', 'scikit-learn', 'Chart.js'],
  keyFeatures: [
    'Daily reading hour tracking with visual checkboxes',
    'Interactive analytics dashboard with real-time charts',
    'Data pipeline optimized for future ML integration',
    'Scalable architecture ready for predictive models',
    'Automated progress reports and habit visualization'
  ],
  futureMLPlans: [  // roadmaps for recruiters!
    'Linear Regression for reading time predictions',
    'Time series forecasting for habit optimization',
    'Clustering algorithms for reader categorization',
    'Personalized recommendation engine'
  ],
  github: 'https://github.com/Nobiscumdeus/ReadTime',
  live: 'https://read-time-beige.vercel.app/',
  gallery: []
},
{
  id: 'monimoore-web',
  name: 'MoniMoore Financial Platform',
  description: 'Contributed to the development of a comprehensive open banking platform that helps users sync bank accounts, manage budgets with AI insights, track financial goals, and make secure payments.',
  category: 'web',
  level: 'contribution',
  stack: 'fullstack',
  tech: ['Django', 'React', 'Tailwind CSS', 'Docker'],

  github: 'https://github.com/[Organization-Name]/monimoore',
  live: 'https://monimoore.com/',
  gallery: []
},
{
  id: 'urecover-web-contribution',
  name: 'URecover Web Platform',
  description: 'Contributed to React/Django web platform for addiction recovery counseling. Built user dashboard, real-time chat features, and integrated video consultation functionality.',
  category: 'web',
  level: 'contribution',
  stack: 'fullstack',
  tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
  github: 'https://github.com/U-Recover',
  live: 'https://urecover.org',
  gallery: []
},
  {
  id: 'attenapse',
  name: 'Attenapse Attendance Platform',
  description: 'Digital attendance tracking system with QR check-ins and real-time analytics for institutions and events.',
  category: 'web',
  level: 'personal',
  stack: 'fullstack',
  tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com/Nobiscumdeus/Attenapse',
  live: 'https://nobiscumdeus.github.io/Attenapse/',
  gallery: []
},
{
  id: 'chasfat-foundations',
  name: 'Foundational Web Projects Collection',
  description: 'A curated collection of beginner projects built while mastering core web development concepts. Includes interactive applications, UI components, and dynamic features to demonstrate fundamental HTML, CSS, and JavaScript skills.',
  category: 'web',
  level: 'beginner',
  stack: 'frontend',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Ajax', 'jQuery', 'Alpine.js', 'Tailwind CSS'],
  github: 'https://github.com/Nobiscumdeus/chasfat-academy', // Or relevant repo
  live: 'https://chasfatproject-frontend.netlify.app/',
  gallery: [],
  // Optional: Add a keyFeatures array for more detail
  keyFeatures: [
    'Interactive apps: Calculator, Tic-Tac-Toe, Quiz, Todo List',
    'UI experiments: Responsive navbars, 3D animations, Image sliders',
    'Dynamic features: Simple chatbot, Countdown timers, Ajax forms'
  ]
},
  {
    id: 'chasfat-academy',
    name: 'Chasfat Academy',
    description: 'Complete exam management system with real-time proctoring',
    category: 'web',
    level: 'personal',
    stack: 'fullstack',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Socket.io'],
    github: 'https://github.com/Nobiscumdeus/chasfat-academy',
    live: 'https://chasfatproject-frontend.netlify.app/',
    gallery: [] 
  },
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform',
    description: 'Online store with cart, payments, and admin dashboard',
    category: 'web',
    level: 'personal',
    stack: 'fullstack',
    tech: ['React', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    github: '',
    live: '',
    gallery: []
  },
  {
    id: 'react-ui-library',
    name: 'React Component Library',
    description: 'Open-source UI component library for React',
    category: 'web',
    level: 'contribution',
    stack: 'frontend',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest'],
    github: '',
    contribution: '',
    gallery: []
  },
  {
    id: 'api-gateway',
    name: 'API Gateway Service',
    description: 'Microservices API gateway with authentication',
    category: 'web',
    level: 'personal',
    stack: 'backend',
    tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    github: '',
    live: '',
    gallery: []
  },

  // DATA SCIENCE PROJECTS
  {
  id: 'med-performance-insights',
  name: 'Interactive Performance Insights Platform for Medical Students',
  description: 'A comprehensive web-based analytics platform for medical students to track and analyze academic performance. Processes uploaded Excel grade sheets to provide detailed insights, class rankings, peer comparisons, and readiness assessments for MB examinations across core pre-clinical subjects like Physiology, Anatomy, and Biochemistry.',
  category: 'data', // Strong fit for Data Science
  level: 'personal',
  stack: 'fullstack', // Or 'backend' if focusing on data pipeline
  tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Visualization'],
  github: 'https://github.com/Nobiscumdeus/DataScience', // Add your repo link
  live: 'https://chasfat-medresultstrack.streamlit.app',
  gallery: [],
  keyFeatures: [
    'Automated Excel grade sheet processing and analysis',
    'Interactive data visualizations for performance trends',
    'Subject-wise analysis and peer comparison analytics',
    'Readiness assessment for medical board examinations'
  ],
  // Optional: Add a note about the domain impact
  impactNote: 'Designed to help medical students identify strengths and improvement areas through data-driven insights.'
},
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Dashboard',
    description: 'Real-time sales prediction and visualization',
    category: 'data',
    level: 'personal',
    stack: 'fullstack',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'D3.js'],
    github: 'https://github.com/yourname/predictive-analytics',
    live: 'https://analytics.yourdomain.com',
    gallery: []
  },
  {
    id: 'stock-predictor',
    name: 'Stock Market Predictor',
    description: 'ML model for stock price prediction using LSTM',
    category: 'data',
    level: 'beginner',
    stack: 'backend',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    github: 'https://github.com/yourname/stock-predictor',
    live: 'https://colab.research.google.com/drive/your-notebook',
    gallery: []
  },

  // SECURITY PROJECTS
  {
    id: 'network-scanner',
    name: 'Network Scanner',
    description: 'Python-based network vulnerability scanner',
    category: 'security',
    level: 'personal',
    stack: 'backend',
    tech: ['Python', 'Scapy', 'Nmap', 'SQLite'],
    github: '',
    gallery: []
  },
  {
    id: 'security-dashboard',
    name: 'Security Dashboard',
    description: 'Centralized security monitoring and alert system',
    category: 'security',
    level: 'contribution',
    stack: 'fullstack',
    tech: ['React', 'Django', 'PostgreSQL', 'Elasticsearch'],
    contribution: '',
    gallery: []
  },

  // MOBILE PROJECTS
  {
  id: 'urecover-mobile-contribution',
  name: 'URecover Mobile App',
  description: 'Developed React Native mobile app extending the URecover platform. Implemented emergency contacts, daily wellness tracking, and offline access to recovery resources.',
  category: 'mobile',
  level: 'contribution',
  stack: 'fullstack',
  tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
  github: '',
  live: '',
  gallery: []
},
{
  id: 'monimoore-mobile',
  name: 'MoniMoore Mobile',
  description: 'Mobile companion app for the MoniMoore open banking platform. Enables on-the-go expense tracking, budget management, and real-time financial goal progress monitoring.',
  category: 'mobile',
  level: 'contribution', // Or 'personal' if you led this
  stack: 'fullstack',
  tech: ['React Native', 'Django REST API', 'Tailwind CSS / NativeWind', 'Context API or Redux'],
  
  github: '',
  live: 'https://play.google.com/store/apps/details?id=com.blockmoorehq.monimoore&hl=en-US&pli=1', // App Store link
 
  gallery: []
},

];

// Category configuration with icons and colors
const CATEGORIES_CONFIG = {
  web: {
    title: 'Web Development',
    description: 'Full-stack, frontend, and backend web applications',
    icon: FaCode,
    gradient: 'from-fuchsia-500 to-gray-700'
  },
  data: {
    title: 'Data Science & AI',
    description: 'Machine learning models, data analysis, and AI applications',
    icon: FaBrain,
    gradient: 'from-gray-600 to-fuchsia-600'
  },
  security: {
    title: 'Ethical Hacking & Pentesting',
    description: 'Security tools, vulnerability scanners, and pentesting projects',
    icon: FaShieldAlt,
    gradient: 'from-fuchsia-600 to-gray-800'
  },
  mobile: {
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile applications',
    icon: FaMobile,
    gradient: 'from-gray-500 to-fuchsia-500'
  }
};

// ============================================
// COMPONENTS
// ============================================

const CategoryIcon = ({ category, className = "text-2xl" }) => {
  const Icon = CATEGORIES_CONFIG[category]?.icon || FaCode;
  return <Icon className={className} />;
};

CategoryIcon.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string
};

const ProjectGallery = ({ gallery, projectName }) => {
  const [showGallery, setShowGallery] = useState(false);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setShowGallery(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors text-sm"
      >
        <FaImages />
        <span>Gallery ({gallery.length})</span>
      </button>

      {showGallery && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGallery(false)}
        >
          <div
            className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {projectName} - Gallery
              </h3>
              <button
                onClick={() => setShowGallery(false)}
                className="p-2 hover:bg-gray-700 rounded-lg"
              >
                <FaTimes className="text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${projectName} screenshot ${idx + 1}`}
                  className="rounded-lg w-full"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
ProjectGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string),
  projectName: PropTypes.string.isRequired
};

const ProjectCard = ({ project }) => {
  const categoryConfig = CATEGORIES_CONFIG[project.category];
  
  return (
    <div data-aos="flip-right" className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-fuchsia-500 transition-all hover:-translate-y-1">
      <div className="p-6">
        {/* Header with category icon */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.level === 'beginner' 
                  ? 'bg-gray-700 text-gray-300' 
                  : project.level === 'personal' 
                  ? 'bg-fuchsia-900 text-fuchsia-300' 
                  : 'bg-gray-600 text-gray-200'
              }`}>
                {project.level.charAt(0).toUpperCase() + project.level.slice(1)}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.stack === 'fullstack' 
                  ? 'bg-fuchsia-800 text-fuchsia-200' 
                  : project.stack === 'frontend' 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-600 text-gray-200'
              }`}>
                {project.stack.charAt(0).toUpperCase() + project.stack.slice(1)}
              </span>
            </div>
          </div>
          <div className={`p-3 bg-gradient-to-br ${categoryConfig?.gradient} rounded-lg flex-shrink-0 ml-2`}>
            <CategoryIcon category={project.category} className="text-xl text-white" />
          </div>
        </div>

        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white rounded-lg hover:from-fuchsia-500 hover:to-fuchsia-600 transition-colors text-sm"
            >
              <FaRocket />
              <span>Live</span>
            </a>
          )}
          
          {project.contribution && (
            <a
              href={project.contribution}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              <FaHandsHelping />
              <span>Contribution</span>
            </a>
          )}

          <ProjectGallery gallery={project.gallery} projectName={project.name} />
        </div>
      </div>
    </div>
  );
};
// Add after ProjectCard component
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['web', 'data', 'security', 'mobile']).isRequired,
    level: PropTypes.oneOf(['beginner', 'personal', 'contribution']).isRequired,
    stack: PropTypes.oneOf(['fullstack', 'frontend', 'backend']).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    contribution: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};


const CategorySection = ({ categoryId, projects }) => {
  const config = CATEGORIES_CONFIG[categoryId];
  if (!config) return null;

  return (
    <div className="mb-12">
      <div data-aos="fade-up" className="flex items-center gap-3 mb-6">
        <div className={`p-3 bg-gradient-to-br ${config.gradient} rounded-xl shadow-lg`}>
          <config.icon className="text-2xl text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{config.title}</h2>
          <p className="text-gray-400">{config.description}</p>
        </div>
      </div>

      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// Add after CategorySection component
CategorySection.propTypes = {
  categoryId: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

const FilterButton = ({ label, value, type, activeFilters, setFilters }) => {
  const isActive = activeFilters[type] === value;
  
  return (
    <button
      onClick={() => setFilters(prev => ({ ...prev, [type]: value }))}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
};
FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['category', 'level', 'stack']).isRequired,
  activeFilters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired
};

const ProjectsPortfolio = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    stack: 'all'
  });

  // Calculate stats from data
  const stats = {
    total: PROJECTS_DATA.length,
    web: PROJECTS_DATA.filter(p => p.category === 'web').length,
    live: PROJECTS_DATA.filter(p => p.live).length,
    contributions: PROJECTS_DATA.filter(p => p.contribution).length
  };

  // Filter projects
  const getFilteredProjects = () => {
    return PROJECTS_DATA.filter(project => {
      if (filters.category !== 'all' && filters.category !== project.category) return false;
      if (filters.level !== 'all' && filters.level !== project.level) return false;
      if (filters.stack !== 'all' && filters.stack !== project.stack) return false;
      return true;
    });
  };

  // Group filtered projects by category
  const groupedProjects = {};
  getFilteredProjects().forEach(project => {
    if (!groupedProjects[project.category]) {
      groupedProjects[project.category] = [];
    }
    groupedProjects[project.category].push(project);
  });

   AOS.init({
         easing: 'ease-out-quart',
         delay: 0,
         duration: 750,
     });
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900/80 to-fuchsia-900/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
       <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
       {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-900 mb-4">
            Projects Portfolio
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            A comprehensive showcase of my work across different domains and skill levels.
          </p>

          {/* Stats with staggered animation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: 'Total Projects', value: stats.total },
              { label: 'Web Projects', value: stats.web },
              { label: 'Live Demos', value: stats.live },
              { label: 'Contributions', value: stats.contributions }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="bg-slate-900 rounded-lg p-4 shadow-lg border border-gray-700"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-gray-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filters */}
        <div data-aos="flip-right" className="mb-8 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-fuchsia-600" />
            <h3 className="font-semibold text-white ">Filter Projects</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All" value="all" type="category" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Web Dev" value="web" type="category" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Data Science" value="data" type="category" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Security" value="security" type="category" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Mobile" value="mobile" type="category" activeFilters={filters} setFilters={setFilters} />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Level</h4>
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All" value="all" type="level" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Beginner" value="beginner" type="level" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Personal" value="personal" type="level" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Contributions" value="contribution" type="level" activeFilters={filters} setFilters={setFilters} />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Stack</h4>
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All" value="all" type="stack" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Full-stack" value="fullstack" type="stack" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Frontend" value="frontend" type="stack" activeFilters={filters} setFilters={setFilters} />
                <FilterButton label="Backend" value="backend" type="stack" activeFilters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>

          {/* Active filters */}
          {(filters.category !== 'all' || filters.level !== 'all' || filters.stack !== 'all') && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-400">Active filters:</span>
                  {filters.category !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-fuchsia-900 text-fuchsia-300 rounded-full text-sm">
                      {filters.category}
                      <button onClick={() => setFilters(prev => ({ ...prev, category: 'all' }))}>
                        <FaTimes className="text-xs" />
                      </button>
                    </span>
                  )}
                  {filters.level !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {filters.level}
                      <button onClick={() => setFilters(prev => ({ ...prev, level: 'all' }))}>
                        <FaTimes className="text-xs" />
                      </button>
                    </span>
                  )}
                  {filters.stack !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm">
                      {filters.stack}
                      <button onClick={() => setFilters(prev => ({ ...prev, stack: 'all' }))}>
                        <FaTimes className="text-xs" />
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setFilters({ category: 'all', level: 'all', stack: 'all' })}
                  className="text-sm text-fuchsia-400 hover:underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Project Categories */}
        {Object.keys(groupedProjects).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects match your current filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          Object.entries(groupedProjects).map(([categoryId, projects]) => (
            <div key={categoryId}>
              <CategorySection categoryId={categoryId} projects={projects} />
            </div>
          ))
        )}

        {/* Footer CTA */}
        <div data-aos="fade-right" className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 text-white mb-4">
              Want to collaborate or see more?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Nobiscumdeus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaGithub />
                GitHub Profile
              </a>
              <a
                href="https://chasfatprojects.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white rounded-lg hover:from-fuchsia-500 hover:to-fuchsia-600 transition-colors"
              >
                <FaExternalLinkAlt />
                Technical Blog
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                
                  <FaArrowLeft />
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;


