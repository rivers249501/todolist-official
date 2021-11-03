import React, {useState, useEffect} from 'react'
import Header from './componentes/Header'
import Todo from './componentes/Todo'
import './estilos/Header.css'


const App = () => {

  const [data, setData] = useState (null)
  const [filtro, setFiltro] = useState (null)

   useEffect(() => {
    const handleData = async () => {
      const response = await fetch ("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json()
      const resultTotal = result.slice(0, 20)
      setData(resultTotal)
      setFiltro(resultTotal);

    }
    handleData()
  }, [])


  const handleFilterApp = (estado) => {
    if(estado === "Todo"){
      setFiltro(data)

    }else if(estado === "completas"){
      setFiltro(data.filter((z) => z.completed === true))
         
    }else if (estado === "incompleta"){
      setFiltro(data.filter((z) => z.completed === false))
    }

  }

  const changeStatus = (id) => {
  setData (data.map((x)=> x.id === id ? {...x, completed: !x.completed} : x ))
  setFiltro (filtro.map((x)=> x.id === id ? {...x, completed: !x.completed} : x ))                            
  }

  return (
    <div className = "containers">
      <Header 
      handleFilter = {handleFilterApp}
      />
      
      { filtro && filtro.length > 0 ? filtro.map(datas=>
         
      <Todo 
      title= {datas.title}
        
      key= {datas.id}

      status= {datas.completed}

      id= {datas.id}

      cambiarEstado= {changeStatus}

      />

      ) : "cargando"
      
      }

    </div >
  )
}

export default App