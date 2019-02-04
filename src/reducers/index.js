import { ADD_TASK, DELETE_TASK } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, { ...action.todo, completed: false }]
        case DELETE_TASK:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}