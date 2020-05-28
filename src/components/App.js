import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from "./Header";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import {VisibilityFilters} from "../actions";
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto',
        // display: 'flex',
        outline: 0,
        position: 'relative',
        'justify-content': 'center',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Header/>
            <React.Fragment>
                <CssBaseline/>
                <Paper square className={classes.paper}>
                    <Typography className={classes.text} variant="h5" gutterBottom>
                        Inbox
                    </Typography>
                    <List className={classes.list}>
                        <React.Fragment key={12222}>
                            <ListSubheader className={classes.subheader}>Today</ListSubheader>
                            {/*{id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}*/}
                            <ListItem>
                                <VisibleTodoList/>
                            </ListItem>
                        </React.Fragment>

                    </List>
                </Paper>

                <AddTodo/>
                <Footer/>
            </React.Fragment>

            {/*<UndoRedo/>*/}

        </div>
    )
}
export default App