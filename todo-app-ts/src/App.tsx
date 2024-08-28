import { useState } from "react"
import { Todos } from "./Components/Todos"

/* eslint-disable react/react-in-jsx-scope */
const mockoonTodos = [
  {
    id:"1",
    title:"Crear api con JAVA y conectar con aws",
    completed:false
  },
  {
    id:"2",
    title:" Terminar la certificación de AWS Prationer",
    completed:true
  },
  {
    id:"3",
    title:" Crear CRUD con JS",
    completed:false
  },
]

function App() {
  const [todos, setTodos] = useState(mockoonTodos)

  const handleRemove = (id:string) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove}/>
    </div>

  )
}

export default App
