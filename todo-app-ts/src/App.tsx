import { useState } from "react"
import { Todos } from "./Components/Todos"
import { TodoId,Todo } from "./Types"

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

  const handleRemove = ({id}:TodoId) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  const handleComplete = ({id, completed}: Pick<Todo, 'id' | 'completed'>) : void => {
    const newTodo = todos.map((todo)=>{
      if(todo.id == id){
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodo)
  }
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleComplete={handleComplete}/>
    </div>

  )
}

export default App
