import React from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <>
    <section id="service">
    
      <div className="row pb-5">
        <div className="col-lg-12 text-center  ">
          <h1 className='display-1'>SERVICES</h1>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-3 text-center  pb-5">
          <div className="card pt-3 bg-success"id="service-card">
          <i class="fas fa-desktop  fa-5x"></i>
          <div className="card-body pb-5">
            <div className="card-title">
              <h1 >Web Desginer</h1>
              <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, veniam?</p>
            </div>
          </div>
          </div>
        </div>

        <div className="col-lg-3 text-center pb-5">
          <div className="card  bg-primary"id="service-card">
          <i class="fas fa-code fa-5x"></i>
          <div className="card-body pb-5">
          <div className="card-title">
              <h1 className=''>Web Developer</h1>
              <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, veniam?</p>
            </div>
          </div>
          </div>
        </div>

        <div className="col-lg-3 text-center pb-5 mb-5 ">
          <div className="card  bg-info"id="service-card">
          <i class="fas fa-laptop-code fa-5x" ></i>
          <div className="card-body">
          <div className="card-title">
              <h1 className=''>Responsive Desgine</h1>
              <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, veniam?</p>
            </div>
          </div>
          </div>
        </div>

      </div>
     

    </section>
  
    </>
  )
}

export default Services