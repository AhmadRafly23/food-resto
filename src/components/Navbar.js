import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid px-5">
          <a
            className="navbar-brand font-weight-light pr-5 mr-5"
            style={{ fontSize: "30px", color: "#acaaaa" }}
            href="#"
          >
            <span className="font-weight-bold" style={{ color: "#0D100C" }}>
              Food
            </span>
            Resto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link link mr-5" href="#">
                TABLE
              </a>
              <a className="nav-link link mr-5" href="#">
                MENU
              </a>
              <a className="nav-link link mr-5" href="#">
                ORDER STATUS
              </a>
              <a className="nav-link link mr-5" href="#">
                PAYMENT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
