//Component to display results 
import { useSelector,useDispatch } from "react-redux";
import { resetUserAnswers } from "../../features/ChasfatAcademy/quiz/quizSlice";
import { useNavigate } from "react-router-dom";

const Result=()=>{
    const navigate=useNavigate();

    const dispatch=useDispatch();
    //Get the user's answers and questions from the redux state
    const userAnswers=useSelector(state=>state.quiz.userAnswers || []);
    const questions=useSelector(state=>state.quiz.questions || []);

    //Calculate the score 
    const score = questions.reduce((acc, question) => {
        return acc + (userAnswers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);


    const handleRestart=()=>{
      

        dispatch(resetUserAnswers());
        navigate("/");

    }

    return(
        <div className="result container mx-auto p-4 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-4"> Quiz Results </h1>
            <p className="text-lg">You scored {score} out of {questions.length}</p>
            <ul className="space-y-2 w-full md:w-1/2 mx-auto grid grid-cols md:grid-cols-2 gap-4">
                {questions.map(question => (
                    <li key={question.id} className="border p-4">
                        <h2 className="font-bold">{question.question}</h2>
                        <p>Your answer: {userAnswers[question.id] || "Not answered"}</p>
                        <p className="text-green-500 font-semibold">Correct answer: {question.correctAnswer}</p>
                    </li>
                ))}
            </ul>

            <button onClick={handleRestart} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Restart Quiz ? 
            </button>
        </div>
    )
}

export default Result ; 