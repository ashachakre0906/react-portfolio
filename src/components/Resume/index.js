import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./resume.css";
import { uploadedFileLink } from "../../assets/images";
const Resume = () => {
  return (
    <>
      <a
        href={uploadedFileLink}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Button>
        <FontAwesomeIcon icon="fa-regular fa-cloud-arrow-down" />Download File</Button>
      </a>
    </>
  );
};

export default Resume;
