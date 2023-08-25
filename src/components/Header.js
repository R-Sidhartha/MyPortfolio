import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "./Responsive.css";
import darkmode from "./pics/darkmode.png";
import lightmode from "./pics/lightmode.png";


export default function Header(props) {
  const location = useLocation();
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode !== "dark" ? "dark" : "light"}
        bg-transparent
         header`}
        style={{ position: "absolute", top: "0", width: "100vw", zIndex: "110"}}
      >
        <Link className="navbar-brand topheading" to="/" style={{color:`${props.mode !== "dark" ? "white" : "rgba(29, 58, 51, 0.9)"}`}}>
         Sidharth's &nbsp; Portfolio
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

        <div
          className="collapse navbar-collapse positionRight justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}>
              <Link className="nav-link" to="/">
               Home  <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={`nav-item ${
                  location.pathname === "/projects" ? "active" : ""
                }`}>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className={`nav-item ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className={`nav-item ${
                  location.pathname === "/contact" ? "active" : ""
                }`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
            <img
                onClick={props.darkmode}
                src={props.mode === "light" ? lightmode : darkmode}
                alt=""
                className="modepic"
              />
      </nav>
    </div>
  );
}
