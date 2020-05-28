import undoable from 'redux-undo'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'EDIT_TODO':
            return state.map(todo => {console.log(action); return (todo.id === action.id)
                ? {...todo, text: action.text}
                : todo})

        case 'COMPLETE_ALL_TODOS':
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case 'CLEAR_COMPLETED':
            return state.filter(todo => todo.completed === false)

        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos

