/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ListOfTodos } from "../Types"
import { Todo } from "./Todo"

interface Props {
    todos:ListOfTodos,
    onRemoveTodo: (id:string)=> void
}

export const Todos:React.FC<Props> = ({ todos,onRemoveTodo }) =>{
    return (
        <ul className="todo-list">
            {todos.map((todo) =>{
                return(
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`}>
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            )})

            }
        </ul>
    )
}