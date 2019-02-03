import { ADD_TASK } from './types'

let id = 0;

export const addTask = text => {
    return {
        type: ADD_TASK,
        todo: {
            text,
            id: id++
        }
    }
}