import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Container } from '@material-ui/core'
import WhiteButton from './WhiteButton'
import { Link } from 'react-router-dom'

import WhiteMainLabel from './WhiteMainLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        // display: "flex",
        // justifyContent: "flex-start"
    },
    appBar: {
        padding: "1rem 0"
    },
    typography: {
        color: "black"
    },
    container: {
        minHeight: "34rem",
        backgroundImage: "url(/img/bg3.jpg)",
        backgroundRepeat: "round",
    },
    form:{
        backgroundColor:"black",
        opacity:"0.7"
        },
    description:
    {
        display:"flex",
        flexDirection:"column"
    },
    tbEmail: {
        paddingTop: "65px"
    },
    input:{
        color: "#ffffff"
    },

    tbPass: {
    },
    loginButton: {
        paddingTop: "15px"

    },
    buttons:{
        paddingTop:"20px",
        paddingBottom:"20px",
        width:"40%"
    },
    links: {
        paddingTop: "15px",
        paddingBot: "15px"

    },
    firstlabel:{
        paddingBottom: "10px",
        marginTop:"20px"
    },
    labels:{
        paddingBottom: "10px"
    },
    emptydiv:{
        paddingBottom:"100px"

    },
    center:{
        alignContent:"center"
    }
}));
const HomePage = () =>{
    const classes=useStyles()
    return(
    <div>
       <HeaderFooterContainer title="Fitness isn't about being better than someone else. It is about being better than yourself before." >
            <Container maxWidth="false" className={classes.container}>
            <div className={ classes.emptydiv }>

            </div>
            <form className={ classes.form }>
            <div className={ classes.description } align="center">
                    <WhiteMainLabel className={ classes.firstlabel }>This is a free web app which allows you to track different details and progress in time.</WhiteMainLabel>
                    <WhiteMainLabel className={ classes.labels }>You can use the generator for training splits to receive a balanced split with concentration on preffered muscle.</WhiteMainLabel>
                    <WhiteMainLabel className={ classes.labels }>You also have the opportunity to generate reports in different areas.</WhiteMainLabel>
                    <WhiteMainLabel className={ classes.labels }>If you want to find all benefits you have with our app, just register, it's for free!</WhiteMainLabel>
            </div>
            <div className={classes.loginButton} align="center">
                        <div className={ classes.buttons }>
                        <Link to="/login">
                        <WhiteButton className={ classes.buttons } variant="outlined" color="primary">Login</WhiteButton>
                        </Link>
                        </div>
                        <div className={ classes.buttons }>
                        <Link to="/register">
                        <WhiteButton className={ classes.buttons } variant="outlined" color="primary">Register</WhiteButton>
                        </Link>
                        </div>
            </div>
            </form>
            </Container> 
        </HeaderFooterContainer>
    </div>
    )
}

export default HomePage