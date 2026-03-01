import React from "react";
import Filters from "../Filters";
import Works from "../Works";


export default function Portifolio({ classSectionIsActive }) {
  return (
    <section data-id="portfolio" className={`animated-section ${classSectionIsActive}`}>
      <div className="page-title">
        <h2>Portfólio</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="portfolio-content">
              <Filters />
              <Works />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
