export default (state, action) => {
    console.log(state)
    switch(action.type) {
        case 'ADD_TASK':
            return {
                todo: action.text,
                list: [action.text],
                id: state.id += 1
            }
        case 'SUBMIT_TASK':
            return {
                state
                // list: state.list.concat(action.text)
            }
        default:
            return state
    }
}