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
}) => {
  return (
    <div className="row text-center px-4">
      <div
        className={`project-card mx-auto my-5 py-3 shadow rounded-4 d-flex flex-column-reverse ${isFlipped ? "flex-md-row" : "flex-md-row-reverse"}`}
      >
        {" "}
        <div className="col-md-6 px-3 px-md-5 d-flex flex-column justify-content-center">
          <h3 className="p-card-h my-2">{title}</h3>
          <p className="p-card-p my-2">{description}</p>
          <div className="d-flex justify-content-center mt-4 mb-2">
            {tools.map((tool) => (
              <div className="d-block mx-5">
                <img src={tool[0]} className="tool-icon" />
                <p className="fw-light icontext">{tool[1]}</p>
              </div>
            ))}
          </div>
          {hasCode ? (
            <a
              href="https://github.com/joshuaprunty/dininghall_scraper"
              target="_blank"
              className="mybtnsm btn btn-outline-secondary btn-sm mx-auto d-flex align-items-center justify-content-center py-0 mt-1 mb-2"
            >
              <span className="me-2 my-0 text-black">Code</span>
              <img src={GIT} className="h-50" />
            </a>
          ) : (
            <a
              href="https://bioelectronics.northwestern.edu/"
              target="_blank"
              className="mybtnsm btn btn-outline-secondary btn-sm mx-auto d-flex align-items-center justify-content-center py-0 mt-1 mb-2"
            >
              <span className="me-2 my-0 text-black">Website</span>
              <img src={INTERNET} className="h-50" />
            </a>
          )}
        </div>
        <div className="col-10 mx-auto col-md-6 mb-4 mb-md-0">
          <img
            src={mainImage}
            className="w-100 rounded-4 my-auto img-fluid"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WPCard;
