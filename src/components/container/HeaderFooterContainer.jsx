import React from 'react'
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer:{
        position:"fixed"
    }
}));

export default function HeaderFooterContainer({ children, title }) {
    const classes=useStyles()
    return (
        <>
            <Header title= { title } />
                {children}
            <Footer className= { classes.footer }/>
        </>
    );
}