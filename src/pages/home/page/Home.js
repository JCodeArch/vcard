import React from "react";
import OwlCarousel from 'react-owl-carousel';

export default function Home({ classSectionIsActive }) {
  const subtitles = [
    { description: ".NET / C# Specialist" },
    { description: "Software Architect" },
    { description: "Back-End Engineer" },
    { description: "DDD & Clean Architecture" },
  ];
  const options = {
    loop: true,
    dots: false,
    nav: false,
    margin: 0,
    items: 1,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3800,
    animateOut: "animated-section-scaleDown",
    animateIn: "animated-section-scaleUp",
  };
  return (
    <section
      data-id="home"
      className={`animated-section start-page ${classSectionIsActive}`}
    >
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Jonathas Souza</h2>
              <OwlCarousel
                className="owl-theme" {...options}
              >
                {subtitles.map((subtitle, index) => (
                  <div key={index} className="item animated fadeIn">
                    <div className="sp-subtitle">{subtitle.description}</div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
