import React from 'react'
import Link from './Link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
    backgroundImage: "linear-gradient(180deg, #000000, #2669b4)",
     minHeight: "5rem",
     position:"sticky",
     bottom: 0,
     left: 0,
     width: "100%"
    },
    left:{
        paddingLeft: "60px",
        display: "flex",
        flexDirection: "row",
        paddingTop:"30px"
    }
 }));

const Footer = () =>{
    const classes = useStyles();

return(
<div className={ classes.footer }>
    <div className={ classes.left}>
        <Link title="Home" href="/" />
        <Link title="About us" href="/about" />
        <Link title="Contact us" href="/contact" />
        </div>
    </div>
)
}

export default Footer