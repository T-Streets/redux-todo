import { ADD_TASK, DELETE_TASK } from './types'

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
