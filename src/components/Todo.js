import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from "@material-ui/core/Checkbox";

const Todo = ({onClick, id, completed, text, onRemove}) => {
    // const handleChange = ev => {
    //     if (ev.key === 'Enter') {
    //         if (!ev.target.value.trim()) {
    //             return
    //         }
    //         dispatch(editTodo({id: id, text: ev.target.value, completed: completed}));
    //         ev.preventDefault();
    //         ev.target.value = ''
    //     }
    // }
    return (
        <ListItem key={id} role={undefined} dense button>
            <ListItemIcon>
                <Checkbox alignItems="flex-start" onClick={onClick} inputProps={{'aria-label': 'uncontrolled-checkbox'}}
                          checked={completed}/>
            </ListItemIcon>
            {/*<TextField InputProps={{*/}
            {/*    startAdornment: (*/}
            {/*        <InputAdornment position="start">*/}
            {/*            <EditIcon/>*/}
            {/*        </InputAdornment>*/}
            {/*    ),*/}
            {/*}}*/}
            {/*           // onChange={handleChange}*/}
            {/*           value={text} style={{*/}
            {/*    textDecoration: completed ? 'line-through' : 'none'*/}
            {/*}}/>*/}
            <ListItemText primary={text} secondary="Jan 9, 2014" style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={onRemove}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Todo