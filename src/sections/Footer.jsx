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
          {navItems.map((item) => (
            <a href={item.href} class="fw-light text-decoration-none text-dark">
              {item.name}
            </a>
          ))}
        </div>

        <div class="d-flex flex-row justify-content-center">
          <div class="mt-6 mb-3 fw-lighter">
            © 2025 Joshua Prunty. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;