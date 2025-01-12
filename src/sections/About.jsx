import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import CAMPUS from "../assets/campus.jpeg";

import {abtPara} from "../lib/utils";

const About = () => {

  return (
    <div className="altbg-2" id="About">
      <div className="py-5 text-center container-lg debug">
        <div className="px-4 row d-flex flex-column flex-md-row">
          <div className="text-center col-md-6 d-flex align-items-center justify-content-center">
            <img src={CAMPUS} className="abtImage rounded-3" />
          </div>
          <div className="px-0 text-center col-md-6 text-md-start d-flex flex-column justify-content-center">
            <h2 className="mx-auto mt-3 mb-3 w-abt txtabout">About Me</h2>
            {abtPara.map((paragraph, index) => (
              <p className="mx-auto w-abt text-muted txtsubabout" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
