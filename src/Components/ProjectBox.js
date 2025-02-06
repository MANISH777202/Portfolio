import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FacialAttendanceDesc:
      "A facial recognition attendance system built with Python, enabling automated and secure attendance tracking.",
    FacialAttendanceGithub:
      "https://github.com/MANISH777202/facial-recognistion-system-1",

    StudentApplicationDesc:
      "A student management application built with Java and Spring Boot, enabling secure enrollment and record management.",
    StudentApplicationGithub: "https://github.com/DevanshSahni/Rog-Free",

    BloggingApplicationDesc:
      "A full-featured blogging application built with the MERN stack and MySQL, enabling users to create, edit, and manage posts with secure authentication and rich text support.",
    BloggingApplicationGithub:
      "https://github.com/MANISH777202/micro-blogging-site",

    QuizApplicationDesc:
      "A dynamic quiz application built with Java and MySQL, enabling seamless question management, real-time scoring, and secure data storage.",
    QuizApplicationGithub: "https://github.com/MANISH777202/QUIZ-APPLICATION",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
