import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Toolbar from "@material-ui/core/Toolbar";
import {withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import makeStyles from "@material-ui/core/styles/makeStyles";

const bottomIcons = [
    {
        id: 1,
        value: "All",
        icon: "all_inbox",
        filter: VisibilityFilters.SHOW_ALL
    },
    {
        id: 2,
        value: "Active",
        icon: "done_all",
        filter: VisibilityFilters.SHOW_ACTIVE
    },
    {
        id: 3,
        value: "Completed",
        icon: "clear_all",
        filter: VisibilityFilters.SHOW_COMPLETED
    }
]
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
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));
const Footer = () => {
    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const StyledMenu = withStyles({
        paper: {
            border: '1px solid #d3d4d5',
        },
    })((props) => (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));
    const StyledMenuItem = withStyles((theme) => ({
        root: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
                },
            },
        },
    }))(MenuItem);
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon/>
                </Fab>
                <div className={classes.grow}/>
                <IconButton edge="end" color="inherit"
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                    <MenuIcon/>
                </IconButton>
                <Footer/>
            </Toolbar>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AllInboxIcon fontSize="small"/>
                    </ListItemIcon>
                    <FilterLink label={bottomIcons[0].value} filter={bottomIcons[0].filter}/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ClearAllIcon fontSize="small"/>
                    </ListItemIcon>
                    <FilterLink label={bottomIcons[1].value}
                                filter={bottomIcons[1].filter}/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <DoneAllIcon fontSize="small"/>
                    </ListItemIcon>
                    <FilterLink label={bottomIcons[2].value}
                                filter={bottomIcons[2].filter}/>
                </StyledMenuItem>
            </StyledMenu>

        </AppBar>


    )
}

export default Footer