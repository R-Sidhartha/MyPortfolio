import React from "react";
import Fastpic from "./pics/fastpng.png";
import Intuitiveimg from "./pics/intutive.png";
import Responsiveimg from "./pics/responsivepic.png";
import Dynamicpic from "./pics/dynamicpic.png";
import Seopic from "./pics/seopic.png";
import Reactsinglepage from "./pics/reactpic.png";
import Backendpic from "./pics/backend.png";
import mypic2 from "./pics/mypic3.jpg";
import "./Pic3D.css";
import "./About.css";

export default function About(props) {
  const inputstyle = {
    background: `${props.mode !== "dark" ? "black" : "white"}`,
    color: `${props.mode === "dark" ? "black" : "white"}`,
  };
  return (
    <div
      style={{
        color: `${props.mode === "dark" ? "black" : "white"}`,
      }}
    >
      <h3 className="text-center title aboutpage">What Can i DO ?</h3>
      <div className="services my-4">
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="cardimg">
            <img src={Fastpic} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Fast</h5>
            <p className="card-text">
              I optimize websites to load swiftly, enhancing user engagement and
              reducing bounce rates.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="cardimg">
            <img src={Intuitiveimg} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Intuitive Design</h5>
            <p className="card-text">
              User-centric interfaces that require minimal effort, ensuring
              users find what they need effortlessly.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="cardimg">
            <img src={Responsiveimg} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Responsive Layouts</h5>
            <p className="card-text">
              Designs that adapt seamlessly across devices, guaranteeing an
              optimal experience on any screen size.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="defaultcardimg">
            <img src={Dynamicpic} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Dynamic Functionality</h5>
            <p className="card-text">
              I create interactive elements that engage users and provide a
              dynamic, personalized experience.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="defaultcardimg">
            <img src={Seopic} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">SEO Optimization</h5>
            <p className="card-text">
              I implement SEO best practices to ensure your website ranks higher
              on search engines, driving organic traffic.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="cardimg">
            <img
              src={Reactsinglepage}
              className="card-img-top"
              alt="..."
              style={{ width: "85px", height: "75px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">
              SPA{" "}
              <span style={{ fontSize: "10px" }}>
                (Single Page Applications)
              </span>
            </h5>
            <p className="card-text">
              Leveraging React and DOM manipulation, I build SPAs that deliver
              smooth transitions and eliminate page reloads for enhanced user
              engagement.
            </p>
          </div>
        </div>
        <div className="card align-items-center about-card" style={inputstyle}>
          <div className="cardimg">
            <img
              src={Backendpic}
              className="card-img-top"
              alt="..."
              style={{ height: "130px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Backend Logic</h5>
            <p className="card-text">
              I craft robust backend logic to power your application, handling
              data processing, user authentication, and seamless integration
              with databases.
            </p>
          </div>
        </div>
      </div>
        <h3 className="card-title text-center"style={{marginTop:'100px'}}>Into My World: Personal Insights and Details </h3>
      <div className="about d-flex justify-content-center align-items-center" style={{marginTop:'25px'}}>
        <div
          className="card align-items-center about-card"
          style={{ margin: "10px 100px", ...inputstyle ,border:'none'}}
        >
          <div className="cardimg" style={{ height: "550px", width: "385px" }}>
            <img src={mypic2} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center"> Sidharth <span style={{fontSize:'11px'}}>(Exploration Snapshot)</span></h5>
            <p className="card-text">
            "Lost in the Serenity of Manali: Capturing moments that inspire my journey of exploration and growth."
            </p>
          </div>
        </div>
        <div className="info-text" >
          <h5>Unveiling the Explorer Within</h5>
          <p>
            Greetings! I'm R Sidharth, a seeker of knowledge and an architect of
            experiences, proudly representing Hyderabad, India. Embarking on a
            journey of endless curiosity and unquenchable enthusiasm, I find
            myself in a constant pursuit of innovation and growth.
          </p>
          <h5>Mechanical Mindset, Digital Dreams</h5>
          <p>
            Currently navigating the final stretch of my Mechanical Engineering
            odyssey at IIT Kanpur, I'm not just confined to gears and equations.
            My passion for technology has led me to the vibrant intersection of
            web development and design. Merging the principles of precision from
            my mechanical studies with the artistry of coding, I'm crafting
            digital landscapes that engage and inspire.
          </p>
          <h5>mbracing Challenges as Catalysts</h5>
          <p>
            Challenges aren't roadblocks; they're catalysts for evolution. I
            thrive on deciphering complexities and transforming them into
            opportunities for personal and professional enhancement. With each
            challenge, I've discovered new dimensions of myself and my
            abilities, proving that resilience is the true cornerstone of
            growth.
          </p>
          <h5>Guided by Gratitude</h5>
          <p>
            Every milestone I've crossed is a testament to the invaluable
            guidance and unwavering support from mentors, friends, and family.
            Their belief in me has been the wind beneath my wings, propelling me
            to reach new heights in my pursuit of excellence.
          </p>
          <h5>Crafting Tomorrow's Innovations</h5>
          <p>
            As I stand on the precipice of my career, I'm fueled by an
            insatiable thirst for knowledge and a relentless desire to
            contribute to a world brimming with innovation. I'm not just seeking
            a job; I'm seeking a canvas to create, a platform to innovate, and a
            stage to inspire.
          </p>
          <h5>Ready to Connect, Ready to Collaborate</h5>
          <p>
            If you're seeking a dynamic individual who combines the art of
            mechanics with the magic of technology, let's connect. Together, we
            can explore uncharted territories, reimagine possibilities, and
            leave an indelible mark on the landscape of innovation.
          </p>
          Thanks for taking the time to get to know me better. Let's shape the
          future together!
        </div>
      </div>
    </div>
  );
}
