import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home  container-fluid">
        <div className="  col-md-10 col-12 mx-auto">
          <div className=" row">
            <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to the weather app</p>
              <h1>Get the latest <span className="txt_color">Weather</span> Info of Your City</h1>
              <Link to="/weather">
                <button>check now</button>
              </Link>
            </div>
            <div className="col-md-6 col-12 main_header_right">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-interval="2000">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/stopwatch.png" class="d-block w-100" alt="Slide 1" />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/wapi.png" class="d-block w-100" alt="Slide 2" />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/wapi2.PNG" class="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home