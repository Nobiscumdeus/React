//Main Quiz component 

// src/components/Quiz.jsx

import { useNavigate } from "react-router-dom";

const StartQuiz = () => {

  const navigate=useNavigate(); //Get the navigate function 

  //Handler for button click 
  const handleStartQuiz=()=>{
    navigate('/quiz') //Navigate to the quiz page 
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Quiz Page</h2>
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={handleStartQuiz} // Attach the click handler
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
