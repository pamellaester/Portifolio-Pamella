import React , { useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faRedoAlt, } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

import ProfilePic from "../../assets/profile.jpeg";

const About = () => {

  const [phraseOne, setPhraseOne] = useState("");
  const [lastPhraseOne, setLastPhraseOne] = useState("");

  const [phraseTwo, setPhraseTwo] = useState("");
  const [lastPhraseTwo, setLastPhraseTwo] = useState("");

  const handlePhraseOneSubmit = (event) => {
    event.preventDefault();
    const phrases = [
      "I enjoy exploring creative solutions, thinking outside the box to solve problems",
      "I believe empathy fosters strong connections",
      "My dream job? Working in the game industry",
      "Why did the computer catch a cold? It left its Windows open!",
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      // Add more phrases as needed
    ];

    let randomPhrase = "";
    do {
      randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (randomPhrase === lastPhraseOne);

    setPhraseOne(randomPhrase);
    setLastPhraseOne(randomPhrase);
  };

  const handlePhraseTwoSubmit = (event) => {
    event.preventDefault();
    const phrases = [
      "I love exploring new technologies and their applications",
      "I believe teamwork and collaboration lead to remarkable outcomes",
      "I'm originally from Brazil",
      "Why don't programmers like nature? It has too many bugs!",

    ];

    let randomPhrase = "";
    do {
      randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (randomPhrase === lastPhraseTwo);

    setPhraseTwo(randomPhrase);
    setLastPhraseTwo(randomPhrase);
  };


  return (
    <div className="contact-container">
      <div className="profile-container about">
      <h2>{phraseOne}</h2>
        <form onSubmit={handlePhraseOneSubmit}>
          <button type="submit">
          <h2>Tell me another anecdote</h2>
            <FontAwesomeIcon className="reload-icon" icon={faRedoAlt} />
          </button>
        </form>
      </div>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile">
            <img className="name floating-element" src={ProfilePic} alt="Profile" />
            <h1>Pamella Ester Sousa</h1>
            <p>Full Stack Developer</p> <br />
            <div className="skills-icons">
              <FontAwesomeIcon icon={faHtml5} title="HTML" />
              <FontAwesomeIcon icon={faCss3Alt} title="CSS" />
              <FontAwesomeIcon icon={faReact} title="React" />
              <FontAwesomeIcon icon={faNodeJs} title="Node.js" />
              <FontAwesomeIcon icon={faJs} title="JavaScript" />
              <FontAwesomeIcon icon={faPython} title="Python" />
              <FontAwesomeIcon icon={faDatabase} title="PostgreSQL" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-container about">
      <h2>{phraseTwo}</h2>
        <form onSubmit={handlePhraseTwoSubmit}>
          <button type="submit">
            <h2>Tell me another anecdote</h2>
            <FontAwesomeIcon className="reload-icon" icon={faRedoAlt} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
