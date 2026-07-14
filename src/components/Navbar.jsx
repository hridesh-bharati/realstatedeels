import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark sticky-top py-3 shadow"
      style={{ backgroundColor: '#5E35AA' }}
    >
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div 
            className="rounded-circle bg-white fw-bold fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', color: '#5E35AA' }}
          >
            J
          </div>
          <span className="fs-4 fw-bold text-white tracking-wider">
            JAIPUR <span className="text-warning">WEALTH</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0 shadow-none text-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 gap-2 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link small text-uppercase ${isActive ? 'text-warning fw-bold' : 'text-white'}`} 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link small text-uppercase ${isActive ? 'text-warning fw-bold' : 'text-white'}`} 
                to="/why-us"
              >
                Why Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link small text-uppercase ${isActive ? 'text-warning fw-bold' : 'text-white'}`} 
                to="/corridors"
              >
                Growth Corridors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link small text-uppercase ${isActive ? 'text-warning fw-bold' : 'text-white'}`} 
                to="/framework"
              >
                Framework
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link small text-uppercase ${isActive ? 'text-warning fw-bold' : 'text-white'}`} 
                to="/insights"
              >
                Insights
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <Link 
                to="/consultation" 
                className="btn btn-warning rounded-pill px-4 py-2 small text-uppercase fw-semibold"
              >
                Book Strategy Call
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;