import React from "react";
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
import "./Projects.css";

const Popover = (props) => {
  // props.handlePopoverClick=()=>{
  //     let a= document.getElementsByClassName('box')[0];
  //     a.classList.toggle('d-none')
  //   }
  const { handlePopoverClick, popoverPosition, activeCard,popoverHeight } = props;
  const { top, left } = popoverPosition;
  const getContentForCard = () => {
    switch (activeCard) {
      case 1:
        return (
          <>
            <h3 className="title">TextTools</h3>
            <p className="popover-text">
              TextTools is a powerful web application crafted with React,
              designed to provide users with an intuitive and smooth
              text-editing experience. The application boasts a stunning and
              user-friendly interface that ensures a seamless interaction for
              users. With its extensive range of text manipulation
              functionalities, TextTools empowers users to edit their text
              exactly as they desire.
            </p>
            <div
              className="my-3 d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <img src={texttools1} alt="" style={{ width: "300px" }} />{" "}
              <img src={texttools2} alt="" style={{ width: "300px" }} />
            </div>
            <div className="popover-text">
              <p>
                <h3 className="title">We can do the following operations</h3>
                <b>To Lowercase:</b> Converts text to lowercase for consistent
                formatting and style.<br></br>
                <b>To Uppercase:</b> Converts text to uppercase for emphasis or
                display purposes.<br></br>
                <b>Clear Extra Spaces:</b> Removes additional spaces to ensure
                tidy and organized text.<br></br>
                <b>First Letter Capital:</b> Capitalizes the first letter of
                each word, enhancing readability and presentation.<br></br>
                <b>Copy:</b> Copies text to clipboard, facilitating easy sharing
                or use in other applications.<br></br>
                <b>Clear:</b> Resets text input, undoing any changes made for a
                fresh start.
              </p>
            </div>
            <button
              style={{
                margin: "20px 0px",
                border: "none",
                background: "#a3ba97",
              }}
            >
              Visit Website
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="title">News Express</h3>
            <p className="popover-text">
              Immerse yourself in the world of news with News Express, a
              captivating React-based application that redefines your news
              reading experience. Seamlessly glide through a multitude of
              categories using React Router DOM, effortlessly discovering
              headlines presented in visually appealing and informative cards.
              Dive deeper into stories that matter to you with just a click on
              'Read More' feature smoothly transports you to full articles,
              making exploration seamless and engaging. With News Express,
              staying informed becomes an enchanting journey, where technology
              meets elegance for an unparalleled user adventure in the realm of
              news and information.
            </p>
            <div
              className="my-3 d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <img src={news1} alt="" style={{ width: "300px" }} />
              <img src={news3} alt="" style={{ width: "300px" }} />
            </div>
            <div className="popover-text">
              <p>
                <h3 className="title text-center">Working</h3>
                <b>Access the Web App:</b> Open "News Express" in your web
                browser to access latest news headlines presented beautifully in
                card format.<br></br>
                <b>Browse Headlines:</b> Scroll through the cards showcasing
                headlines, images, and summaries for quick news updates.
                <br></br>
                <b>Read More:</b> Click on any card to smoothly transition to a
                detailed news article for in-depth information.<br></br>
                <div className="my-2 d-flex justify-content-center">
                  <img src={news2} alt="" style={{ width: "250px" }} />
                </div>
                <b>Easy Navigation:</b> Utilize the intuitive UI to seamlessly
                navigate between articles and return to the main feed
                effortlessly.<br></br>
                <b>Stay Informed:</b> Stay professionally informed by accessing
                a variety of news topics in an elegant and user-friendly
                interface.<br></br>
              </p>
            </div>
            <button
              style={{
                margin: "20px 0px",
                border: "none",
                background: "#a3ba97",
              }}
            >
              Visit Website
            </button>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="title">iNoteBook</h3>
            <p className="popover-text">
              Discover iNoteBook: a sophisticated digital haven meticulously
              crafted for the modern mind. Fuelled by the robust React
              framework, iNoteBook epitomizes note-taking elegance, seamlessly
              intertwining form and function. Elevate your ideas within its
              intuitive interface, adorned with comprehensive CRUD operations :
              effortlessly create, retrieve, update, and delete notes. Security
              is paramount with user authentication, ensuring your musings
              remain yours alone. Powered by the magic of React Router Dom,
              navigation is a seamless journey, while MongoDB preserves your
              creations safely in its database. Embrace innovation, embrace
              iNoteBook : where creation, organization, and protection unite
              harmoniously.
            </p>
            <div className="my-3 d-flex justify-content-center" style={{ width: "100%" }}>
              <img
                src={inotebook1}
                alt=""
                style={{ width: "300px" }}
              />
            </div>
            <div className="popover-text">
            <h3 className="title text-center">Working :</h3>
              <p>
                <b>Sign Up or Log In:</b> Begin by securely creating your
                iNoteBook account or logging in.<br></br>
                <div className="my-3 d-flex justify-content-around" style={{ width: "100%" }}>
              <img 
                src={inotebook}
                alt=""
                style={{ width: "300px" }}
              />
               <img
                src={inotebook4}
                alt=""
                style={{ width: "300px" }}
              />
            </div>
                <b>Enhanced Security:</b> Your password is fortified using
                hashing, salting, and web tokens.<br></br>
                <b>Access Anywhere:</b> Access your notes seamlessly from
                anywhere, anytime, thanks to cloud storage.<br></br>
                <b>Explore Your Dashboard:</b> Navigate the elegant UI to manage
                notes effortlessly.<br></br>
                <b>Create and Edit:</b> Craft new notes or update existing ones,
                knowing they're stored in MongoDB permanently.<br></br>
                <div className="my-3 d-flex justify-content-around" style={{ width: "100%" }}>
              <img 
                src={inotebook2}
                alt=""
                style={{ width: "300px" }}
              />
              <img
                src={inotebook3}
                alt=""
                style={{ width: "300px" }}
              />
            </div>
                <b>Delete with Assurance:</b> Remove notes confidently, with
                your data safeguarded and easily retrievable.<br></br>
                <b>Reliable Storage:</b> Notes are stored in MongoDB, ensuring
                longevity and accessibility whenever you need them.<br></br>
                <b>User-friendly Experience:</b> Enjoy efficient CRUD operations
                with a professionally designed and secure platform.<br></br>
              </p>
            </div>
            <button
              style={{
                margin: "20px 0px",
                border: "none",
                background: "#a3ba97",
              }}
            >
              Visit Website
            </button>
          </>
        );
      // Add more cases for other cards as needed
      default:
        return null;
    }
  };

  return (
    <div className="container manualpopover" style={{ top: top, left: left,height:`${popoverHeight}px` }}>
      <div
        className={`box ${!handlePopoverClick ? "d-none" : ""}`}
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn my-2"
          style={{
            float: "right",
            border: "none",
            background: "white",
            position: "relative",
            right: "-47%",
          }}
          onClick={handlePopoverClick}
        >
          &times;
        </button>
        {activeCard && getContentForCard()}
      </div>
    </div>
  );
};

export default Popover;
