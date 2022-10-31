import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resume.css";
import { uploadedFileLink } from "../../assets/images";
const Resume = () => {
  return (
    <>
      <div className="resume-sec">
        <h1 className="skill">Skills</h1>
        <h3 className="skill">Front-end</h3>
        <div>
          <ul className="skills-section1">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <h3 className="skill">Back-end</h3>
        <div>
          <ul className="skills-section1">
            <li>APIS</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySql Sequelize</li>
            <li>MongoDB Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        {/* <embed className="resume-section"
        src={uploadedFileLink}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="100vh"
        width="100%"
       ></embed> */}
        <a
          className="button"
          href={uploadedFileLink}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="button">
            <FontAwesomeIcon icon={uploadedFileLink} />
            Download Resume
          </button>
        </a>
      </div>
    </>
  );
};

export default Resume;
