import React from "react";
import { Image } from "react-bootstrap";

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container d-flex">
            <img src="src/assets/Images/mth-logo.jpg" style={{height:60}} />
          <a className="navbar-brand" href="/">Muhammad Taimoor Hassan</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experties</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Experience</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
}

export default Header;