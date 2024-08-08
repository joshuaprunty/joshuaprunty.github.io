import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import {navItems} from "../lib/utils";

const Footer = () => {
  return (
    <div class="altbg-2">
    <div id="Footer" class="container-lg text-start py-4">
      <div class="d-flex flex-row my-4 justify-content-around">
        <p class="fw-light">Home</p>
        <p class="fw-light">About</p>
        <p class="fw-light">Projects</p>
        <p class="fw-light">Work</p>
        <p class="fw-light">Contact</p>
      </div>

      <div class="d-flex flex-row justify-content-center">
        <div class="mt-6 mb-3 fw-lighter">
          © 2023 Joshua Prunty. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;