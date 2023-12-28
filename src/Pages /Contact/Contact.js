import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faFileDownload } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"; 
import FlamingoImage from "../../assets/flamingo.png";
import CVFile from "../../assets/resume.pdf";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="contact-header floating-element">Get in Touch</h2>
        <a
          href="https://linkedin.com/in/pamellaester"
          className="icon linkedin-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
        </a>
        <a
          href="https://github.com/pamellaester"
          className="icon github-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
        </a>
        <p className="email">
          <a href="mailto:pamellaester.ps@gmail.com" className="email-link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> pamellaester.ps@gmail.com
          </a>
        </p>
        <a className="cv-download" href={CVFile} download>
          <FontAwesomeIcon icon={faFileDownload} /> Download CV
        </a>
      </div>

      <div className="flamingo-container">
        <img
          src={FlamingoImage}
          alt="Flamingo illustration"
          className="flamingo-img"
        />
      </div>
    </div>
  );
};

export default Contact;
