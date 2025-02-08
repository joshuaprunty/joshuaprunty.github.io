import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import RUST from "../assets/rust.png";
import QSIB from "../assets/qsibBuilding.png";
import PROFOUND from "../assets/profound.png";
import WEV from "../assets/wevsite.png";

import {wevTools} from "../lib/utils";

import WPCard from "../components/WPCard";
import SectionTitle from "../components/SectionTitle";

import {qsibTools} from "../lib/utils";
import {profoundTools} from "../lib/utils";

const Work = () => {

  return (
    <div className="altbg-1" id="Work">
      <div className="py-5 text-center container-lg debug">
        <SectionTitle title="Work Experience" />
        <WPCard
          mainImage={PROFOUND}
          title="Profound"
          description="Software Engineering Consultant. Currently working across frontend, API integration, LLM Workflows, and DevOps tools for flagship AI search optimization software."
          tools={profoundTools}
          hasCode={false}
          isFlipped={false}
          unpub={false}
          link="https://www.tryprofound.com/"
        />
        <WPCard
          mainImage={QSIB}
          title="Querrey Simpson Institute for Bioelectronics"
          description="Software Engineering Intern. Developed Rust firmware for bioelectronic sensors, with a focus on detecting organ transplant rejection. Built suite of developer-facing tools, including bash scripts for RAM analysis and Swift-integrated data parsers."
          tools={qsibTools}
          hasCode={false}
          isFlipped={true}
          unpub={false}
          link="https://bioelectronics.northwestern.edu/"
        />
        <WPCard
          mainImage={WEV}
          title="Wev - Artist Catalog and Licensing Platform"
          // description="A comprehensive full-stack site for cataloging and editing an artist's published tracks. Built with React and Firebase, and interfacing with Spotify and email APIs. Completed as a freelance client project."
          description="Freelance full-stack development delivered to an independent client. Built web app for cataloging and licensing of published music, leveraging Spotify API for real-time fetching of current discography. Integrates a CMS allowing authorized users to rapidly manipulate all tracks and metadata."
          tools={wevTools}
          hasCode={false}
          isFlipped={false}
          addborder={true}
          unpub={false}
          link="https://wev-site.web.app"
        />

      </div>
    </div>
  );
};

export default Work;
