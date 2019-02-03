import { ADD_TASK } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, { ...action.todo, completed: false }]
        default:
            return state
    }
}