import React from 'react'
import {NavLink} from "react-router-dom"
import Home from './Home';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';


const Navbar = () => {

  let navbar=document.querySelectorAll(".nav-link");
  let navcollapse=document.querySelector(".navbar-collapse.collapse");
  navbar.forEach(function(a){
    a.addEventListener("click",function(){
      navcollapse.classList.remove("show");
    })
  })


 


  return (
    <>
     
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/"><i class="fab fa-mailchimp fa-danger text-danger fa-2x"><span className='text-light'>U.K.</span></i></NavLink>
    <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
      <span className="navbar-toggler-icon "></span>
    </button>

         
    <div className="collapse navbar-collapse  justify-content-center" id="nav">
   
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/" id="pointer">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/about" id="pointer">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link text-light " to="skills" id="pointer">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/project" id="pointer">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/service" id="pointer">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/contact" id="pointer">Contact Us</NavLink>
        </li>
      </ul>    
     
    </div>
 

  </div>
</nav>
       
       <Home/>
       <Skills/>
       <Services/>
        <Contact/>

    </>
  )
}

export default Navbar