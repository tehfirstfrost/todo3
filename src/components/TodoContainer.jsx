

import React from "react"
import { TodoList, Header } from "./index";


export class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "this is the first",
                completed: false
            },
            {
                id: 2,
                title: "ths is the second",
                completed: false
            },
            {
                id: 3,
                title: "this is the third",
                completed: true
            }
        ]
    };

    handleChange = (id) =>{
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
    }

    render(){
        return(
            <>
            <Header />
            <TodoList todos={this.state.todos} handleChange={this.handleChange}/>         
            </>
        )
    }
}


