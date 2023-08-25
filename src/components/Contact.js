import React, { useState } from "react";
import contactpic from "./pics/contactpic.jpg";
import "./Contact.css";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEndpoint = "https://formspree.io/f/xnqkdvne"; // Replace with your Formspree endpoint URL

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Clear form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };
  const inputstyle = {
    background: `${props.mode !== "dark" ? "#060a14" : "white"}`,
    color: `${props.mode === "dark" ? "black" : "white"}`,
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        color: `${props.mode === "dark" ? "black" : "white"}`,
      }}
    >
      <div className="contact ">
        <div className="contact-msg">
          <h1 className="title" style={{ marginTop: "70px" }}>
            Contact Me
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 my-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control"
                id="exampleFormControlInput1"
                style={inputstyle}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                style={inputstyle}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="form-control"
                id="exampleFormControlInput1"
                style={inputstyle}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={inputstyle}
              ></textarea>
              <button
                className="my-3"
                style={{
                  border: "none",
                  background: "#9fca9f",
                  padding: "5px 5px",
                }}
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact-pic d-flex flex-column">
          <div className="contact-img">
            <img src={contactpic} alt="" />
          </div>
          <div className="socialmedia ">
            <h3>Follow Me on Social Media:</h3>
            <div className="links " style={{ marginTop: "40px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100010776008988&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `${props.mode === "dark" ? "#2a3f5a" : "white"}`,
                  margin: "0px 10px",
                }}
              >
                <i class="fa-brands fa-square-facebook fa-2xl"></i>
              </a>
              <a
                href="https://instagram.com/sid_an_enigmatic_story_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `${props.mode === "dark" ? "#2a3f5a" : "white"}`,
                  margin: "0px 10px",
                }}
              >
                <i class="fa-brands fa-square-instagram fa-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/r-sidhartha-003a17262"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `${props.mode === "dark" ? "#2a3f5a" : "white"}`,
                  margin: "0px 10px",
                }}
              >
                <i class="fa-brands fa-linkedin fa-2xl"></i>{" "}
              </a>
              <a
                href="https://www.threads.net/@sid_an_enigmatic_story_"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `${props.mode === "dark" ? "#2a3f5a" : "white"}`,
                  margin: "0px 10px",
                }}
              >
                <i class="fa-brands fa-square-threads fa-2xl"></i>
              </a>
              <a
                href="https://github.com/R-Sidhartha"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: `${props.mode === "dark" ? "#2a3f5a" : "white"}`,
                  margin: "0px 10px",
                }}
              >
                <i class="fa-brands fa-square-github fa-2xl"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
