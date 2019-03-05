import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, { ...action.todo }]
        case DELETE_TASK:
            return state.filter(todo => todo.id !== action.id)
        case TOGGLE_TASK:
            return state.map(todo => {
                if(todo.id !== action.id){
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}