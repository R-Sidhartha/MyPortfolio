import React from "react";
import JSImg from "./pics/js.png";
import BootstrapImg from "./pics/bootstrap.png";
import ExternalApi from "./pics/External-Api.png";
import Reactpng from "./pics/reactpic.png";
import Nodejspng from "./pics/nodejs png.png";
import MongoDbpng from "./pics/mongodbimg.png";
import texttools1 from "./pics/textools1.png";
import texttools2 from "./pics/textools2.png";
import news1 from "./pics/news1.png";
import news2 from "./pics/news2.png";
import news3 from "./pics/news3.png";
import inotebook from "./pics/inotebook.png";
import inotebook1 from "./pics/inotebook1.png";
import inotebook2 from "./pics/inotebook2.png";
import inotebook3 from "./pics/inotebook3.png";
import gamepic from "./pics/2048app.png";
import weatherapp1 from "./pics/weatherapp1.png";
import weatherapp2 from "./pics/weatherapp2.png";
import csspic from "./pics/cssimg.png";
import HtmlImg from "./pics/Html.png";
import aistory1 from './pics/aistory1.png'
import aistory2 from './pics/aistory2.png'
import aistory3 from './pics/aistory3.png'
import aistory4 from './pics/aistory4.png'
import openaipng from './pics/openaipng.png'
import expresspic from "./pics/expressimg.png";

import "./Responsive.css";
import "./Projects.css";

