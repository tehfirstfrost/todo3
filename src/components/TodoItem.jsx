

import React from "react"
import './TodoItem.css'





export class TodoItem extends React.Component{

    state = {
        editable: false
    }

    handleEditig =()=>{
        this.setState({
            editable: !this.state.editable
            })
        console.log("edit mode")
    }

    handleUpdateDone = (e) =>{
        if(e.key === 'Enter'){
            this.setState({ editable : false})
        }
        console.log(e.key)
    }

    render(){
        const { completed, id, title } = this.props.todo;
        const { setUpdate } = this.props;

        let viewMode ={};
        let editMode = {};

        if(this.state.editable){
            viewMode.display = "none"
        }else{
            editMode.display = "none"
        }


        return(

            <li className="item">  
                <div className="display-item" onDoubleClick={this.handleEditig} style={viewMode}>       
                <input 
                className="checkbox"
                type="checkbox" 
                checked={completed}
                onChange={() => this.props.handleChange(id)}
                />
                    <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
                    <span  style={completed ? this.completeStyled : null}>
                        {title}
                    </span>
                    
                </div>
                <input 
                    type='text' 
                    className='text-input' 
                    style={editMode}
                    value={title} 
                    onChange={(e) => setUpdate(e.target.value, id)}
                    onKeyDown={this.handleUpdateDone}
                    
                />
            </li>
            
        )
    }



}














// export function TodoItem(props){
//     const completeStyled = {
//         fontStyle: 'italic',
//         color: '#595959',
//         opacity: 0.4,
//         textDecoration: 'line-through'
//     }

//     return(
        
//         <div>
//         <li className="item">
//                 <input 
//                 className="checkbox"
//                 type="checkbox" 
//                 checked={props.todo.completed}
//                 onChange={() => props.handleChange(props.todo.id)}
//                 />
//                 <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
//                 <span style={props.todo.completed ? completeStyled : null}>
//                     {props.todo.title}
//                 </span>
//         </li>
//         </div>


//     )
// }

