import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ab">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label className={`form-check-label text-${props.mode =="dark" ? "light":"dark"}`} >
          Dark Mode Switch
        </label>
      </div>
      </nav>
      
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Navbar"
}