import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light absolute-center  ">
        <div className="container">
          <Link to="/" className="navbar-brand ">
            UserQual
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-end w-100">
              <li className="nav-item mb-2">
                <Link to="/pricing" className="nav-link pricing">
                  PRICING
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link signin_btn">
                  SIGN IN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tester" className="nav-link transfer_btn">
                  BECOME A TESTER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
