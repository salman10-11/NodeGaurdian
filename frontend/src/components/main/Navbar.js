import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#289728'}}>
    {/* Container wrapper */}
    <div className="container">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <h2>Node Guardian</h2>
        </Link>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/codebrowser">
              Generate Boilerplate Code
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
      </div>
      
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar