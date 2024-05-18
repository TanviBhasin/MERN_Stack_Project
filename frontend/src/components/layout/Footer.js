import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Quick Link</h4>
          <Link className="btn btn-link" to={"/about"}>
            About Us
          </Link>
          <Link className="btn btn-link" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="btn btn-link" to={"/privacy"}>
            Privacy Policy
          </Link>
          <Link className="btn btn-link" to={"/terms"}>
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Contact</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Gallery</h4>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              eLEARNING
            </a>
            , All Right Reserved.
            <br />

          </div>
          
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
    </>
  )
}

  