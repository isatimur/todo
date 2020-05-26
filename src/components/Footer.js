import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const bottomIcons = [
    {   id: 1,
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
const Footer = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
    >
        <FilterLink label={bottomIcons[0].value} filter={bottomIcons[0].filter}><AllInboxIcon /></FilterLink>
        <FilterLink label={bottomIcons[1].value} filter={bottomIcons[1].filter}><ClearAllIcon /></FilterLink>
        <FilterLink label={bottomIcons[2].value} filter={bottomIcons[2].filter}><DoneAllIcon /></FilterLink>
    </BottomNavigation>
    )
}

export default Footer