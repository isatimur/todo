import React from 'react'
import PropTypes from 'prop-types'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Link = ({label, active, children, onClick}) => (
    <BottomNavigationAction label={label} value={label} showLabel={active} icon={children} onClick={onClick} disabled={active}/>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link