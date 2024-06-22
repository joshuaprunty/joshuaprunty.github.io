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
      <div className="container-lg text-center py-5 debug">
        <SectionTitle title="Work Experience" />
        <WPCard
          mainImage={QSIB}
          title="Querrey Simpson Institute for Bioelectronics"
          description="Software & Data Engineering Intern. Currently working on firmware updates to optimize power consumption for an implantable ECG device."
          tools={qsibTools}
          hasCode={false}
          isFlipped={false}
        />
      </div>
    </div>
  );
};

export default Work;
