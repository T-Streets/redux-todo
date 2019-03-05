import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './types'

/**
 * Just use the automatic return syntax for your action creators.
 */
let id = 0;

export const addTask = text => ({
    type: ADD_TASK,
    todo: {
        text,
        id: id++,
        completed: false
    }
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    id
})

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    id
})
