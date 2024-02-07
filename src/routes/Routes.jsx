import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "../components/pages/Login";
import Home from "../components/pages/Home";
import Register from "../components/pages/Register";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import Profile from "../components/pages/Profile";
import { Redirect } from 'react-router';
import ForgotPassword from "../components/pages/ForgotPassword";


export default function Router() {
return(
    <Switch>
        <Route exact path="/"  render={()=>{
          if(!(JSON.parse(localStorage.getItem('user')))){
            return <Home />
          }
          else{
            return <Redirect to={{pathname:"/profile"}} />
          }
        }} />
        <Route exact path="/login" render={()=>{
          if(!(JSON.parse(localStorage.getItem('user')))){
            return <Login />
          }
          else{
            return <Redirect to={{pathname:"/profile"}} />
          }
        }} />
        <Route exact path="/register" render={()=>{
          if(!(JSON.parse(localStorage.getItem('user')))){
            return <Register />
          }
          else{
            return <Redirect to={{pathname:"/profile"}} />
          }
        }} />
        <Route exact path="/contact" component= { Contact } />
        <Route exact path="/about" component= { About } />
        <Route exact path="/profile" render={()=>{
          if(JSON.parse(localStorage.getItem('user'))){
            return <Profile />
          }
          else{
            return <Redirect to={{pathname:"/login"}} />
          }
        }} />
        <Route exact path="/forgot" component= { ForgotPassword } />
    </Switch>
)
}