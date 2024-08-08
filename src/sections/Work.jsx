import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import RUST from "../assets/rust.png";
import QSIB from "../assets/qsibBuilding.png";

import WPCard from "../components/WPCard";
import SectionTitle from "../components/SectionTitle";

import {qsibTools} from "../lib/utils";

const Work = () => {

  return (
    <div className="altbg-2" id="Work">
      <div className="py-5 text-center container-lg debug">
        <SectionTitle title="Work Experience" />
        <WPCard
          mainImage={QSIB}
          title="Querrey Simpson Institute for Bioelectronics"
          description="Software & Data Engineering Intern. Currently developing early-stage firmware for an implantable sensor aimed at early detection of organ transplant rejection."
          tools={qsibTools}
          hasCode={false}
          isFlipped={false}
          unpub={false}
          link="https://bioelectronics.northwestern.edu/"
        />
      </div>
    </div>
  );
};

export default Work;
