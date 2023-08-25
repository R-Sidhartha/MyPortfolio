import React from "react";
const Resume = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1ejwMIkjuyZnoiqHKOtHf3Te9tqXJ5ri7/view?usp=sharing";
  return (
      <div>
        <a href={pdfUrl} download="your-resume.pdf">
          <button className="btn btn-dark">Resume.Pdf</button>
        </a>
      </div>
  );
};

export default Resume;
