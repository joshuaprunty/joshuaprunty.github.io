import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sections.css";

import WPCard from "../components/WPCard";

import VSC from "../assets/VSC.png";
import RACETRACK from "../assets/racetrack.png";
import RENU from "../assets/RENU.png";
import WEV from "../assets/wevsite.png";
import NRMS from "../assets/nrms.png";
import QUIZWIZ from "../assets/qw2.png";
import SectionTitle from "../components/SectionTitle";

import { nduTools, gasTools, renuTools, wevTools, profoundTools } from "../lib/utils";

const Projects = () => {
  return (
    <div className="altbg-2 " id="Projects">
      <div className="py-5 text-center container-lg debug">
        <SectionTitle title="Projects" />
        <WPCard
          mainImage={NRMS}
          title="Narrative Relationship Management System"
          description="A journalist-facing authoring tool and CMS for AI-augmented story generation from uploaded 'atomic story units'. Built with Next.js, Tailwind, and Firebase."
          tools={profoundTools}
          hasCode={true}
          isFlipped={false}
          addborder={false}
          unpub={false}
          isPrivate={false}
          link="https://github.com/joshuaprunty/nrms"
        />
        <WPCard
          mainImage={QUIZWIZ}
          title="QuizWiz"
          description="A web platform for generation of quizzes covering uploaded study materials. Built with Next.js, powered by OpenAI's GPT-4o with Zod."
          tools={profoundTools}
          hasCode={true}
          isFlipped={true}
          addborder={false}
          unpub={false}
          isPrivate={false}
          link="https://github.com/joshuaprunty/quiz-master"
        />
        <WPCard
          mainImage={RENU}
          title="Renu - NU Course Recommender"
          description="A React web app that interfaces with Northwestern's course catalog APIs. Users complete a short 'quiz' to receive personalized course recommendations via a proprietary algorithm."
          tools={renuTools}
          hasCode={true}
          isFlipped={false}
          addborder={false}
          unpub={false}
          isPrivate={false}
          link="https://github.com/joshuaprunty/renu"
        />
        {/* <WPCard
          mainImage={VSC}
          title="NU Dining Updates"
          description="A Python webscraping script and React web interface automated with
                AWS to send students daily dining hall menus, according to
                customizeable preferences."
          tools={nduTools}
          hasCode={true}
          isFlipped={true}
          addborder={false}
          unpub={false}
          link="https://github.com/joshuaprunty/DHEmailer"
        /> */}
        <WPCard
          mainImage={RACETRACK}
          title="Genetic Algorithms Simulator"
          description="A JS simulation of a genetic algorithm; evolving generations of 'cars' attempt to race a complete lap of the track without crashing. Visualized with P5.js."
          tools={gasTools}
          hasCode={true}
          isFlipped={true}
          addborder={false}
          unpub={false}
          isPrivate={false}
          link="https://github.com/joshuaprunty/GeneticAlgorithms"
        />

      </div>
    </div>
  );
};

export default Projects;
