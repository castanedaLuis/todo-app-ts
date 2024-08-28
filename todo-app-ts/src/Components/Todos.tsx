/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ListOfTodos, TodoId, type Todo as TodoTypes} from "../Types"
import { Todo } from "./Todo"

interface Props {
    todos:ListOfTodos,
    onRemoveTodo: ({id}: TodoId)=> void,
    onToggleComplete: ({id, completed}: Pick<TodoTypes, 'id' | 'completed'>) => void
}

export const Todos:React.FC<Props> = ({ todos,onRemoveTodo,onToggleComplete }) =>{
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
                        onToggleComplete={onToggleComplete}
                    />
                </li>
            )})

            }
        </ul>
    )
}