export default function Projects(props) {
  const inputstyle = {
    background: `${props.mode !== "dark" ? "black" : "white"}`,
    color: `${props.mode === "dark" ? "black" : "white"}`,
  };
  return (
    <div
      className="projectsPage"
      style={{
        color: `${props.mode === "dark" ? "black" : "white"}`,
      }}
    >
      <div className="projects">
        <div className="project">
          <div className="card project-card " style={inputstyle}>
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="1000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={texttools1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={texttools2} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div style={{ border: "none", background: "none", ...inputstyle }}>
              <div className="card-body">
                <h3 className="text-center">TextTools</h3>
                <p className="card-text">
                  TextTools is a React-based web app with a stunning UI that
                  empowers users to manipulate text effortlessly. Featuring
                  functionalities like converting text to lowercase or
                  uppercase, clearing spaces, and more, it offers a seamless
                  text-editing experience.
                </p>
              </div>
              <div className="d-flex justify-content-center visit">
                <a
                  href="https://text-tools.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit WebSite
                </a>
              </div>
            </div>
            <div className="used my-2 d-flex align-items-center flex-column">
              <h4 className="text-center">Crafted With :</h4>
              <div className="usedtools">
                <img src={Reactpng} alt="" style={{ width: "50px" }} />
                <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
                <img src={JSImg} alt="" style={{ width: "90px" }} />
              </div>
            </div>
          </div>
          <div className="details">
            <h3 className="text-center title">Basic Level</h3>
            <p className="project-text">
              TextTools is a simple yet powerful text manipulation tool
              developed using React. It showcases foundational frontend
              technologies like React components, state management, and
              Bootstrap for styling. It provides a smooth user experience for
              editing text.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="level2projects d-flex">
            <div className="card projectcards" style={inputstyle}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="1000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={news1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={news2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={news3} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="card-body">
                  <h3 className="text-center">News Express</h3>
                  <p className="card-text">
                    News Express is a sophisticated React web application
                    powered by React Router DOM, offering seamless navigation
                    through diverse news categories. Leveraging an external API,
                    it elegantly presents news headlines in user-friendly cards.
                  </p>
                </div>
                <div className="d-flex justify-content-center visit">
                  <a
                    href="https://github.com/R-Sidhartha/NewsExpressApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source code
                  </a>
                </div>
              </div>
              <div className="used my-2 d-flex align-items-center flex-column">
                <h4 className="text-center">Crafted With :</h4>
                <div className="usedtools">
                  <img src={Reactpng} alt="" style={{ width: "50px" }} />
                  <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
                  <img src={ExternalApi} alt="" style={{ width: "50px" }} />
                </div>
              </div>
            </div>
            <div className="card projectcards" style={inputstyle}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="1000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={weatherapp1}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={weatherapp2}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="card-body">
                  <h3 className="text-center">ForecastCentral</h3>
                  <p className="card-text">
                    Elevate your weather experience with our beautifully
                    designed Bootstrap-powered app. Enjoy real-time updates
                    using external API and dynamic JavaScript functionality for
                    accurate forecasts and user-friendly interaction.
                  </p>
                </div>
                <div className="d-flex justify-content-center visit">
                  <a
                    href="https://forecastcentral.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WebSite
                  </a>
                </div>
              </div>
              <div className="used my-2 d-flex align-items-center flex-column">
                <h4 className="text-center">Crafted With :</h4>
                <div className="usedtools">
                  <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
                  <img src={JSImg} alt="" style={{ width: "90px" }} />
                  <img src={ExternalApi} alt="" style={{ width: "50px" }} />
                </div>
              </div>
            </div>
            <div className="card projectcards" style={inputstyle}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="1000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={gamepic} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="card-body">
                  <h3 className="text-center">2048-Game</h3>
                  <p className="card-text">
                    Dive into nostalgia with our classic 2048 game, crafted
                    using fundamental HTML, CSS, and JavaScript. Merge tiles,
                    strategize, and conquer the elusive 2048 tile for a timeless
                    gaming experience.
                  </p>
                </div>
                <div className="d-flex justify-content-center visit">
                  <a
                    href="https://two048-game-awca.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WebSite
                  </a>
                </div>
              </div>
              <div className="used my-2 d-flex align-items-center flex-column">
                <h4 className="text-center">Crafted With :</h4>
                <div className="usedtools">
                  <img src={HtmlImg} alt="" style={{ width: "50px" }} />
                  <img src={csspic} alt="" style={{ width: "60px" }} />
                  <img src={JSImg} alt="" style={{ width: "90px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <h3 className="text-center title">Intermediate Level</h3>
            <p className="project-text">
              News Express is an intermediate-level project that builds upon the
              foundational skills of React, JavaScript, and Bootstrap. It goes a
              step further by integrating an external API to fetch and display
              real-time news headlines. Users can explore news categories and
              read articles seamlessly.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="card project-card" style={inputstyle}>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators" style={{ background: "black" }}>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={inotebook} class="d-block w-100" alt="..." />
                  <div
                    class="carousel-caption d-none d-md-block"
                    style={{ color: "black" }}
                  >
                    <h5>Secured Authentication</h5>
                    <p style={{ fontSize: "0.7rem" }}>
                      "Experience top-tier security with our project, featuring
                      robust password hashing and salting to protect your
                      authentication process."
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={inotebook2} class="d-block w-100" alt="..." />
                  <div
                    class="carousel-caption d-none d-md-block"
                    style={{ color: "black" }}
                  >
                    <h5>Introducing Inote</h5>
                    <p style={{ fontSize: "0.7rem" }}>
                      "Effortlessly enhance your iNoteBook website with the
                      power to seamlessly add and manage notes."
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={inotebook1} class="d-block w-100" alt="..." />
                  <div
                    class="carousel-caption d-none d-md-block"
                    style={{ color: "black" }}
                  >
                    <h5>Your Notes, Your Way</h5>
                    <p style={{ fontSize: "0.7rem" }}>
                      "Discover, Organize, and Easily View All Your Notes on Our
                      User-Friendly Home Page."
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={inotebook3} class="d-block w-100" alt="..." />
                  <div
                    class="carousel-caption d-none d-md-block"
                    style={{ color: "black" }}
                  >
                    <h5>Streamline Note Management</h5>
                    <p style={{ fontSize: "0.7rem" }}>
                      "Seamlessly Perform Create, Read, Update, and Delete
                      Operations with Our User-Friendly Interface."
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-target="#carouselExampleCaptions"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true">
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-target="#carouselExampleCaptions"
                data-slide="next"
                style={{ color: "black" }}
              >
                <span class="carousel-control-next-icon" aria-hidden="true">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <span class="sr-only">Next</span>
              </button>
            </div>
            <div>
              <div className="card-body">
                <h3 className="text-center">iNoteBook</h3>
                <p className="card-text">
                  iNoteBook: Elevate your ideas with React-powered elegance.
                  Seamlessly manage notes, utilize CRUD operations, ensure
                  security through user authentication, and safeguard in
                  MongoDB. Embrace creation, organization, and innovation.
                </p>
              </div>
              <div className="d-flex justify-content-center visit">
                <a
                  href="https://inotebook-cloudstoring.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit WebSite
                </a>
              </div>
            </div>
            <div className="used my-2 d-flex align-items-center flex-column">
              <h4 className="text-center">Crafted With :</h4>
              <div className="usedtools">
                <img src={MongoDbpng} alt="" style={{ width: "150px" }} />
                <img src={expresspic} alt="" style={{ width: "150px" }} />
                <img src={Reactpng} alt="" style={{ width: "50px" }} />
                <img src={Nodejspng} alt="" style={{ width: "80px" }} />
                <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
              </div>
            </div>
          </div>
          <div className="card project-card my-3" style={inputstyle}>
            <div
              id="carouselExampleCaptions1"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators" style={{ background: "black" }}>
                <li
                  data-target="#carouselExampleCaptions1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions1"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions1"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions1"
                  data-slide-to="3"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={aistory1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={aistory2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={aistory3} class="d-block w-100" alt="..." />

                </div>
                <div class="carousel-item">
                  <img src={aistory4} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-target="#carouselExampleCaptions1"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true">
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-target="#carouselExampleCaptions1"
                data-slide="next"
                style={{ color: "black" }}
              >
                <span class="carousel-control-next-icon" aria-hidden="true">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <span class="sr-only">Next</span>
              </button>
            </div>
            <div>
              <div className="card-body">
                <h3 className="text-center">FictionFusionAI</h3>
                <p className="card-text">
                FictionFusionAI: Where Imagination Meets Technology. Authenticated users can harness AI to craft, post, and manage captivating stories. Engage with a community of readers, express your creativity, and fine-tune your tales through likes, dislikes, and personalized CRUD operations.
                </p>
              </div>
              <div className="d-flex justify-content-center visit">
                <a
                  href="https://fictionfusionai.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit WebSite
                </a>
              </div>
            </div>
            <div className="used my-2 d-flex align-items-center flex-column">
              <h4 className="text-center">Crafted With :</h4>
              <div className="usedtools">
                <img src={MongoDbpng} alt="" style={{ width: "150px" }} />
              <img src={expresspic} alt="" style={{ width: "150px" }} />
                <img src={Reactpng} alt="" style={{ width: "50px" }} />
                <img src={Nodejspng} alt="" style={{ width: "80px" }} />
                <img src={openaipng} alt="" style={{ width: "100px",background: `${props.mode === "dark" ? "white" : "white"}` }} />
                <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
              </div>
            </div>
          </div>
          <div className="details">
            <h3 className="text-center title">Advanced Level</h3>
            <p className="project-text">
              utilizes React for the frontend, demonstrating more complex
              navigation using React Router DOM. On the backend, Node.js, Express and
              MongoDB are used to create a fully functional and dynamic app,
              complete with CRUD operations and user authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
