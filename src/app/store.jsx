import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Import the counter reducer


//create and export the redux store 
export const store=configureStore({
    reducer:{
        counter:counterReducer //Register the counter reducer in the store 
    }
})