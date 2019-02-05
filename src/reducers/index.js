import { combineReducers } from 'redux'
import todos from './todoReducer'
import stickyNotes from './stickyReducer'

export default combineReducers({ todos, stickyNotes })