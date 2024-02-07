import React from 'react'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import photo from '../../image/profpic.jpg'

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
    photo:{
        paddingLeft: "30%"
    },
    row:{
        color:"white",
        fontSize:"1rem",
        display: "flex",
        flexDirection:"row"
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
        backgroundRepeat: "round"
    },
    emptydiv:{
        paddingBottom:"70px"
    },
    name:{
        paddingLeft:"5%"
    },
    text: {
        color: "white",
        fontWeight: "600",
        fontSize:"1.4rem"
    },
    infotext:{
        color:"white",
        paddingLeft:"40%",
        fontSize:"1rem"
    },
    main:{
        backgroundColor:"black",
        opacity: "0.7",
        alignItems:"center"

    }
}));

const About = () => {
    const classes=useStyles()
    return(
        <HeaderFooterContainer title="Contact us">
        <Container maxWidth="false" className={classes.container}>
            <div className={ classes.emptydiv }>

            </div>
            <div className={ classes.main }>
            <div className={ classes.text } align="center">
               Who are we?
            </div>
        <div className={ classes.row} >
        <img src={ photo } height={80} width={80} alt="" className={ classes.photo }/>
        <div className={ classes.name }>Zlatin Zlatev</div>
        </div>
        <div className={ classes.infotext }>Zlatin is 22 years old. He has been training for 7 years. </div>
        <div className={ classes.infotext }>He is studying software technologies at the Technical university of Varna</div>
            </div>
        </Container>
    </HeaderFooterContainer>
    )
}

export default About