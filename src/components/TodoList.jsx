import { TodoItem } from "./TodoItem"
import React from "react"





export const TodoList = ({ todos, handleChange, deleteTodo, setUpdate }) => {
 

    return(
    <main>
        {console.log("todos from todolist", todos)}
        {todos.map(todo => (
            <TodoItem 
                key={todo.id} 
                id={todo.id}
                checked={todo.completed} 
                handleChange={handleChange}
                deleteTodo={deleteTodo}
                setUpdate={setUpdate}
                title={todo.title}
            />
        ))}
    </main>
    )
}






// export class TodoList extends React.Component {
//     render(){
//         return (
//             <div>
//             {this.props.todos.map(todo => (
//                 <TodoItem 
//                     key={todo.id} 
//                     todo={todo} 
//                     handleChange={this.props.handleChange}
//                     deleteTodo={this.props.deleteTodo}
//                     setUpdate={this.props.setUpdate}
//                 />
//             ))}
//             </div>
//         )
//     }
// }


