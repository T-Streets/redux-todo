import { createSelector } from 'reselect'

const notes = (state) => state.stickyNotes

export const getStickyNotes = createSelector(
    notes,
    sticky => sticky
)

