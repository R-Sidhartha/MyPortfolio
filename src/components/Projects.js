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
import inotebook4 from "./pics/inotebook4.png";
import gamepic from './pics/2048app.png'
import weatherapp1 from './pics/weatherapp1.png'
import weatherapp2 from './pics/weatherapp2.png'
import csspic from "./pics/cssimg.png";
import HtmlImg from "./pics/Html.png";
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
      <div className="projects" >
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
          <div className="level2projects d-flex" >
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
                    <img src={weatherapp1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={weatherapp2} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="card-body">
                  <h3 className="text-center">ForecastCentral</h3>
                  <p className="card-text">
                  Elevate your weather experience with our beautifully designed Bootstrap-powered app. Enjoy real-time updates using external API and dynamic JavaScript functionality for accurate forecasts and user-friendly interaction.
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
                  Dive into nostalgia with our classic 2048 game, crafted using fundamental HTML, CSS, and JavaScript. Merge tiles, strategize, and conquer the elusive 2048 tile for a timeless gaming experience.
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
          <div className="card project-card " style={inputstyle}>
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="1000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={inotebook} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={inotebook1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={inotebook2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={inotebook3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={inotebook4} className="d-block w-100" alt="..." />
                </div>
              </div>
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
                <img src={Reactpng} alt="" style={{ width: "50px" }} />
                <img src={BootstrapImg} alt="" style={{ width: "50px" }} />
                <img src={JSImg} alt="" style={{ width: "90px" }} />
                <img src={ExternalApi} alt="" style={{ width: "50px" }} />
                <img src={Nodejspng} alt="" style={{ width: "80px" }} />
                <img src={MongoDbpng} alt="" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
          <div className="details">
            <h3 className="text-center title">Advanced Level</h3>
            <p className="project-text">
              utilizes React for the frontend, demonstrating more complex
              navigation using React Router DOM. On the backend, Node.js and
              MongoDB are used to create a fully functional note-taking app,
              complete with CRUD operations and user authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
