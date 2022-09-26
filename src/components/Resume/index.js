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
        {/* <Button>
          <FontAwesomeIcon icon={uploadedFileLink} />
          Download File
        </Button> */}
      </a>
      <embed
        src={uploadedFileLink}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="700px"
        width="100%"
      ></embed>
    </>
  );
};

export default Resume;
