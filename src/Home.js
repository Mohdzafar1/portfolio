import React from 'react'
import banner from "../src/banner.webp"
import {NavLink} from "react-router-dom"


const Home = () => {
  return (
    <>
     <section  id="home">
       <div className='container'>
         <div className="row pt-5">
         <div className='col-lg-5 pt-5'>
          <h1 className='text-light display-1'>Hello,I'm Mohd Zafar </h1>
          <p className='lead text-danger'>I'm web developer & Designer</p>
          <span className='text-warning'>I am make a lot of project and very excited work with you </span><br/><br/>
          <NavLink className='btn btn-outline-danger me-3 'to="/project">View Project</NavLink>
          <NavLink className='btn btn-outline-primary' to="/contact">Contact Me</NavLink>
         </div>
         
        <div className="col-lg-7">
          <img src={banner} id="banner"/>
        </div>
         

         </div> 
    
       </div>
     </section>
     

    </>
  )
}

export default Home
