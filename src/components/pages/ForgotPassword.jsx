import React, { useState } from 'react'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Container } from '@material-ui/core'
import NewTextField from './NewTextField'
import WhiteButton from './WhiteButton'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import axios from "axios"

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
    tbEmail: {
        paddingTop: "65px"
    },
    input:{
        color: "#ffffff"
    },

    loginButton: {
        paddingTop: "15px",
        paddingBottom:"20px"

    },
    top:{
        marginTop:"30px"
    },
    links: {
        paddingTop: "15px",
        paddingBottom: "15px"

    },
    emptydiv:{
        paddingTop:"100px"
    },
    center:{
        alignContent:"center",
        backgroundColor:"black",
        opacity: "0.7"
    }
}));

const ForgotPassword = () =>{
    const classes = useStyles();
    const [email,setEmail]=useState('')
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ reValidateMode: 'onSubmit' });
    const onSubmit = (data) => {
        axios('http://localhost:4000/forgot')
    }
    console.log(errors);
    return(
        <HeaderFooterContainer title="Forgot Password">
            <Container maxWidth="false" className={classes.container}>
                <div className={ classes.emptydiv }>

                </div>
            <form onSubmit={handleSubmit(onSubmit)} className={ classes.center } align="center">
            <div className= { classes.input }>
                Forgot your password?
            </div>
            <div  className= { classes.input }>
                Fill in your email address and we will send you an email to reset your password.
            </div>
            <div className={classes.tbEmail}>
                        <NewTextField
                        InputProps={{
                            className: classes.input,
                        }}
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                className:classes.input
                            }}
                            {...register("email",
                                {
                                    required: "Please fill in your email",
                                })}
                            onChange={handleEmail}                                
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                        />
                        </div>
            <div className={classes.loginButton}>
                        <WhiteButton type="submit" variant="outlined" color="primary">Reset Password</WhiteButton>
            </div>
            </form>
            </Container>
        </HeaderFooterContainer>
    )
}

export default ForgotPassword