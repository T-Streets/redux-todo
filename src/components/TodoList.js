import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, deleteTask } from '../actions/index'

class TodoList extends Component {
    textInput = React.createRef();

    render() {
        let { todos, addTask, deleteTask } = this.props
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
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                            >
                                { todo.text }
                                <button className="delete" onClick ={() => deleteTask(todo.id)}>X</button>
                            </li>
                        ])
                    }
                </ul>
            </div>
        )
    }
}

/**
 * The second parameter to connect can be an object with your action creators you would
 * like your component to access via this.props
 */

 /**
  * Also, mapStateToProps is just a function that redux uses as a general guideline to make things less confusing for people new to it, anyone that knows redux
  * knows that you dont need to explicitly define a function called mapStateToProps, so check out what I did
  * in the first parameter of connect(). Its just a function that does exactly what mapStateToProps does.
  */
export default connect(state => ({ todos: state }), { addTask, deleteTask })(TodoList)
