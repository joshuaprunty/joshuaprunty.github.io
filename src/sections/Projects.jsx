import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import WPCard from "../components/WPCard";

import VSC from "../assets/VSC.png";
import RACETRACK from "../assets/racetrack.png";
import RENU from "../assets/RENU.png";
import SectionTitle from "../components/SectionTitle";

import { nduTools, gasTools, renuTools } from "../lib/utils";

const Projects = () => {
  return (
    <div className="altbg-1 " id="Projects">
      <div className="container-lg text-center py-5 debug">
        <SectionTitle title="Projects" />
        <WPCard
          mainImage={VSC}
          title="NU Dining Updates"
          description="Python webscraping script and React web interface automated with
                AWS to send students daily dining hall menus, according to
                customizeable preferences."
          tools={nduTools}
          hasCode={true}
          isFlipped={false}
        />
        <WPCard
          mainImage={RACETRACK}
          title="Genetic Algorithms Simulator"
          description="A JS simulation of a genetic algorithm; evolving generations of 'cars' attempt to race a complete lap of the track without crashing. Visualized with P5.js."
          tools={gasTools}
          hasCode={true}
          isFlipped={true}
        />
        <WPCard
          mainImage={RENU}
          title="Renu - NU Course Recommender"
          description="A React web app that interfaces with Northwestern's course catalog APIs. Users complete a short 'quiz' to receive personalized course recommendations via a proprietary algorithm."
          tools={renuTools}
          hasCode={true}
          isFlipped={false}
        />
      </div>
    </div>
  );
};

export default Projects;
