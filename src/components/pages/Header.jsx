import React from 'react';
import logo from '../../image/logo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header:{
        position:"sticky",
        bottom: 0,
        left: 0,
        width: "100%"
        },
    menuButton: {
       // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        // display: "flex",
        // justifyContent: "flex-start"
    },
    appBar:{
        padding: "1rem 0",
        backgroundImage: "linear-gradient(180deg, #2669b4, #000000)",
        display: "flex",
        flexDirection: "row"
    },
    logo:{
        paddingLeft: "60px"
    },
    typography: {
        color:"white",
        alignSelf: "center",
        paddingLeft:"180px",
        fontSize:"1.5rem",
        fontFamily: "Papyrus"
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
    <div className={ classes.header }>
        <div className={ classes.root }>
            <div position="sticky" className={classes.appBar}>
                <Link to="/">
                <img src={logo} height={100} width={100} alt="" className={ classes.logo } />
                </Link>
               <div className={ classes.typography }>Fitness isn't about being better than someone else. It is about being better than yourself before.</div> 
                { /*<Typography variant="h5" className={ headerstyle.title }>{title}</Typography> */ }
            </div>
        </div>
    </div>
    );
}


// const Header = ({title}) => {
//     return (
//         <div className='container' style={{ display: "flex", flexDirection: "row"}}>
//             <img src={logo} height={100} width={100} alt="" />
//             <h3>{title}</h3>

//         </div>
//     )
// }

// export default Header
