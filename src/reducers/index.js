import { combineReducers } from 'redux'
import todos from './todoReducer'
import sticky from './stickyReducer'

export default combineReducers({ todos, sticky })