import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import HeaderFooterContainer from '../container/HeaderFooterContainer'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { InputAdornment } from '@material-ui/core';
import InlineLink from './InlineLink'
import Step from '@material-ui/core/Step';
import { useHistory } from 'react-router';
import StepLabel from '@material-ui/core/StepLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import WhiteEmail from './WhiteEmail'
import WhiteEye from './WhiteEye'
import WhiteEyeOff from './WhiteEyeOff'
import NewTextField from './NewTextField'
import WhiteButton from './WhiteButton'
import SolidButton from './SolidButton'
import CustStepper from './CustStepper'
import WhiteLabel from './WhiteLabel'
import BWRadio from './BWRadio';
import style from '../../label.module.css'
import axios from "axios"
import WhiteMainLabel from './WhiteMainLabel';



function getSteps() {
    return ['Account details', 'Personal details'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Account details';
        case 1:
            return 'Personal details';
        default:
            return 'Unknown stepIndex';
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon:{
        color:"#61a0e7"
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
    backButton:{
        display:"inline-block"
    },
    nextButton:{
        position:"static",
        display:"inline-block"
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
        paddingTop: "35px"
    },
    tbPass: {
    },
    loginButton: {
        paddingTop: "15px"

    },
    input:{
        color: "#ffffff"
    },
    links: {
        paddingTop: "15px",
        paddingBot: "15px"

    },
    row: {
        display: "flex",
        flexDirection: "row"

    },
    column: {
        display: "flex",
        flexDirection: "column"
    },
    actRadio:{
        paddingTop: "35px",
        margin: "auto 0"
    },
    form:{
        backgroundColor:"black",
        opacity: "0.7",
        paddingBottom:"50px"
    },
    red:{
        color:"red"
    },
    tbs: {
        paddingRight: "250px"
    },
    leftpad: {
        paddingLeft: "100px"
    },
    act:{
        paddingLeft: "200px"
    }
}));

