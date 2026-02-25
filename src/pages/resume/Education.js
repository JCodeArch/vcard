import React from "react";

export default function Education() {
  const educations = [
    {
      id: 1,
      year: "2008",
      institution: "University of Studies",
      title: "Frontend Development",
      description:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante."
    },
    {
      id: 2,
      year: "2007",
      institution: "University of Studies",
      title: "Graphic Design",
      description:
        "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor."
    }
  ];

  return (
    <>
      <div className="block-title">
        <h3>Education</h3>
      </div>

      <div className="timeline timeline-second-style clearfix">
        {educations.map((education) => (
          <div key={education.id} className="timeline-item clearfix">
            <div className="left-part">
              <h5 className="item-period">{education.year}</h5>
              <span className="item-company">{education.institution}</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <h4 className="item-title">{education.title}</h4>
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
