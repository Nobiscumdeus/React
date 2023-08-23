import React, { useState } from 'react'

function TodoForm({addTask})  // The {addTask} is a props passed all the way from Todo App.js
{

    const[task,setTask]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(task.trim() !== "")
        {
            addTask(task)
            setTask("")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Enter a New Task... "


            /> <br/>
            <button type="submit"> Add Task </button>

        </form>
    )
}

export default TodoForm 