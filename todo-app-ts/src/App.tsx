import { useState } from "react"
import { Todos } from "./Components/Todos"
import { TodoId,Todo, FilterValue, TodoTitle } from "./Types"
import { Footer } from "./Components/Footer"
import { TODO_FILTERS } from "./consts"
import { Header } from "./Components/Header"

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
  const [filterSelected, setFiltersSelected] = useState(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter : FilterValue): void =>{
    setFiltersSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE)return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED)return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = () =>{
    const newTodos = todos.filter((todo)=> !todo.completed)
    setTodos(newTodos)
  }

  const handleOnSaveNewtodo = (title: string ) : void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title:title,
      completed: false
    }

    const newTodos = [ ...todos, newTodo];
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCounts = todos.length - activeCount
  return (
    <div className="todoapp">
      <Header onAddTodo={handleOnSaveNewtodo}/>
      <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToggleComplete={handleComplete}/>
      <Footer 
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted} 
        completedCount={completedCounts}      
        />
    </div>

  )
}

export default App
