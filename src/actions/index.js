let nextTodoId = 0
export const addTodo = (text) => ({type: 'ADD_TODO', id: nextTodoId++, text})
export const editTodo = (id, text) => ({type: 'EDIT_TODO', id, text})
export const setVisibilityFilter = filter => ({type: 'SET_VISIBILITY_FILTER', filter})
export const toggleTodo = id => ({type: 'TOGGLE_TODO', id})
export const removeTodo = id => ({type: 'REMOVE_TODO', id})
export const completeAllTodos = () => ({ type: 'COMPLETE_ALL_TODOS' })
export const clearCompleted = () => ({ type: 'CLEAR_COMPLETED' })
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}