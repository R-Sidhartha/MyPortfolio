import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer" style={{ background: "#0a1f2f", color: "white" }}>
        <div
          className="footer-header my-3 text-center"
          style={{ textDecoration: "underline", fontSize: "22px" }}
        >
          Featured
        </div>
        <div className="footer-top mx-3">
          <div className="mx-3 d-flex ">
            <div className="footer-left d-flex">
              <div
                className=" text-center "
                style={{
                  overflow: "hidden",
                  width: "32vw",
                }}
              >
                <div className="body">
                  <h5
                    className="footer-title my-3"
                    style={{ fontFamily: "Lato" }}
                  >
                    R SIDHARTHA
                  </h5>
                  <p className="footer-text">
                    Aspiring web developer showcasing skills, projects, and
                    educational journey impact. <br></br>
                    <p>
                      Mail id:{" "}
                      <a href="mailto:sidiitn516@gmail.com">
                        sidiitn516@gmail.com
                      </a>
                    </p>
                  </p>
                </div>
                <h6
                  className="footer-title my-3"
                  style={{ fontFamily: "Lato" }}
                >
                  Copyright &copy; All rights reserved 2023.
                </h6>
              </div>
              <div
                className="horizontal-line mx-2"
                style={{ background: "black", width: "2px" }}
              ></div>
            </div>
            <div
              className="footer-right d-flex justify-content-between"
             
            >
              <div className="footer-socialmedia d-flex  ">
                <div className="footer-links d-flex " style={{ marginTop: "40px" }}>
                  <div>
                    <h6 className="footer-text">
                      "Full-Stack Developer: From front-end pixels to back-end
                      databases."
                    </h6>
                    <h3 className=" my-3">Social Media</h3>
                  </div>
                  <div className="icons">
                    <a
                      href="https://www.facebook.com/profile.php?id=100010776008988&mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        margin: "5px 10px",
                      }}
                    >
                      <i class="fa-brands fa-square-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://instagram.com/sid_an_enigmatic_story_?igshid=OGQ5ZDc2ODk2ZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        margin: "5px 10px",
                      }}
                    >
                      <i class="fa-brands fa-square-instagram fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/r-sidhartha-003a17262"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        margin: "5px 10px",
                      }}
                    >
                      <i class="fa-brands fa-linkedin fa-2xl"></i>{" "}
                    </a>
                    <a
                      href="https://www.threads.net/@sid_an_enigmatic_story_"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        margin: "5px 10px",
                      }}
                    >
                      <i class="fa-brands fa-square-threads fa-2xl"></i>
                    </a>
                    <a
                      href="https://github.com/R-Sidhartha"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        margin: "5px 10px",
                      }}
                    >
                      <i class="fa-brands fa-square-github fa-2xl"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="links d-flex flex-column justify-content-center align-items-center">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-link" to="/about">
                  About <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact <span className="sr-only">(current)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center footer-text" style={{ marginTop: "30px" }}>
            Thank you for visiting and exploring my portfolio!
          </p>
        </div>
      </div>
    </>
  );
}
