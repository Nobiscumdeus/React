import React from 'react'



function TodoList({tasks,deleteTask}) //{ tasks, deleteTask} are props passed from TodoApp
{
    console.log("Tasks in the list: ",tasks)
    
    return(
       <>
       <p> Here are the Lists..... </p>
        <ul className="todo-list">
        {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button className="buttonclick" onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    
      {/*}
            {
                tasks.map((task,index)=>{
                    
                    <TodoItem key={index} task={task} index={index} deleteTask={deleteTask} />
                    

                })
            }
            */}

        </ul>
        </>
        
        
    )
}

export default TodoList