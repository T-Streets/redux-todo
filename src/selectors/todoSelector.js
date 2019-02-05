import { createSelector } from 'reselect'

const todos = state => state

export const getTodos = createSelector(
    todos,
    tasks => tasks
)