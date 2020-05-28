import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Circle from '@material-ui/icons/CheckCircleOutline';
import Radio from '@material-ui/icons/RadioButtonUnchecked';
import ClearIcon from '@material-ui/icons/Clear';


const Todo = ({onEdit, onClick, id, completed, text, onRemove}) => {
    const [edit, setEdit] = useState({editing: false});
    const [editText, setEditText] = useState({text: text});
    const [newTodo, setNewTodo] = useState(false);

    const handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            handleSave(text)
            if (newTodo) {
                setEditText({'text': text})
            }
        }
        // e.preventDefault();
    }

    const handleChange = e => {
        setEditText({text: e.target.value})
    }

    const handleBlur = e => {
        if (!newTodo) {
            handleSave(e.target.value)
        }
    }

    const handleDoubleClick = () => {
        setEdit({editing: true})
    }

    function handleSave(savingText) {
        console.log(id, savingText)
        if (savingText.length === 0) {
            onRemove(id)
        } else {
            onEdit(id, savingText)
        }
        setEdit({editing: false})
    }

    let element;
    if (edit.editing) {
        element = (
            <TextField
                // text={text}
                defaultValue={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleSubmit}/>
        )
    } else {
        element = (
            <ListItemText primary={text} secondary="Jan 9, 2014"
                          style={{
                              textDecoration: completed ? 'line-through' : 'none'
                          }}
                          onDoubleClick={handleDoubleClick}
            />
        )
    }
    return (
        <ListItem
            key={id}
            role={undefined}
            dense
            button>
            <ListItemIcon>
                <Checkbox
                    icon={<Radio/>}
                    checkedIcon={<Circle/>}
                    alignItems="flex-start"
                    onClick={onClick}
                    inputProps={
                        {
                            'aria-label':
                                'uncontrolled-checkbox'
                        }
                    }
                    checked={completed}
                />
            </ListItemIcon>
            {element}
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={onRemove}>
                    <ClearIcon/>
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