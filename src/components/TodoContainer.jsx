

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList, Header, InputTodo } from "./index";


export class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "this is the first",
                completed: false
            },
            {
                id: uuidv4(),
                title: "ths is the second",
                completed: false
            },
            {
                id: uuidv4(),
                title: "this is the third",
                completed: false
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

    deleteTodo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    addTodoItem = (title) =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
        console.log(title)
    }
    
    setUpdate = (updatedTitle, id) =>{
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        })
       
        console.log(updatedTitle, id)
    }

    render(){
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoItem={this.addTodoItem}/>
                    <TodoList 
                        todos={this.state.todos} 
                        handleChange={this.handleChange}
                        deleteTodo={this.deleteTodo}
                        setUpdate={this.setUpdate}
                    />   
                </div>
            </div>
        )
    }
}


