import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'

const AddTodo = ({dispatch}) => {

    const handleChange = ev => {
        if (ev.which === 13) {
            if (!ev.target.value.trim()) {
                return
            }
            dispatch(addTodo(ev.target.value));
            ev.preventDefault();
            ev.target.value = ''
        }
    }

    return (
        <Grid item xs zeroMinWidth>
            <TextField onKeyPress={handleChange}
                       id="standard-full-width"
                       label="Add new task"
                       style={{margin: 8, backgroundColor: "white"}}
                       placeholder="What need to be done?"
                       fullWidth
                       margin="normal"
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <AddIcon/>
                               </InputAdornment>
                           ),
                       }}
            />
        </Grid>

    )
}
export default connect()(AddTodo)