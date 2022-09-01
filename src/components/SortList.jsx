
import { useEffect } from 'react';
import { TodoList } from './index'



export const SortList = ({ todos, handleChange, deleteTodo, setUpdate }) => {

    let columnTrue = []
    let columnFalse = []


    for(let i = 0; i<todos.length; i++){
        if(todos[i].completed){
            columnTrue.push(todos[i])
        }else{
            columnFalse.push(todos[i])
        }
    }

    return(
        <main> 
            {(columnFalse.length === 0 && columnTrue.length === 0) ?
            (<h3 style={{paddingTop: '6rem'}}>Nothing left "todo"</h3>):
            <section>
            <div>
                <h3>{(columnFalse.length > 0) ? "Inprogress: " : " "}</h3>
                <TodoList 
                    todos={columnFalse} 
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                    setUpdate={setUpdate}
                />
            </div>
            
            <div>
                
            <h3>{(columnTrue.length > 0) ? "Complete:" : " "} </h3> 
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

const Complete = ({isDone,todo}) => {
    return(
        <main>

        </main>

    )
}