import { useSelector, useDispatch } from 'react-redux';
import { setUserAnswer } from '/src/features/ChasfatAcademy/quiz/quizSlice.js'; // Adjust the import according to your file structure

const Question = ({ question }) => {
    const dispatch = useDispatch();
    
    // Get the user's answer for the current question from the Redux state
    //Getting the initial user answer from redux store eg question.id is 1. while state.quiz.userAnswers[1] returns "Paris"., for question 2 it returns 4 
    //Hence userANswer below here can be "Paris" or 4 depending on the question id 
    const userAnswer = useSelector(state => state.quiz.userAnswers[question.id]);
     

    const handleAnswerChange = (option) => {
        // Dispatch the action to update the user's answer in the Redux store
        dispatch(setUserAnswer({ questionId: question.id, answer: option }));
    };

    return (
        <div className="mx-auto p-6">
            <h1 className="text-xl font-bold mb-2">{question.id}. {question.question}</h1>
            <div className="space-y-2">
                {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-y-3 bg-gray-200 p-2">
                        <input
                            type="radio"
                            name={`question-${question.id}`} //This groups radio buttons by the question eg question-1, and this ensures only one radio button can be selected per question
                            value={option} //eg value="Paris". One is attached among the options: ["Berlin", "Madrid", "Paris", "Rome"]
                            checked={userAnswer === option} // Checks if the currentanswer 
                            onChange={() => handleAnswerChange(option)}
                            className="form-radio h-5 w-5 focus:ring-blue-500 hover:cursor-pointer"
                        />
                        <label className="ml-4 mb-2 font-semibold text-xl">{option}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
