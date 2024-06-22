import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import {navItems} from "../lib/utils";

const Footer = () => {
  return (
    <div className="bg-h-f">
      <div
        id="Footer"
        className="container-lg text-start py-4 debug"
      >
        <div className="row d-flex flex-row justify-between">
          {navItems.map((item) => (
            <span className="text-white my-1 fw-light">{item.name}</span>
          ))}
        </div>
        <div className="row">
          <div className="col mt-3 text-white my-1 fw-lighter">
            © 2023 Joshua Prunty. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;