const Register = () => {
    const classes = useStyles();

    const [visible, setVisible] = useState(false)
    const [activeStep, setActiveStep] =useState(0);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confpassword,setConfPassword]=useState('')
    const [message, setMessage]=useState('')
    const [message2, setMessage2]= useState('')

    


    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    };

    const handlePassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    };

    const handleConfPassword = (event) =>{
        setConfPassword(event.target.value)
        console.log(confpassword)
    }
    const routerHistory = useHistory();
    const steps = getSteps();
    const handleNext = () => {
        if(email!=="" && password!=="" && confpassword!==""){
            if(password===confpassword){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
            else{
                setMessage("Passwords don't match!")
            }
        }
        else{
            setMessage("Please fill all fields!")
        }
    };
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ reValidateMode: 'onSubmit' });
    const onSubmit = (data) => {
        console.log(data)
        
        axios.post('http://localhost:4000/register', data,{headers: {
            'Content-Type': 'application/json',
        }}).
        then(response=>{
            if(response.data.code===200){
                localStorage.setItem('user',JSON.stringify(response.data.user))
                routerHistory.push(response.data.url)
            }
            else{
                window.location.reload(true);
                alert("There is already a profile with this email, please enter another one or login with your profil.")
            }
        })
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    console.log(errors);
    return (
        <HeaderFooterContainer title="Register" >
            <Container maxWidth="false" className={classes.container}>
                <CustStepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} className={ style.title }>
                            <StepLabel StepIconProps={{classes:{root: classes.icon}}}><div className={ classes.input }>{label}</div></StepLabel>
                        </Step>
                    ))}
                </CustStepper>
                <form className={ classes.form } onSubmit={handleSubmit(onSubmit)}>
                    {activeStep === 0 ?
                        <div align="center">
                            <div className={classes.tbEmail}>
                                <NewTextField
                                    label="Email"
                                    value={email}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        className: classes.input
                                    }}                                    
                                    InputProps={{
                                        className: classes.input,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <WhiteEmail />
                                            </InputAdornment>
                                        ),
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
                            
                            <div className={classes.tbPass}>
                                <NewTextField
                                    type={visible ? 'text' : 'password'}
                                    label="Password"
                                    value={password}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        className: classes.input
                                    }}       
                                    {...register("password",
                                        {
                                            required: "Please fill in your password",
                                        }
                                    )}  
                                    onChange={handlePassword}
                                    InputProps={{
                                        className: classes.input,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                { visible ? <WhiteEyeOff className={classes.eye} onClick={() => setVisible(!visible)} /> : <WhiteEye className={classes.eye} onClick={() => setVisible(!visible)} />}
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}
                                />
                            </div>
                            <div className={classes.tbPass}>
                                <NewTextField
                                    type={visible ? 'text' : 'password'}
                                    value={confpassword}
                                    label="Confirm password"
                                    margin="normal"
                                    variant="outlined"
                                    {...register("confpassword",
                                        {
                                            required: "Please confirm your password",
                                        }
                                    )}
                                    onChange={handleConfPassword}
                                    InputLabelProps={{
                                        className: classes.input
                                    }}       
                                    InputProps={{
                                        className: classes.input,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                { visible ? <WhiteEyeOff className={classes.eye} onClick={() => setVisible(!visible)} /> : <WhiteEye className={classes.eye} onClick={() => setVisible(!visible)} />}
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!errors.confpassword}
                                    helperText={errors?.confpassword?.message}
                                />
                                <div className={classes.red}>{message}</div>
                                <div className={classes.red}>{message2}</div>
                            </div>

                            <div className={classes.links}>
                                <InlineLink href="/login" title="Already have an account?" />
                            </div>
                        </div>
                        :
                        <div>
                            <div className={classes.leftpad}>
                                <div className={classes.leftpad}>
                                    <div className={classes.row}>
                                        <div className={classes.column}>
                                            <div className={classes.tbs}>
                                                <NewTextField
                                                type="number"
                                                
                                                    label="Age"
                                                    margin="normal"
                                                    variant="outlined"
                                                    {...register("age",
                                                    {
                                                        required: "Please enter your age",
                                                    }
                                                )}
                                                    InputLabelProps={{
                                                        className: classes.input
                                                    }}      
                                                    InputProps={
                                                        {
                                                            inputProps: { 
                                                                max: 100, min: 10 
                                                            },
                                                        className: classes.input
                                                    }}
                                                    error={!!errors.age}
                                                    helperText={errors?.age?.message}
                                                />
                                            </div>
                                            <div className={classes.tbs}>
                                                <NewTextField
                                                    type="number"
                                                    label="Height"
                                                    margin="normal"
                                                    variant="outlined"
                                                    {...register("height",
                                                    {
                                                        required: "Please enter your height",
                                                    }
                                                )}
                                                    InputLabelProps={{
                                                        className: classes.input
                                                    }}      
                                                    InputProps={{
                                                        inputProps: { 
                                                            max: 250, min: 130 
                                                        },
                                                        className: classes.input
                                                    }}
                                                    error={!!errors.height}
                                                    helperText={errors?.height?.message}
                                                />
                                            </div>
                                            <div className={classes.tbs}>
                                                <NewTextField
                                                    type="number"
                                                    label="Weight"
                                                    margin="normal"
                                                    variant="outlined"
                                                    {...register("weight",
                                                    {
                                                        required: "Please enter your weight",
                                                    }
                                                )}
                                                    InputLabelProps={{
                                                        className: classes.input
                                                    }}      
                                                    InputProps={{
                                                        inputProps: { 
                                                            max: 250, min: 30 
                                                        },
                                                        className: classes.input
                                                    }}
                                                    error={!!errors.weight}
                                                    helperText={errors?.weight?.message}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{paddingTop:"17px", paddingBottom:"17px"}}>
                                        <WhiteMainLabel component="legend">Physical activity</WhiteMainLabel>
                                        </div>
                                        <div>
                                        <RadioGroup aria-label="activity" name="activity1"   {...register("activity",
                                        {
                                            required: "Please choose your activity",
                                        }
                                    )}>
                                            <div className={classes.column}>
                                                <WhiteLabel value="veryLow" control={<BWRadio />} label="Very low- 0 times a week + office work" />
                                                <WhiteLabel value="low" control={<BWRadio />} label="Low- 1-2 times a week + office work or 0 times + physical work" />
                                                <WhiteLabel value="medium" control={<BWRadio />} label="Medium- 3 times a week + office work or 1-2 times + physical work" />
                                                <WhiteLabel value="high" control={<BWRadio />} label="High- 4-5 times a week" />
                                                <WhiteLabel value="exHigh" control={<BWRadio />} label="Extremely high- every day" />
                                            </div>
                                        </RadioGroup>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={classes.leftpad}>
                                    <div className={classes.tbs}>
                                        <WhiteMainLabel component="legend">Gender</WhiteMainLabel>
                                        <RadioGroup aria-label="gender" name="gender1"    {...register("gender",
                                        {
                                            required: "Please choose your gender",
                                        }
                                    )}>
                                        <div className={classes.row}>
                                            <WhiteLabel value="female" control={<BWRadio />} label="Female" />
                                            <WhiteLabel value="male" control={<BWRadio />} label="Male" />
                                        </div>
                                        </RadioGroup>
                                    </div>

                                </div>
                                <div className={classes.leftpad}>
                                <NewTextField
                                                    type="number"
                                                    label="Goal"
                                                    margin="normal"
                                                    variant="outlined"
                                                    {...register("goal",
                                                    {
                                                        required: "Please enter your goal",
                                                    }
                                                )}
                                                    InputLabelProps={{
                                                        className: classes.input
                                                    }}      
                                                    InputProps={{
                                                        inputProps: { 
                                                            max: 150, min: 30 
                                                        },
                                                        className: classes.input
                                                    }}
                                                    error={!!errors.height}
                                                    helperText={errors?.height?.message}
                                                />
                                </div>
                            </div>
                        </div>
                    }
                    <div className={classes.leftpad}>
                        <div className={classes.loginButton}>
                            <div>
                                    <div align="center">
                                        <div>
                                            <WhiteButton
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}
                                            >
                                                Back
              </WhiteButton>
                                            
                                                {activeStep === steps.length - 1 ?<SolidButton type="submit" onClick={handleSubmit} variant="outlined"  className={classes.nextButton}>Finish </SolidButton> : <SolidButton variant="outlined" type="button" onClick={handleNext} className={classes.nextButton}>Next </SolidButton>}
                                           
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </HeaderFooterContainer>
    )
}

export default Register