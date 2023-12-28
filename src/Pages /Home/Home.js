import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'; 
import "./Home.css"; 

const Home = () => {
  return (
    <div className="fullHeight">
      <div className="container">
        <Link to="/about" className="block about">
                  <div className="hover-text">
                      I'm a Full Stack Developer based in israel.
                      Developing web applications with passion and criativity.
                      Always steping out of my confort zone, expanding knowledge and achieving goals!<br/>
                     <br/><FontAwesomeIcon icon={faArrowAltCircleRight} className="continue-icon" />
                  </div>
        </Link>
        <Link to="/contact" className="block contact">
          <div className="hover-text">Contact</div>
        </Link>
      </div>
      <div className="container">
        <Link to="/name" className="block name floating-element"></Link>
        <Link to="/work" className="block work">
          <div className="hover-text color">Work</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
