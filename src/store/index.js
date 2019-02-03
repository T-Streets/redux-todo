import { createStore } from 'redux'
import reducer from '../reducers'

const initialState = {
    todo: '',
    list: [],
    id: 0
}

export const store = createStore(reducer, initialState)