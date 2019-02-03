import React, { Component } from 'react'
import Task from './Task'

export default class Todos extends Component {
    state = {
        todo: '',
        list: [],
        id: 0
    }

    addTask = e => {
        const task = e.target.value
        this.setState(prevState => {
            const newTask = {
                todo: task,
                id: prevState.todo.id + 1
            }
            return {...newTask}
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({
            list: this.state.list.concat(this.state.todo)
        })
    }

    render() {
        let { onSubmit, addTask } = this
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input onChange={addTask}/>
                    <button>Add Task</button>
                </form>
                {this.state.list.map((item, i) => {
                    return <Task item={item} key={i} />
                })}
            </div>
        )
    }
}