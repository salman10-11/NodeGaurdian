import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <header>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
      {/* Navbar */}
      {/* Background image */}
      <div
        className="p-5  bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
          height: 400
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex  h-100">
            <div className="text-white">
              <h1 className="mb-3">NodeGuardian</h1>
              <h4 className="mb-3">BoilerPlate Code</h4>
              <NavLink className="btn btn-outline-light btn-lg" to="/main/codebrowser" role="button">
                Generate Boilerplate Code          </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Background image */}

      <div className='mt-4'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://codetru.com/images/all/react-card.png"
                className="card-img-top"
                alt="Skyscrapers"
              />
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEcXrBTDXuCy1d4txTeDzqFvHjSa_lInudA&usqp=CAU"
                className="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://softprodigy.com/wp-content/uploads/2019/07/express-js.png"
                className="card-img-top"
                alt="Palm Springs Road"
              />
              <div className="card-body">
                <h5 className="card-title">Express.js</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This card has even longer content than the
                  first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>


  )
}

export default Home;