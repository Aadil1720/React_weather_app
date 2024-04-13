import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className=" about container-fluid">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
          <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to Aadil World</p>
              <h1>I am a <span style={{color:'blue'}}>Mern Stack Enthusiast</span> love to learn technical skills.</h1>
              <Link to="/weather"><button>check now</button></Link>
            </div>
            <div className="col-md-6 col-12 main_header_right">
              <figure>
                <img src="/images/avatar.jpeg" className="img-fluid" alt="Aadil" style={{ borderRadius: '50%', width:'75%' }} />
              </figure>
            </div>
            {/* left side div */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About