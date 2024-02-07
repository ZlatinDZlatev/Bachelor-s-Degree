import React, { useState } from 'react'
import { Container, TextField } from '@material-ui/core'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { InputAdornment } from '@material-ui/core';
import InlineLink from './InlineLink'
import WhiteEmail from './WhiteEmail'
import { Link } from 'react-router-dom'
import WhiteEye from './WhiteEye'
import WhiteEyeOff from './WhiteEyeOff'
import NewTextField from './NewTextField'
import WhiteButton from './WhiteButton'
import axios from "axios"
import WhiteLabel from './WhiteLabel';

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
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
    red:{
        color:"red"
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
    links: {
        paddingTop: "15px",

    },
    lastlink:{
        paddingTop: "15px",
        paddingBottom:"20px"
    },
    emptydiv:{
        paddingBottom:"100px"
    },
    form:{
        alignContent:"center",
        backgroundColor:"black",
        opacity: "0.7",
        width:"40%",
        marginLeft:"30%"
    },
    center:{
        alignContent:"center"
    }
}));

const LoginPage = () => {
    const classes = useStyles();

    const [visible, setVisible] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ reValidateMode: 'onSubmit' });
    const [message, setMessage]=useState('')
   
    const routerHistory = useHistory();
    const onSubmit = (data) => {
        console.log(data)
      axios.post('http://localhost:4000/login', data ,{headers: {
        'Content-Type': 'application/json',
    }} )
      .then(response=>{
          console.log(response)
          if(response.data.code===200){
          localStorage.setItem('user',JSON.stringify(response.data.user))
          routerHistory.push(response.data.url);
          }
          else{
              setMessage(response.data.message)
          }
      })
      .catch(error=> {
        console.log(error);
      })
    }
    console.log(errors);

    return (
        <HeaderFooterContainer title="Fitness isn't about being better than someone else. It is about being better than yourself before." >
            <Container maxWidth="xl" className={classes.container}>
                <div className={ classes.emptydiv }>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={ classes.form } align="center">
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
                            InputProps={{
                                className: classes.input,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <WhiteEmail /> 
                                    </InputAdornment>
                                )
                            }}
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                        />
                    </div>
                    <div className={classes.tbPass}>
                        
                        <NewTextField
                            type={visible ? 'text' : 'password'}
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            borderColor='white'
                            {...register("password",
                                {
                                    required: "Please fill in your password",
                                }
                            )}
                            InputLabelProps={{
                                className:classes.input
                            }}
                            FormHelperTextProps={{
                                className:classes.input
                            }}
                            InputProps={{
                                className:classes.input,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        { visible ? <WhiteEyeOff className={classes.eye} onClick={() => setVisible(!visible)} color="primary"/> : <WhiteEye className={classes.eye} onClick={() => setVisible(!visible)} color="primary" />}
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        />
                     <div className={classes.red}>{message}</div>
                    </div>
                    <div className={classes.loginButton}>
                        <WhiteButton type="submit" variant="outlined" color="primary">Login</WhiteButton>
                    </div>
                    <div className={classes.links}>
                    <InlineLink href="/forgot" title="Forgot password?" />
                    </div>
                    
                    <div className={classes.lastlink}>
                        <InlineLink href="/register" title="Don't have an account?" />
                    </div>
                </form>
            </Container>
        </HeaderFooterContainer>
    )
}

export default LoginPage


