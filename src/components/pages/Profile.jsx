import React from 'react'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ProfileTabs from '../body/Body'

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
        backgroundRepeat: "round",
    },
    text: {
        color: "white"
    }
}));

const Profile = () =>{
    const classes = useStyles()
    return(
        <HeaderFooterContainer title="Contact us">
        <Container maxWidth="false" className={classes.container}>
           <ProfileTabs />
        </Container>
    </HeaderFooterContainer>    )
}

export default Profile