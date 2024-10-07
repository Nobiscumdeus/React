import { createSlice } from "@reduxjs/toolkit";

//Initial state for the quiz 

const initialState={
    //An array of Quiz Questions 
    questions:[
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",

        },
        {
            id: 2,
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
          },
          {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correctAnswer: "Pacific",
          },
          {
            id: 4,
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correctAnswer: "William Shakespeare",
          },
          {
            id: 5,
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "NaCl"],
            correctAnswer: "H2O",
          },

        
    ],
   

    //An object to store user answers with question ID as the key 
    userAnswers:{}  // eg  1: "Paris", // User answered question 1 with "Paris", 2: "4",     // User answered question 2 with "4"
   
}

//Create the quiz slice
const quizSlice=createSlice({
    name:'quiz', //Name of the quiz slice 
    initialState, //Initial state of the Slice 
    reducers:{
        //Action to set the user's answers for a question
        setUserAnswer(state,action){
            const { questionId,answer }=action.payload ; //Destructure action payload
            state.userAnswers[questionId]=answer; //Store the answer in user answers 
        },
        //Action to reset user answers (optional) if you want to allow restarting the quiz
        resetUserAnswers(state){
            state.userAnswers={} //Reset the userAnswers object 
        }
    }
})


//Export the action creators 
export const {setUserAnswer,resetUserAnswers}=quizSlice.actions;

//Export the action creators for the timerSlice



//Export the reducer to be used in the store 
export default quizSlice.reducer;


