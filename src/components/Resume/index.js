import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resume.css";
import { uploadedFileLink } from "../../assets/images";
const Resume = () => {
  return (
    <>
      <a
        className="resume-sec"
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
      <embed className="resume-section"
        src={uploadedFileLink}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="100vh"
        width="100%"
      ></embed>
    </>
  );
};

export default Resume;
