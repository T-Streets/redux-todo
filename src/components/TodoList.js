import React, { Component } from 'react'
import { connect } from 'react-redux'
import addTask from '../actions/index'
import { store } from '../index'

class TodoList extends Component {
    textInput = React.createRef();
    
    render() {
        let { todos } = this.props
        return (
            <div>
                <form onSubmit={(e) => {
                    const { current } = this.textInput
                    e.preventDefault()

                    if(current.value !== '') {
                        store.dispatch(addTask(current.value))
                        current.value = '';
                    }
                }}>
                    <input type="text" placeholder="Enter a to do" ref={this.textInput}/>
                    <button>Add Task</button>
                </form>

                <ul>
                    {
                        todos.map(todo => <li key={todo.text}>{ todo.text }</li>)
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(TodoList)
