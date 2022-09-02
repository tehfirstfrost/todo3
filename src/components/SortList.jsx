

import { TodoList } from './index';



export const SortList = ({ todos, handleChange, deleteTodo, setUpdate }) => {

    let columnTrue = []
    let columnFalse = []

    const styledEmpty = {
        paddingTop: '6rem',
        fontFamily: 'cursive',
        fontSize: '40px'
    }


    for(let i = 0; i<todos.length; i++){
        if(todos[i].completed){
            columnTrue.push(todos[i])
        }else{
            columnFalse.push(todos[i])
        }
    }

    return(
        <main style={{textAlign: 'center'}}> 
        {console.log("columnFalse:", columnFalse)}
            {(columnFalse.length === 0 && columnTrue.length === 0) ?
            (<h3 style={styledEmpty} >Nothing "todo"</h3>):
            <section>
            <div style={{textAlign: 'left'}} >
                <h2 >{(columnFalse.length > 0) ? "Inprogress: " : " "}</h2>
                <TodoList 
                    todos={columnFalse} 
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                    setUpdate={setUpdate}
                />
            </div>
            
            <div style={{textAlign: 'left'}} >
            {console.log("columnTrue:", columnTrue)}
            <h2>{(columnTrue.length > 0) ? "Complete:" : " "} </h2> 
                <TodoList 
                    todos={columnTrue}
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                    setUpdate={setUpdate}
                />
            </div>
            </section>
            
            }
        </main>
    )
}

