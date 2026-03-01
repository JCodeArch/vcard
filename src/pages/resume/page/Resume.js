import React from "react";

import Knowledges from "../Knowledges";
import BackSkills from "../BackSkills"
import FrontSkills from "../FrontSkills";
import Experience from "../Experience";
import Education from "../Education";

import Line from "../../../components/globals/Line";

export default function Resume({ classSectionIsActive }) {
  return (
    <section data-id="resume" className={`animated-section ${classSectionIsActive}`}>
      <div className="page-title">
        <h2>Resumo</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <Education />

            <Line length={50} />

            <Experience />
          </div>

          <div className="col-xs-12 col-sm-5">

            <FrontSkills />

            <Line length={10} />

            <BackSkills />

            <Line length={10} />
            <Knowledges />

          </div>
        </div>

      </div>
    </section>
  );
}
