import React from "react";
import { TodoId, Todo as TodoTypes} from "../Types";

interface Props extends TodoTypes{ 
    onRemoveTodo: (id:TodoId) => void,
    onToggleComplete: ({id, completed}: Pick<TodoTypes, 'id' | 'completed'>) => void
 }

export const Todo: React.FC<Props> = ({id,title,completed, onRemoveTodo,onToggleComplete}) =>{
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={(event)=>{onToggleComplete({id, completed: event?.target.checked})}} 
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>onRemoveTodo({id})}
            />
        </div>
    )
}