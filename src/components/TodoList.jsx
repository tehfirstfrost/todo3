import { TodoItem } from "./TodoItem"
import React from "react"




export class TodoList extends React.Component {
    render(){
        return (
            <div>
            {this.props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleChange={this.props.handleChange}
                    deleteTodo={this.props.deleteTodo}
                    setUpdate={this.props.setUpdate}
                />
            ))}
            </div>
        )
    }
}


