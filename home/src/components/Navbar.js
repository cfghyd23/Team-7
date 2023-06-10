import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    
    return (
    <section id="header">
      <div className="menu-bar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="logo.png" width="40" height="auto" alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">All Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Companies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Walk-In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Govt.Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Internships</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="banner text-center">
        <h1>JOBS AROUND YOU</h1>
        <p>Keep Looking!</p>
      </div>
    </section>
  );
}


export default Navbar