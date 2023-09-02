import React, {useState} from 'react'


const questions=[
    {
    question:"What is the capital of Nigeria ?",
    options:["Paris","Abuja","Accra","Washington DC"],
    correctAnswer:"Abuja"
        
    },
    {
    question:"What is the capital of Israel ?",
    options:["Tel Aviv","London","Jerusalem","Damascus"],
    correctAnswer:"Tel Aviv"
        
    },
   
    {
    question:"What is the capital of Russia ?",
    options:["Dubai","Moscow","Accra","Berlin"],
    correctAnswer:"Moscow"
        
    },
   
    {
    question:"What is the capital of Oyo State ?",
    options:["Lagos","Moscow","Ibadan","Molete"],
    correctAnswer:"Ibadan"
        
    }
   
    
]


function Quiz()
{
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(false)

    const handleAnswerClick=(selectedOption)=>{
        if(selectedOption ===questions[currentQuestion].correctAnswer){
            setScore(score+1);
        }

        const nextQuestion=currentQuestion +1;
        if(nextQuestion <questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    }

    return(
        
        <div className="quiz-container">
            <h3> Simple Quiz Application </h3>
            {showScore ? (
            <div className="score-section">
                You scored {score} out of {questions.length}

            </div>
            ): 
            (
                <>
                <div className="question-section">
                    <div className="question-count">
                        <span> Question {currentQuestion +1} </span> /{questions.length}
                    </div>
                    <div className="question-text">
                        {questions[currentQuestion].question}
                    </div>

                </div>
                <div className="answer-section">
                    {questions[currentQuestion].options.map((option)=>(<button key={option} onClick={()=>handleAnswerClick(option)}> {option} </button>))}
                </div>
                </>

            )
            }
            </div>
    )
}

export default Quiz

