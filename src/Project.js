import React from 'react'
import coffee from "../src/coffee.png"
import webcourse from "../src/webcourse.png"
import portfolio from "../src/portfolio.png"

const Project = () => {
  return (
    <>
      
      <div className="container">
        <div className="row pb-5 justify-content-center pt-5">
          <div className="col-lg-12 text-center pt-5 pb-5">
            <h1 className='display-1'>Projects</h1>
          </div>

          <div className="row">
            <div className="col-lg-4  pt-3">
              <div className="card"id="card">
                <img src={coffee}/>
                <div className="card-body">
                  <div className="card-title">
                    <h1>Coffee Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique!</p>
                    <a href='https://mohdzafar1.github.io/Hotcoffeeshop/'className='btn btn-outline-danger'>View Website</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4  pt-3">
              <div className="card"id="card">
                <img src={webcourse}/>
                <div className="card-body">
                  <div className="card-title">
                    <h1>Webcourse</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique!</p>
                    <a href='https://mohdzafar1.github.io/courseweb.github.io/' className='btn btn-outline-danger'>View Website</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  pt-3">
              <div className="card"id="card">
                <img src={portfolio}/>
                <div className="card-body">
                  <div className="card-title">
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique!</p>
                    <a href='https://mohdzafar1.github.io/uk.github.io/'className='btn btn-outline-danger'>View Website</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <footer id="about-footer" className=''>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center pt-5 pb-2">
                <i class="fab fa-facebook fa-3x text-primary" id="footer-icon"></i>
                <i class="fab fa-instagram fa-3x text-danger"id="footer-icon"></i>
                <i class="fab fa-linkedin fa-3x text-primary"id="footer-icon"></i>
                <a href='https://github.com/Mohdzafar1'> <i class="fab fa-github fa-3x text-light"id="footer-icon"></i></a>
                <p className='pt-3 text-light'>CopyRight @ 2022 All Right reserved</p>
                </div>
            </div>
        </div>
    </footer> */}

    </>
    
  )
}

export default Project