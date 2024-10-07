//Redux store configuration 

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import timerReducer from './features/ChasfatAcademy/timer/timerSlice'

import quizReducer from './features/ChasfatAcademy/quiz/quizSlice' //Import the quizreducer 


//Configure the Redux store
const store=configureStore({
    reducer:{
        todos:todosReducer, //Add todos reducer 
        filters:filtersReducer,//
        quiz:quizReducer,
        timer:timerReducer,
       
    }
})

export default store  //Export the configured store 


