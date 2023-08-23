import React from "react"

function TodoItem({task,index,deleteTask}) {
    console.log("The tasks here are :",task)
  return (
    
    
    <li className="todo-item">
        
      {task}
      console.log(tasks)
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
    
  );
}

export default TodoItem