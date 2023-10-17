import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import "./Responsive.css";
import darkmode from "./pics/darkmode.png";
import lightmode from "./pics/lightmode.png";


export default function Header(props) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [istab, setistab] = useState(window.innerWidth > 460 && window.innerWidth < 990);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setistab(window.innerWidth > 460 && window.innerWidth < 990);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${location.pathname === "/" ? 'dark':( props.mode !== "dark" ? "dark" : "light")}
        ${(isMobile || istab) && isMenuExpanded ? 'bg-dark' : 'bg-transparent'} header`}
        style={{ position: "absolute", top: "0", width: `${isMobile || istab ? '100vw' : '97vw'}`, zIndex: "110", height:`${istab && isMenuExpanded ? '360px':""}`}}
      >
        <Link className="navbar-brand topheading" to="/" style={{color: location.pathname === "/" ? '#0a1f2f':( `${props.mode !== "dark" ? "rgb(92, 178, 157)" : "#0a1f2f"}`)}}>
         Sidharth's &nbsp; Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuExpanded ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
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
