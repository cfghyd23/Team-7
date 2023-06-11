import React from 'react'
import './Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Status
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Leaderboard
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
           Orientation
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            Certifications
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar