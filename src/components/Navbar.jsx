import React from 'react';
import { FaRegSnowflake, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid main_menu">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <FaRegSnowflake className="fa-snowflake" /> AadilWeather <FaRegSnowflake className="fa-snowflake" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <FaBars  />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/weather">Weather</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
