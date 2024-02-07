import React from 'react'
import SimpleTabs from './components/body/Body'
import HomePage from './components/pages/Home'
import LoginPage from './components/pages/Login'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App;