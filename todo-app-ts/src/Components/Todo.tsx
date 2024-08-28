import React from "react";
import { Todo as TodoTypes} from "../Types";

interface Props extends TodoTypes{ 
    onRemoveTodo: (id:string) => void
 }

export const Todo: React.FC<Props> = ({id,title,completed, onRemoveTodo}) =>{
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={()=>{}} 
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>onRemoveTodo(id)}
            />
        </div>
    )
}