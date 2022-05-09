import React from 'react'

const Skills = () => {
  return (
    <>
     
      <section id="skill">
        <div className="container">
        <div className="row">
          <h1 className='text-center display-1 text-danger pt-5'>Skills</h1>
        </div>
          <div className="row  justify-content-center pt-5">
            <div className="col-lg-6 pt-5">
            <div class="progress"id="bar">
           <div class="progress-bar"id="bar-1">HTML</div>
            </div><br></br>
            <div class="progress"id="bar">
           <div class="progress-bar"id="bar-2">CSS</div>
            </div><br></br>
            <div class="progress"id="bar">
           <div class="progress-bar"id="bar-3">BOOTSTRAP</div>
            </div><br></br>
            <div class="progress"id="bar">
           <div class="progress-bar "id="bar-4">JAVASCRIPT</div>
            </div><br></br>
            <div class="progress"id="bar">
           <div class="progress-bar bg-success"id="bar-5">REACT.JS</div>
            </div><br></br>

            </div>
          </div>
        </div>
      </section>
     
      
    
    </>
  )
}

export default Skills