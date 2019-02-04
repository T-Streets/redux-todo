import { DELETE_TASK } from './types'

const deleteTask = id => {
    return {
        type: DELETE_TASK,
        id
    }
}

export default deleteTask