import React from 'react'
import zafar from "../src/Mohdzafar.jpeg"
const About = () => {
  return (
    <>
      <section className='pb-5'>
      <div className='container'>
      <div className="row pt-5">
        <div className="col-lg-7 col-12 pt-5 text-center">
          <img src={zafar} id="banner2" /><br/>
          <i class="fab fa-linkedin fa-3x text-center text-primary pt-3"id="media-icon"></i>
          <i class="fab fa-twitter-square fa-3x text-center text-primary pt-3"id="media-icon"></i>
          <i class="fab fa-instagram-square fa-3x pt-3 text-danger"id="media-icon"></i>
          <i class="fab fa-facebook-square fa-3x pt-3"id="media-icon"></i>
        </div>
        
        <div className="col-lg-5 pt-5">
          <h1 className='display-1 pt-5'>About Me</h1>
          <p>hiii this side me .And  i am <span>B.tech</span> student.My professional is web developement</p>
        </div>
      </div>
    </div>

      </section>
      {/* <footer id="about-footer" className=''>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center pt-5 pb-2">
                <i class="fab fa-facebook fa-3x text-primary" id="footer-icon"></i>
                <i class="fab fa-instagram fa-3x text-danger"id="footer-icon"></i>
                <i class="fab fa-linkedin fa-3x text-primary"id="footer-icon"></i>
                <NavLink to='https://github.com/Mohdzafar1'> <i class="fab fa-github fa-3x text-light"id="footer-icon"></i></NavLink>
                <p className='pt-3 text-light'>CopyRight @ 2022 All Right reserved</p>
                </div>
            </div>
        </div>
    </footer> */}
    </>
  )
}

export default About