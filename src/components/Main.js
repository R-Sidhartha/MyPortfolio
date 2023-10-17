import React from "react";
import Typed from "react-typed";
import "./Main.css";
import "./Responsive.css";
import HtmlImg from "./pics/Html.png";
import BootstrapImg from "./pics/bootstrap.png";
import csspic from "./pics/cssimg.png";
import Jspic from "./pics/javascriptimg.png";
import Reactpng from "./pics/reactpic.png";
import Nodejspng from "./pics/nodejs png.png";
import MongoDbpng from "./pics/mongodbimg.png";
import expresspic from "./pics/expressimg.png";
import mypic from "./pics/mypic.jpg";
import deployimg from "./pics/deployimg.png";
import gitimg from "./pics/gitimg.png";
import Resume from "./Resume";

export default function Main(props) {
 
  const inputstyle = {
    background: `${props.mode !== "dark" ? "black" : "white"}`,    color: `${props.mode === "dark" ? "black" : "white"}`,
  };
  return (
    <>
      <div className="background-pic img-fluid">
        <div className="topIntro">
          <h2>&lt;Welcome /&gt;</h2>
          <h1>&lt;I am R Sidhartha /&gt;</h1>
          <div>
            <Typed
              strings={[
                "Web Developer !",
                "Web Designer !",
                "Full Stack Developer !",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="typedtext"
            />
            <br />
          </div>
          <div className="resume my-3">
            <p style={{fontFamily:'lato',fontSize:'20px'}}>Have a look at my Resume</p>
             <Resume />
          </div>
        </div>
      </div>
      <div
        className="main"
        style={{ color: `${props.mode === "dark" ? "black" : "white"}` }}
      >
        <div className="main1">
          <div className="Introduction">
            <div className="Intro-text">
              <h1 className="career">
                <b>Personal Introduction</b>
              </h1>
              <p className="text">
                Allow me to introduce myself. My name is R Sidharth, an
                ambitious individual hailing from Hyderabad, India. With a
                fervent passion for continuous learning and exploration, I
                constantly seek out new opportunities to expand my knowledge and
                skills. Currently in my final year of pursuing a Bachelor's
                degree in Mechanical Engineering from the prestigious IIT
                Kanpur, I have demonstrated a keen interest in the realm of
                technology, particularly in web development and design.
                <br></br>
                While my academic focus lies in the mechanical field, my drive
                and enthusiasm have led me to delve into the dynamic world of
                technology. Embracing challenges with open arms, I view them as
                opportunities for personal growth and improvement. I am deeply
                grateful to those who have supported and guided me on my journey
                thus far.
                <br></br>
                With a genuine thirst for knowledge and a strong dedication to
                self-improvement, I am poised to contribute my expertise and
                skills to a professional environment that fosters innovation and
                growth. I eagerly anticipate the chance to showcase my
                capabilities during the interview process and demonstrate how I
                can be an asset to your organization.
              </p>
            </div>
            <div className="Intro-img">
              <img
                src={mypic}
                alt=""
                
              />
            </div>
          </div>
          <div className="main2">
            <div>
              {" "}
              <h1 className="career">
                <b>Core-Values</b>
              </h1>
            </div>
            <div
              className="line"
              style={{
                background: `${props.mode === "dark" ? "black" : "white"}`,
              }}
            >
              <div
                className="vertical-line"
                style={{
                  background: `${props.mode === "dark" ? "black" : "white"}`,
                }}
              ></div>
              <div
                className="vertical-line"
                style={{
                  background: `${props.mode === "dark" ? "black" : "white"}`,
                }}
              ></div>
              <div
                className="vertical-line"
                style={{
                  background: `${props.mode === "dark" ? "black" : "white"}`,
                }}
              ></div>
            </div>
            <div className="values">
              <div className="careerbox">
                <h2 className="career">Ambition</h2>
                <p className="text">
                  Ambition, to me, is about embracing challenges that foster
                  personal growth and lead to success. Throughout my journey, I
                  have consistently demonstrated a drive to surpass limitations
                  by setting and achieving short-term goals. Looking ahead, my
                  vision encompasses pursuing a Master's degree in Business to
                  further refine my skills and understanding of the corporate
                  world. I aspire to attain financial stability and earn the
                  respect that aligns with my dedication and capabilities.
                  Committed to continuous improvement, I eagerly embrace
                  challenges as stepping stones towards realizing remarkable
                  achievements in my professional path.
                </p>
              </div>
              <div className="careerbox">
                <h2 className="career">Passion</h2>
                <p className="text">
                  My passion for web development and design emerged despite my
                  academic focus on Mechanical Engineering at IIT Kanpur. While
                  I discovered this interest relatively late, I have now
                  committed to pursuing it ardently. I am resolute in continuing
                  my journey in web development and design, aiming to build a
                  career in this field. Moreover, I recognize the value of
                  complementing my technical skills with a Master's degree in
                  Business. This interdisciplinary approach will empower me to
                  leverage both my creative and analytical abilities for
                  substantial professional growth. By merging my passion for web
                  development with the strategic insights gained from studying
                  business, I am confident in forging a successful and
                  fulfilling career path.
                </p>
              </div>
              <div className="careerbox">
                {" "}
                <h2 className="career">Strentgh</h2>
                <p className="text">
                  One of my greatest strengths lies in my attitude towards
                  problems and my ability to embrace challenges. I view them as
                  opportunities for growth and improvement, constantly pushing
                  myself to learn new things that align with my interests.
                  Throughout my personal journey, the unwavering support and
                  encouragement from my parents and friends have been
                  instrumental in strengthening my resolve. Additionally, the
                  guidance and mentorship of exceptional teachers have served as
                  invaluable resources, nurturing my development from my early
                  schooling years to the present.
                </p>
              </div>
            </div>
          </div>
          <div className="tools" >
            <div className="head">
              <h2 className="career">Technical Proficiencies</h2>
            </div>
            <div className="skills">
              <div className="card align-items-center card-main"  style={inputstyle}>
                <img className="pic card-img-top" src={HtmlImg} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">HTML</h5>
                  <p className="card-text">
                    Proficient in basic HTML, I create structured and
                    semantically meaningful web pages. With a strong foundation
                    in HTML, I ensure clean and accessible markup, laying the
                    groundwork for visually appealing and search engine
                    optimized websites.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img className="pic card-img-top" src={csspic} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">CSS</h5>
                  <p className="card-text">
                    Proficient in CSS (Cascading Style Sheets), I bring visual
                    appeal and consistency to web designs. Through precise
                    styling and layout techniques, I transform concepts into
                    stunning interfaces. With a focus on responsiveness and
                    user-centric design.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img className="pic card-img-top" src={Jspic} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">JavaScript</h5>
                  <p className="card-text">
                    With expertise in JavaScript, including its asynchronous
                    nature, I develop interactive and dynamic web experiences.
                    Leveraging JavaScript's event-driven architecture and
                    powerful features like Promises and async/await.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img className="pic card-img-top" src={Reactpng} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">React</h5>
                  <p className="card-text">
                    As a React developer, I leverage the library's power to
                    create dynamic UIs. Utilizing component-based design and
                    virtual DOM, I build reusable, interactive elements. React's
                    ecosystem enables me to deliver high-performance web apps
                    with smooth navigation and state control.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img
                  className="default-pic card-img-top"
                  src={BootstrapImg}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">BootStrap</h5>
                  <p className="card-text">
                    I leverage this robust front-end framework to deliver
                    visually appealing and responsive websites. Bootstrap
                    empowers me to create modern, mobile-friendly designs while
                    maintaining flexibility and efficiency in development.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img
                  className="pic card-img-top "
                  src={Nodejspng}
                  alt="..."
                  style={{ width: "130px" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Node.js</h5>
                  <p className="card-text">
                    As a Node.js developer, I craft efficient and scalable
                    backends using its event-driven, non-blocking architecture.
                    With Node.js, I seamlessly manage data, user authentication,
                    and APIs, ensuring the creation of robust server-side
                    applications.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img
                  className="pic card-img-top"
                  src={MongoDbpng}
                  alt="..."
                  style={{ width: "180px" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">MongoDB</h5>
                  <p className="card-text">
                    I utilize MongoDB, a dynamic NoSQL database, for robust data
                    storage. Its adaptable document-oriented design accommodates
                    changing requirements, while powerful querying capabilities
                    ensure efficient and organized data management in
                    applications.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img
                  className="pic card-img-top"
                  src={expresspic}
                  alt="..."
                  style={{ width: "180px" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Express</h5>
                  <p className="card-text ">
                    Express.js, a lightweight Node.js framework, accelerates
                    server-side development. Its middleware structure and
                    routing streamline API creation and data management,
                    ensuring efficient backend solutions for modern web apps.
                  </p>
                </div>
              </div>
              {/* <div className="card align-items-center">
              <img className="pic card-img-top" src={expresspic} alt="..." style={{width:'180px'}}/>
              <div className="card-body">
                <h5 className="card-title text-center">Next.js</h5>
                <p className="card-text ">
                Next.js, a dynamic React framework, revolutionizes frontend development. Its SSR capabilities and routing streamline page rendering and navigation, empowering developers to craft fast and interactive web experiences with ease.
                </p>
              </div>
            </div> */}
              <div className="card align-items-center card-main" style={inputstyle}>
                <img className="pic card-img-top" src={gitimg} alt="..." style={{background:'white'}}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Git</h5>
                  <p className="card-text ">
                    In my web development journey, GitHub plays a vital role. I
                    utilize it to track my code changes, manage different
                    branches, and host my projects. It enables smooth
                    collaboration and ensures an organized and efficient
                    development workflow.
                  </p>
                </div>
              </div>
              <div className="card align-items-center card-main" style={inputstyle}>
                <img className="pic card-img-top" src={deployimg} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Deployment</h5>
                  <p className="card-text ">
                    Deployment releases software for use, involving server
                    setup, database configuration, and seamless component
                    interaction. Strategic deployment ensures reliability,
                    scalability, and minimal disruptions, crucial in software
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
