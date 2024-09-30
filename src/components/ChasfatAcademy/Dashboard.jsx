// src/components/Dashboard.jsx
//Welcome page component 
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

    const navigate=useNavigate()

    const handleStartQuiz=()=>{
        navigate('/quiz') ;
    }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to the Quiz</h2>
          <p className="text-gray-700 mb-6">
            Test your knowledge with our quiz! Answer all questions to the best of your ability.
          </p>
          <button 
          onClick={handleStartQuiz}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Start Quiz
          </button>
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4">
        <p className="text-center">&copy; 2024 Chasfat Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
