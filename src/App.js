import React from 'react'
import {Switch ,Route,Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Service from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar"
import Footer from './Footer';



const App = () => {
  return (
    <>
       <Navbar/>
       <Switch>
         <Route exact path ="/home" component={Home}/>
         <Route  exact path ="/about" component={About}/>
         <Route  exact path ="/skills" component={Skills}/>
         <Route  exact path ="/project" component={Project}/>
         <Route exact path="/service" component={Service}/>
         <Route  exact path ="/contact" component={Contact}/>
         <Redirect to="/" />
       </Switch>
       <Footer/>
       

    </>
  )
}

export default App
