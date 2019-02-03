import React from 'react'
import { addTask, submit } from '../actions'
import { store } from '../store'

const TodoList = () => (
    <div>
        <form onSubmit={dispatchSubmit}>
            <input onChange={dispatchOnChangeAction}/>
            <button>Add Task</button>
        </form>
    </div>
)

function dispatchOnChangeAction (e) {
    const newTodo = e.target.value
    store.dispatch(addTask(newTodo))
}

function dispatchSubmit (e) {
    e.preventDefault()
    console.log(store.getState())
    const newTodo = store.getState().todo
    store.dispatch(submit(newTodo))
}

export default TodoList 
