import React from 'react'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { MailOutline, Receipt, RingVolume } from '@material-ui/icons';

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
    eye: {
        cursor: 'pointer',
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
        backgroundRepeat:"round"
    },
    text: {
        marginLeft:"30px",
        color: "white",
        paddingBottom:"20px"
    },
    emptydiv:{
        paddingBottom:"100px"
    },
    worktime:{
        paddingTop:"15px",
    },
    phone:{
        paddingRight:"15px",
        paddingLeft:"50px"
    },
    address:{
        paddingRight:"15px"
    },
    main:{
        backgroundColor:"black",
        opacity: "0.7",
        alignItems:"center"

    }
}));

const Contact = () =>{
    const classes=useStyles()
    return(
        <HeaderFooterContainer title="Contact us">
            <Container maxWidth="false" className={classes.container}>
                <div className={ classes.emptydiv }>

                </div>
                <div className={ classes.main } align="center">
                <div className={ classes.text }>
                    <RingVolume className={ classes.phone }/>
                    Phone number: +359 888 123 456
                    <div className={ classes.worktime }>Monday-Friday: 10:00-19:00</div>
                    <div className={ classes.worktime }>Saturday: 10:00-16:00</div>
                </div>
                <div className={ classes.text }>
                    <MailOutline className={ classes.phone } />
                    E-Mail: fitnessmanager@gmail.com
                </div>
                <div className={ classes.text }>
                    <Receipt className={ classes.address } />
                    Address for correspondence:  
                </div>
                <div className={ classes.text }>
                Zlatin Zlatev
                    <div>"Studentska" str. 1</div>
                    <div>Varna, 9010</div>
                    <div> Bulgaria</div> 
                </div>
                </div>
            </Container>
        </HeaderFooterContainer>
    )
}

export default Contact