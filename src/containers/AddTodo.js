import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
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

const AddTodo = ({dispatch}) => {
    const classes = useStyles();

    const handleChange = ev => {
        if (ev.key === 'Enter') {
            if (!ev.target.value.trim()) {
                return
            }
            dispatch(addTodo(ev.target.value));
            ev.preventDefault();
            ev.target.value = ''
        }
    }

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <Grid item md={12}>
                <TextField onKeyPress={handleChange}
                           id="standard-full-width"
                           label="Add new task"
                           style={{margin: 8}}
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
            </Grid>
        </Container>
    )
}
export default connect()(AddTodo)