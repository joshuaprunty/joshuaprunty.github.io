import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import SectionTitle from "../components/SectionTitle";

import {contactInfo} from "../lib/utils"

const Contact = () => {

  return (
    <div className="altbg-1" id="Contact">
      <div className="container-lg text-center py-5 debug">
        <SectionTitle title="Contact" />
        <div className="row px-5 d-flex justify-content-between">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="col-12 col-md-4 d-flex mx-auto justify-content-start justify-content-md-center text-center"
            >
              <img src={info.img} className="contactimg" alt={info.title} />
              <div className="text-start">
                <p className="mb-0 fw-light">{info.title}</p>
                <p>{info.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
