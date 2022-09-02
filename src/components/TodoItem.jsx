

import React, { useState, useEffect } from "react"
import './TodoItem.css'
import {  FaTrash } from "react-icons/fa";


export function TodoItem({ id, checked, title, handleChange, deleteTodo, setUpdate }){
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        return () =>{console.log("cleaning")} 
    }, [])

    const handleEditing = () => {
        setEditable(true)
    }

    const handleUpdateDone = (e) => {
        if(e.key === "Enter"){
            if(title.trim()){
            setEditable(false)
            console.log(e.key)
            }else{
                alert("Please enter an item")
            }
        }
       
    }

    let viewMode = {
        display: 'flex',
        flexWrap: ' nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: "600px",
        flexGrow: '0'
    };
    let editMode = {};

    if(editable){
        viewMode.display = 'none'
    }else{
        editMode.display = 'none'
    }

    const completeStyled = {
        fontStyle: 'italic',
        opacity: 0.4,
        textDecoration: 'line-through',
        // textAlign: 'left',
        // marginRight: 'auto'
    }
    const inprogressStyled = {
        // textAlign: 'left',
        // marginRight: 'auto'
    }

    
    return(
   
        <li className="item" key={id}>
            <div className="display-item" onDoubleClick={handleEditing} style={viewMode}>
                 <div style={checked ? completeStyled : inprogressStyled}>
                    {title}
                </div> 
                                                           
                {/* <div> */}
                    {checked ?
                    <label className="label" >✓</label>
                    :
                    <label className="label" >X</label>
                     }
                     
                    <input 
                    type="checkbox" 
                    id="toggle" 
                    className="visually-hidden"
                    checked={checked}
                    onChange={() =>{ console.log( "onchange" ,id); handleChange(id)}}
                    />
                    <div className="control-me"></div>
                {/* </div> */}
               
                <button onClick={() => deleteTodo(id)}><FaTrash style={{color: '#a72727', fontSize: '16px'}}/></button>
               
            </div>
            <input 
                type='text'
                className='text-input'
                style={editMode}
                value={title}
                onChange={(e) => setUpdate(e.target.value, id)}
                onKeyDown={handleUpdateDone}
                
            />
        </li>
    )
}








// export class TodoItem extends React.Component{

//     state = {
//         editable: false
//     }

//     handleEditig =()=>{
//         this.setState({
//             editable: !this.state.editable
//             })
//         console.log("edit mode")
//     }

//     handleUpdateDone = (e) =>{
//         if(e.key === 'Enter'){
//             this.setState({ editable : false})
//         }
//         console.log(e.key)
//     }

//     componentWillUnmount(){
//         console.log("Clearing items")
//     }

//     render(){
//         const { completed, id, title } = this.props.todo;
//         const { setUpdate } = this.props;

//         let viewMode ={};
//         let editMode = {};

//         if(this.state.editable){
//             viewMode.display = "none"
//         }else{
//             editMode.display = "none"
//         }


//         return(

//             <li className="item">  
//                 <div className="display-item" onDoubleClick={this.handleEditig} style={viewMode}>       
//                 <input 
//                 className="checkbox"
//                 type="checkbox" 
//                 checked={completed}
//                 onChange={() => this.props.handleChange(id)}
//                 />
//                     <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
//                     <span  style={completed ? this.completeStyled : null}>
//                         {title}
//                     </span>
                    
//                 </div>
//                 <input 
//                     type='text' 
//                     className='text-input' 
//                     style={editMode}
//                     value={title} 
//                     onChange={(e) => setUpdate(e.target.value, id)}
//                     onKeyDown={this.handleUpdateDone}
                    
//                 />
//             </li>
            
//         )
//     }



// }














