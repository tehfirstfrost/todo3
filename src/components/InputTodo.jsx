


import React, { Component } from "react"





export class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoItem(this.state.title)
            console.log(this.state.title)
            this.setState({title: ""})
        }else{
            alert("Please enter an item")

        }
        

    }

    render(){
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input 
                    className="input-text"
                    onChange={this.onChange} 
                    name="title"
                    type="text" 
                    placeholder="Add Todo..." 
                    required
                    value={this.state.title} 
                />
                <button className="form-submit">Submint</button>
            </form>
        )
    }
}