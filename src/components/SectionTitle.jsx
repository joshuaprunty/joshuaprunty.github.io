import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../sections/sections.css";

const SectionTitle = ({title}) => {
  return (
    <div className="row text-center px-5">
      <h2 className="txtabout">{title}</h2>
      <hr className="w-100 my-4 mx-auto" />
    </div>
  );
};

export default SectionTitle;
