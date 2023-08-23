import React, { useState } from 'react'

import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'


function TodoApp()
{
    const [tasks,setTasks]=useState([])

    const addTask=(task)=>
    {
        setTasks([...tasks,task])
    }

    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((_,i)=>i !==index )
        setTasks(updatedTasks)
    }

    return(
        <div className="todo-app">
            <h3> (3) Quick Todo List App </h3>
            <TodoForm addTask={addTask} />
            <TodoList tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}

export default TodoApp 