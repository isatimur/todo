import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    paper: {
        maxWidth: 400,
    },
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16
    },
    container: {
        padding: 16
    },
    textField: {
        marginLeft: 1,
        marginRight: 1,
        width: '25ch',
    },
});
const TodoList = ({todos, toggleTodo, removeTodo}) => (
    <Box>
            {!todos.length
            ?
            <Paper className='.paper' style={{
                minHeight: '200px',
                textAlign: "center",
                verticalAlign: "middle"
            }}>
                <Typography variant="h5" color="error" align={"center"}>No tasks to display</Typography>
            </Paper>
            :
            (<List>
                <Box boxShadow={3}>

                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                        onRemove={() => removeTodo(todo.id)}
                    />
                )}
                </Box>
            </List>)
            }</Box>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
    ,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList