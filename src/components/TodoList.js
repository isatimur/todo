import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const TodoList = ({todos, editTodo, toggleTodo, removeTodo}) => {
    return (
        <Grid item xs zeroMinWidth>
            {!todos.length
                ?
                <Paper elevation={0} className='.paper' style={{
                    textAlign: "center",
                    verticalAlign: "middle"
                }}>
                    <Typography variant="h5" color="error" align={"center"}>No tasks to display</Typography>
                </Paper>
                :
                (<List>

                        {todos.map(todo =>
                            <Todo
                                key={todo.id}
                                {...todo}
                                onEdit={(idd, textt) => editTodo(idd, textt)}
                                onClick={() => toggleTodo(todo.id)}
                                onRemove={() => removeTodo(todo.id)}
                            />
                        )}
                </List>)
            }
        </Grid>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    editTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList