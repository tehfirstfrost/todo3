

import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import { Header, InputTodo, SearchItem, SortList} from './index'

export const TodoContainer = () =>{
    const [todos, setTodos] = useState(getInitialStored());
    const [search, setSearch] = useState('');

    
    function getInitialStored(){
        const temp = localStorage.getItem('todo');
        const savedTodos = JSON.parse(temp)
        return savedTodos || [];
    }


    useEffect(() =>{
        const temp = JSON.stringify(todos);
        localStorage.setItem('todo', temp)
    }, [todos,])

    // useEffect(() =>{

    // }, [setTodos])

    const handleChange = (id) =>{
        setTodos(prevState =>
            prevState.map(todo =>{
                if(todo.id === id){
                    console.log("handleChange fn matched, input id: ", id, "id :", todo.id )
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                console.log("handleChange fn, input: ", id)
            return todo
        }))
    }

    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo =>{
                return todo.id !== id
            })
        ]) 
        // console.log("deleteTodo fn, input: ", id)   
    }
    
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([newTodo, ...todos])
        // console.log(todos)
        console.log("addTodoItem fn, input: ", title)
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                // console.log("setUpdate fn, input: ", id)
                return todo
            })
        )
    }

    const counter = todos.filter(todo => todo.completed === false)
    console.log("counter",counter.length)

    return(
        <div className="container">
            <div className="inner">
                {/* <Header count={todos.length}/> */}
                <Header count={counter.length}/>
                <InputTodo addTodoItem={addTodoItem}/>
                <SearchItem search={search} setSearch={setSearch} />
                <h5 style={{color: "#ececec"}}>Double click items to edit</h5>
                <SortList 
                    todos={todos.filter(todo => ((todo.title).toLowerCase()).includes(search.toLocaleLowerCase()))} 
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                    setUpdate={setUpdate}
                />

            </div>
        </div>
    )


}


















// import React from "react";
// import { v4 as uuidv4 } from "uuid";
// import { TodoList, Header, InputTodo } from "./index";

// export class TodoContainer extends React.Component {
//     state = {
//         todos: [         
//         {
//             id: uuidv4(),
//             title: "this is the first",
//             completed: false
//         },
//         {
//             id: uuidv4(),
//             title: "ths is the second",
//             completed: false
//         },
//         {
//             id: uuidv4(),
//             title: "this is the third",
//             completed: false
//         }
//     ]
//     };

//     handleChange = (id) =>{
//         this.setState(prevState => ({
//             todos: prevState.todos.map(todo => {
//                 if(todo.id === id){
//                     return{
//                         ...todo,
//                         completed: !todo.completed,
//                     }
//                 }
                
//                 return todo
                
//             }),
//         }))
//     }

//     deleteTodo = (id) => {
//         this.setState({
//             todos: [
//                 ...this.state.todos.filter(todo => {
//                     return todo.id !== id;
//                 })
//             ]
//         })
//     }

//     addTodoItem = (title) =>{
//         const newTodo = {
//             id: uuidv4(),
//             title: title,
//             completed: false
//         }
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         })
//         console.log(title)
//     }
    
//     setUpdate = (updatedTitle, id) =>{
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if(todo.id === id){
//                     todo.title = updatedTitle
//                 }
//                 return todo
//             })
//         })
       
//         console.log(updatedTitle, id)
//     }

//     componentDidUpdate(prevProps, prevState){
//         if(prevState.todos !== this.state.todos){
//             const temp = JSON.stringify(this.state.todos)
//             localStorage.setItem("todo", temp)
//         }
//     }

//     componentDidMount(){
//         const temp = localStorage.getItem("todo")
//         const loadedTodos = JSON.parse(temp)
//         if(loadedTodos){
//             this.setState({
//                 todos: loadedTodos
//             })
//         }
//     }

//     render(){
//         return(
//             <div className="container">
//                 <div className="inner">
//                     <Header />
//                     <InputTodo addTodoItem={this.addTodoItem}/>
//                     <TodoList 
//                         todos={this.state.todos} 
//                         handleChange={this.handleChange}
//                         deleteTodo={this.deleteTodo}
//                         setUpdate={this.setUpdate}
//                     />   
//                 </div>
//             </div>
//         )
//     }
// }


