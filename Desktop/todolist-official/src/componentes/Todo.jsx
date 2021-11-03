import React from 'react'
import '../estilos/Todo.css'



const Todo = ({title, status, id, cambiarEstado}) => {
    return (
        <div className = "container">
            
          <h2>{title}</h2>
          <button onClick={ ()=> cambiarEstado (id)}>{status ? "completed" : "no completed"}</button>
          
           
        </div>
    )
}

export default Todo
