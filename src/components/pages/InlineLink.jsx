import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import navstyle from '../../link.module.css'

const useStyles = makeStyles((theme) => ({
    link: {
        paddingRight: "25px",
        margin: "auto 0",
        
    },
    link1:{
        color: "white",
        "&:hover": {
        color: "white"
    },
    "&:visited": {
        color: "white"
    }
    }
   
}))
const InlineLink=({ title, href })=>{

    const classes= useStyles()

    return(
        <div className={ classes.link } >
        <Link to={href} className= { classes.link1 } >
            {title}
        </Link>
        </div>
    )
}

export default InlineLink