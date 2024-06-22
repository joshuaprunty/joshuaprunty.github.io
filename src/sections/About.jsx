import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import CAMPUS from "../assets/campus.jpeg";

import {abtPara} from "../lib/utils";

const About = () => {

  return (
    <div className="altbg-2" id="About">
      <div className="container-lg text-center py-5 debug">
        <div className="row d-flex flex-column flex-md-row px-4">
          <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
            <img src={CAMPUS} className="abtImage rounded-3" />
          </div>
          <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center px-0">
            <h2 className="w-abt mx-auto txtabout mb-3 mt-3">About Me</h2>
            <p className="w-abt mx-auto text-muted txtsubabout">{abtPara}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
