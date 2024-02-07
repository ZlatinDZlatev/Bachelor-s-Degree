import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import linkstyle from '../../../src/navlink.module.css'

const useStyles = makeStyles((theme) => ({
    link: {
        paddingRight: "40px",
        margin: "auto 0"
    },
    link1:{
        color: "white",
        textDecoration:"none",
        "&:hover": {
        color: "white"
    },
    "&:visited": {
        color: "white"
    }
    }
}))
const NavLink=({ title, href })=>{

    const classes= useStyles()

    return(
        <div className={ classes.link }>
        <Link to={href} className={ classes.link1 } >
            {title}
        </Link>
        </div>
    )
}

export default NavLink