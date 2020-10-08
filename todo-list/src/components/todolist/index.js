import React, { useState } from 'react'
import {connect} from 'react-redux'
import Todo from '../../components/todo/index'

import * as selectors from '../../reducers/todo';

const TodoList = ({todos = []}) => {
    
    const [completeCount, changeCompleteCount] = useState(0);
    const [incompleteCount, changeIncompleteCount] = useState(0);
    
    // -> hooks
    return (
    <div className="container">
        <div className='contenedor'>
            <div className="subcont">

                <div className="titulo">Incompletos</div>
                <div className="todocont">
                {
                    todos.map((todo, index) => {
                        if (!todo.completed) { 
                            changeIncompleteCount(incompleteCount += 1);
                            return <Todo index={index} description={todo.description} completed={todo.completed} />
                        }
                    })
                }
                </div>
                <div className="contador">
                    {incompleteCount}
                </div>
            </div>
           
            <div className="subcont">
                <div className="titulo">Completos</div>
                <div className="todocont">
                {
                    todos.map((todo, index) => {
                        if (todo.completed) { 
                            changeCompleteCount(completeCount += 1);
                            return <Todo index={index} description={todo.description} completed={todo.completed} />
                        }
                    })
                }
                    
                </div>
                <div className="contador">
                    {completeCount}
                </div>
            </div>
            
        </div>
    </div>
)}

// export default TodoList;

export default connect(
    state => ({
        todos: selectors.getTodos(state.todos)
    }),
    undefined
)(TodoList)