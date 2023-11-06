import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

const Home = () => {
  return (
    <div>
      <section draggable="false" className="overflow-hidden pt-0" data-v-271253ee="">
        <section className="mb-10">
          {/* Background image */}
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage: 'url("/hero_img.jpg")',
              height: 500,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              backgroundColor: 'rgba(0, 0, 0, 0)'
            }}
            aria-controls="#picker-editor"
          >
            <div className="mask" style={{ backgroundColor: '#3e863db8' }}>
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-10">
                    <div className="text-white pb-md-5">
                      <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight">
                        <span>Boilerplate Code Generator</span> <br />
                        <span className="">
                          for <span className="">NodeJS</span>
                        </span>
                      </h1>
                      <Link className="btn btn-outline-light btn-lg py-3 px-5 me-2" to="/user/browser" role="button" aria-controls="#picker-editor">
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background image */}
        </section>
      </section>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <div className="col">
            <div className="card h-100">
              <img src="https://www.thinktanker.io/wp-content/uploads/2021/03/share-nodejs-logo.png" className="card-img-top" alt="Skyscrapers" />
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">
                  Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code on the server-side. It uses the V8 JavaScript engine,
                  which is the same engine that powers the Google Chrome web browser. Node.js provides an event-driven, non-blocking I/O (input/output) model, making it efficient
                  and scalable for building network applications.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body">
                <h5 className="card-title">React.js</h5>
                <p className="card-text">
                  React.js, also known as React, is an open-source JavaScript library developed by Facebook. It is primarily used for building user interfaces (UIs) for web
                  applications. React allows developers to create reusable UI components and efficiently update and render them when the underlying data changes.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://codedamn.com/assets/images/learnpaths/og/frontend.png" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">
                  Frontend, also known as client-side development, refers to the part of web development that focuses on the user-facing aspects of a website or web application. It
                  involves creating and implementing the visual and interactive elements that users see and interact with in their web browsers.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
