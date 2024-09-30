// src/components/Header.jsx


import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Chasfat Academy Quiz</h1>
      <nav>
        <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
        <Link to="/quiz" className="hover:text-gray-300">Quiz</Link>
      </nav>
    </header>
  );
};

export default Header;
