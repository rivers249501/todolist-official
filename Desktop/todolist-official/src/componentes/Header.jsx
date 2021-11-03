import React from 'react'
import '../estilos/Header.css'

const Header = ({handleFilter}) => {
  return (
    <div className = "containerr">
      <h1>todoList</h1>
      <button onClick={()=>handleFilter("Todo")}>Todo</button>
      <button onClick={()=>handleFilter("completas")}>Completa</button>
      <button onClick={()=>handleFilter("incompleta")}>incompleta</button>
    </div>
  )
}

export default Header

