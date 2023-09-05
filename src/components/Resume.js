import React from "react";
const Resume = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1ejwMIkjuyZnoiqHKOtHf3Te9tqXJ5ri7/view?usp=sharing";
  return (
      <div>
        <a href={pdfUrl} download="your-resume.pdf" target="_blank" rel="noreferrer">
          <button className="btn btn-dark">Resume</button>
        </a>
      </div>
  );
};

export default Resume;
