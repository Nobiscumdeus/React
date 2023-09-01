import React, {useReducer} from 'react'

//Reducer Function 
//The main essence is to take a state and return the final state based on the condition set
//state is what you want to keep track of
//Reducer is a function that knows how to update,thet state based on actions
//Action is a description of what should happen to the state
//Dispatch is the function used to send actions to the reducer for state updates 
const counterReducer=(state,action)=>
{
    switch(action.type)
    {
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count -1}
        case 'RESET':
            return {count:0}
        default:
            return state;
    }
}

function Counter()
{
    //Initializing state with the useReducer
    const [state,dispatch]=useReducer(counterReducer,{count:0})

    return(
        <div>
            <p> Count: {state.count} </p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}> Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}> Decrement</button>
            <button onClick={()=>dispatch({type:'RESET'})}> Reset</button>
        </div>
    )
}

export default Counter 