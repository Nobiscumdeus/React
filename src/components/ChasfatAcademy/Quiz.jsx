import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'


import { setUserAnswer,resetUserAnswers} from '../../features/ChasfatAcademy/quiz/quizSlice' ///We imported this as an action here

import Question from './Question' //We import a single question 


import { decrementTimer,resetTimer } from '../../features/ChasfatAcademy/timer/timerSlice' //Here is to import the decrement action 

const Quiz=()=>{
    const userAnswers=useSelector(state=>state.quiz.userAnswers);
    const navigate=useNavigate()
    //const userAnswers=useSelector(state=>state.quiz.userAnswers);
    const dispatch=useDispatch() //Get the dispatch function 
    const questions=useSelector((state)=>state.quiz.questions) //Get questions from the redux store 
    const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0) //State for the current index question 


    //Access the timeLeft from Redux 
  
    //Dealing with the time monitoring 
    //Timer state 
    //const [timeLeft,setTimeLeft]=useState(600) //10 minutes in seconds 

    const timeLeft=useSelector(state=>state.timer.timer) //access timer value from redux 
    const isTimerActive=true
    //State to manage time activity 
   
    /**   useEffect(()=>{
        if(!isTimerActive) return;
        
        const timer=setInterval(()=>{
            setTimeLeft(prev=>{
                if(prev <=1){
                    clearInterval(timer);
                   // handleSubmit()
                    navigate('/') //Automatically handle submission
                    return 0
                }
                return prev-1;
            })
        },1000)

        return ()=>clearInterval(timer)

    },[isTimerActive]) //Condition will be placed here 
*/
  
/**
 * 
 
 * 
 *   useEffect(()=>{
        //Only run this effect if the timer is active and there's time left 
        if(!isTimerActive || timeLeft <= 0 ) return; 

        //Set interval to decrement the timer every second 
        const timer=setInterval(()=>{
            dispatch(decrementTimer()) //Dispatch the action to decrement the timer 

            //If the timer reaches zero, submit the quiz automatically 
            if(timeLeft <= 1){
               
                clearInterval(timer) //Clear the timer interval 
                navigate('/')
               
            }
        },1000)

        return ()=>clearInterval(timer) //Cleanup the function to clear the interval on component unmount 

        
    },[isTimerActive,dispatch]) //dependencies for the effect 

 */

    useEffect(() => {
        // Reset the timer when the component mounts
        dispatch(resetTimer());
        dispatch(resetUserAnswers());

        
    }, [dispatch]); // Runs only once when the component mounts

    useEffect(()=>{
        //Only run this effect is the timer is active and there's time left 
        if(!isTimerActive || timeLeft <= 0) return;

        //Set the interval to decrement the timer every second 
        const timer =setInterval(()=>{
            dispatch(decrementTimer()) //Dispatch the action to decrement the timer 

            if(timeLeft <= 1){
                clearInterval(timer) //Clear the interval 
                navigate('/results') //Navigate to the home page 
            }

        },1000)
        //Clean up the function to clear the interval on component unmount 
        return()=>clearInterval(timer)

    },[isTimerActive,timeLeft,dispatch,navigate])


   


    const handleSubmit=()=>{
        //Check if all questions are answered 
      //  const allAnswered=questions.every(question=>userAnswers[question.id]);
      const isReady=window.confirm("Are you sure you want to submit assessment ?");
      if(isReady){
        //Redirect to results page
        navigate('/results')
      }else{
            alert("Please answer all questions before submitting")
        }
    }

    //Handler for submitting the answer
    const handleAnswerChange=(answer)=>{
        dispatch(setUserAnswer({questionId:questions[currentQuestionIndex].id, answer})) //Dispatch the user's answer

    }

    //Handler for navigating to the next question 
    const handleNext=()=>{
        setCurrentQuestionIndex((prevIndex)=>Math.min(prevIndex + 1,questions.length -1 ))// Move to the next question 


    }

    //handler for navigating to the previous question 
    const handlePrevious=()=>{
        setCurrentQuestionIndex((prevIndex)=>Math.max(prevIndex -1,0)) //Move to the previous question 
    }


    const handleQuestionClick=(index)=>{
        setCurrentQuestionIndex(index); //Jump to the selected question 

    }
   // const currentQuestion=questions[currentQuestionIndex];


    //Formatting of time 
    const formatTime=(seconds)=>{
        const minutes=Math.floor(seconds/60)
        const secs=seconds%60
        return `${minutes} mins : ${secs < 10 ? '0':''} ${secs} secs`
    }

    return(
        <div className='p-2 bg-gray-100 rounded-lg shadow-md'>


        {questions.length > 0 ? (
            <>
                <div className='w-full container mx-auto flex items-center justify-center mb-2 '>
                    <h2 className='font-semibold text-2xl bg-gray-200 rounded-sm shadow-sm p-2'> {formatTime(timeLeft)}</h2>
                </div>


              <div className='w-full container mx-auto flex items-center justify-center'>

            
                    <button onClick={handleSubmit} className='bg-red-600 text-white font-semibold hover:bg-red-400 rounded'> Submit Assessment </button>

                </div>
              

                <div className='navigation w-full container px-2 mx-auto flex flex-wrap items-center justify-center '>
                  
                   

                    {questions.map((question,index)=> {
                        const buttonClass = `
                            navigation w-10 h-10 rounded-full text-white font-semibold 
                            ${userAnswers[question.id] ? 'bg-green-600 hover:bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}
                        `;

                        return (
                            <button key={question.id}   onClick={()=>handleQuestionClick(index)} className={buttonClass}>
                                {question.id}
                            </button>
                        );
                    })}

                </div>
             
              

                
                {/* Import the Question component here and pass props to it */}
                <Question question={questions[currentQuestionIndex]} onAnswerChange={handleAnswerChange} />
                
               

                <div className='flex justify-center mt-4 '>
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50'
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50'
                    >
                        Next
                    </button>



                </div>
            </>
        ) : (
            <p className='text-gray-500 text-center'>Loading questions...</p>
        )}
    
    </div>
    
    )


}



export default Quiz;
