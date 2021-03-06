import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, deleteTask, toggleTask } from '../actions/index'
import { getTodos } from '../selectors/todoSelector'

class TodoList extends Component {
    textInput = React.createRef();

    render() {
        let { todos, addTask, deleteTask, toggleTask } = this.props
        console.log(todos)
        return (
            <div className="todo-list">
                <form onSubmit={(e) => {
                    const { current } = this.textInput
                    e.preventDefault()

                    if(current.value !== '') {
                        addTask(current.value)
                        current.value = '';
                    }
                }}>
                    <input type="text" placeholder="Enter a to do" ref={this.textInput}/>
                    <button>Add Task</button>
                </form>

                <ul>
                    {
                        todos.map(todo => [
                            <li key={todo.text} 
                                style={{ 
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}
                            >
                                { todo.text }
                                <button className="delete" onClick ={() => deleteTask(todo.id)}>X</button>
                                <button className='complete' onClick={() => toggleTask(todo.id)}>Complete</button>
                            </li>
                        ])
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => {
    return {
        todos: getTodos(state)
    }
},{ addTask, deleteTask, toggleTask } )(TodoList)

