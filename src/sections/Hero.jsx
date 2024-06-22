import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import LI from "../assets/linkedin.png";
import GIT from "../assets/git.png";
import HS from "../assets/headshotsquare.png";

const Hero = () => {
  return (
    <div className="altbg-1 heromargin" id="Home">
      <div className="container-lg text-center py-5 debug">
        <div className="row d-flex flex-column-reverse flex-md-row px-4">
          <div
            id="hero-text"
            className="col-md-6 d-flex flex-column justify-content-center px-1 px-md-5"
          >
            <div className="mx-2 mx-lg-5">
              <h1 className="text-center text-md-start greetingtext">
                Hi, I'm Josh.
              </h1>
              <p className="fw-light gsubtext text-center text-md-start mb-4">
                A Senior studying computer science at Northwestern University
              </p>
              <div className="text-center text-md-start">
                <a href="https://www.linkedin.com/in/joshua-prunty/">
                  <img src={LI} className="mx-2 homeicon" />
                </a>
                <a href="https://github.com/joshuaprunty">
                  <img src={GIT} className="mx-2 homeicon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center d-flex">
            <img
              src={HS}
              className="mb-4 mb-md-0 rounded-circle border-black border-5 mx-auto align-self-center headshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;