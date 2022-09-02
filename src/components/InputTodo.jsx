

import { useState } from 'react'
import {FaPlusCircle } from 'react-icons/fa';


export const InputTodo = (props) =>{
    const [inputText, setInputText] = useState({title:""});

    const onChange = (e) =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
        // console.log(' input onChange fn vale: ', e)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputText.title.trim()){
            props.addTodoItem(inputText.title)
            setInputText({
                title: ''
            })
        }else{
            alert("Please enter an item");
        }
        // console.log('input handleSubmit fn vale: ', e)
    }
    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <input
                type='text'
                className='input-text'
                placeholder='Add todo...'
                value={inputText.title}
                name='title'
                onChange={onChange}
            />
            <button className='form-submit'><FaPlusCircle style={{fontSize: '35px'}} /></button>
        </form>
    )
}




// import { Component } from 'react';
// export class InputTodo extends Component {
//     state = {
//         title: ""
//     }

//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if(this.state.title.trim()){
//             this.props.addTodoItem(this.state.title)
//             console.log(this.state.title)
//             this.setState({title: ""})
//         }else{
//             alert("Please enter an item")

//         }
        

//     }

//     render(){
//         return(
//             <form className="form-container" onSubmit={this.handleSubmit}>
//                 <input 
//                     className="input-text"
//                     onChange={this.onChange} 
//                     name="title"
//                     type="text" 
//                     placeholder="Add Todo..." 
//                     required
//                     value={this.state.title} 
//                 />
//                 <button className="form-submit">Submint</button>
//             </form>
//         )
//     }
// }