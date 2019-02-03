function addTask (text) {
    return {
        type: 'ADD_TASK',
        text
    }
}

function submit (text) {
    return {
        type: 'SUBMIT_TASK',
        text
    }
}

export { addTask, submit }