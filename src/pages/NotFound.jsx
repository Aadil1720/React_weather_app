import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="col-md-12 col-12 main_header_left align-items-center">
              <figure className="errImg">
                <img src="/images/404.png" className="img-fluid" alt="Aadil" />
              </figure>
              <p>Welcome to Aadil Technical World</p>
              <h1>No Item Found</h1>
              <Link to="/">
                <button>Go Back</button>
              </Link>
            </div>
          </div>
        </div>
        {/* right side div */}
      </div>
    </div>
    </>
  )
}

export default NotFound