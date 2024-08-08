import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../sections/sections.css";

import GIT from "../assets/git.png";
import INTERNET from "../assets/internet.png";

const WPCard = ({
  mainImage,
  title,
  description,
  tools,
  hasCode,
  isFlipped,
  addborder
}) => {
  return (
    <div className="px-4 text-center row">
      <div
        className={`project-card mx-auto my-5 py-3 shadow rounded-4 d-flex flex-column-reverse ${isFlipped ? "flex-md-row" : "flex-md-row-reverse"}`}
      >
        {" "}
        <div className="px-3 col-md-6 px-md-5 d-flex flex-column justify-content-center">
          <h3 className="my-2 p-card-h">{title}</h3>
          <p className="my-2 p-card-p">{description}</p>
          <div className="mt-4 mb-2 d-flex justify-content-center">
            {tools.map((tool) => (
              <div className="mx-5 d-block">
                <img src={tool[0]} className="tool-icon" />
                <p className="fw-light icontext">{tool[1]}</p>
              </div>
            ))}
          </div>
          {hasCode ? (
            <a
              href="https://github.com/joshuaprunty/dininghall_scraper"
              target="_blank"
              className="py-0 mx-auto mt-1 mb-2 mybtnsm btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
            >
              <span className="my-0 text-black me-2">Code</span>
              <img src={GIT} className="h-50" />
            </a>
          ) : (
            <a
              href="https://bioelectronics.northwestern.edu/"
              target="_blank"
              className="py-0 mx-auto mt-1 mb-2 mybtnsm btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
            >
              <span className="my-0 text-black me-2">Website</span>
              <img src={INTERNET} className="h-50" />
            </a>
          )}
        </div>
        <div className="mx-auto mb-4 col-10 col-md-6 mb-md-0">
          <img
            src={mainImage}
            className={`my-auto w-100 rounded-4 img-fluid ${addborder ? "border border-secondary" : ""}`}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WPCard;
