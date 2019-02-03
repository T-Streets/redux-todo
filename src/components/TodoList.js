import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
    textInput = React.createRef();

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    const { current } = this.textInput
                    e.preventDefault()

                    if(current.value !== '') {
                        // addTask(current.value)
                        current.value = '';
                    }
                }}>
                    <input type="text" placeholder="Enter a to do" ref={this.textInput}/>
                    <button>Add Task</button>
                </form>

                {/* <ul>
                    {
                        todos.map(todo => <li key={todo.text}>{ todo.text }</li>)
                    }
                </ul> */}
            </div>
        )
    }
}

export default connect(null)(TodoList)
