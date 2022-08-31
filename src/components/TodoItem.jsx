

import React from "react"
import './TodoItem.css'




export function TodoItem(props){
    const completeStyled = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through'
    }

    return(
        

        <li className="item">
            
                <input 
                className="checkbox"
                type="checkbox" 
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
                />
                <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
                <span style={props.todo.completed ? completeStyled : null}>
                    {props.todo.title}
                </span>

        </li>



    )
}

