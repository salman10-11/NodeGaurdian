import React from 'react'

const CodeBrowser = () => {
  return (<div>

  
    <header>
    {/* Intro settings */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    /* Default height for small devices */\n    #intro-example {\n      height: 300px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  "
      }}
    />
    <div
      id="intro-example"
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
            <h5 className="mb-4">
              Best &amp; free guide of responsive web design
            </h5>
            <a
              className="btn btn-outline-light btn-lg m-2"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              Start tutorial
            </a>
            <a
              className="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
              role="button"
            >
              Download MDB UI KIT
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Background image */}
  </header>
  <section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div className="card">
         
          <div className="card-body">
          <img
            src="/icons/chrome.jpeg"
            className="card-img-top"
            alt="Laptop"
          />
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-muted">
                  Laptops
                </a>
              </p>
              <p className="small text-danger">
                <s>$1099</s>
              </p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Notebook</h5>
              <h5 className="text-dark mb-0">$999</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">
                Available: <span className="fw-bold">6</span>
              </p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Combo Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: 35, height: 35 }}
            >
              <p className="text-white mb-0 small">x2</p>
            </div>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
            className="card-img-top"
            alt="Laptop"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-muted">
                  Laptops
                </a>
              </p>
              <p className="small text-danger">
                <s>$1199</s>
              </p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">HP Envy</h5>
              <h5 className="text-dark mb-0">$1099</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">
                Available: <span className="fw-bold">7</span>
              </p>
              <div className="ms-auto text-warning">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Combo Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: 35, height: 35 }}
            >
              <p className="text-white mb-0 small">x3</p>
            </div>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
            className="card-img-top"
            alt="Gaming Laptop"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-muted">
                  Laptops
                </a>
              </p>
              <p className="small text-danger">
                <s>$1399</s>
              </p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Toshiba B77</h5>
              <h5 className="text-dark mb-0">$1299</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">
                Available: <span className="fw-bold">5</span>
              </p>
              <div className="ms-auto text-warning">
                <i className="fa fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  

  </div>
  
  )
}

export default CodeBrowser