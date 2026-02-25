import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      period: "2016 - Current",
      company: "Google",
      title: "Lead Ui/Ux Designer",
      description:
        "Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
    },
    {
      id: 2,
      period: "2013 - 2016",
      company: "Adobe",
      title: "Senior Ui/Ux Designer",
      description:
        "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam."
    },
    {
      id: 3,
      period: "2011 - 2013",
      company: "Google",
      title: "Junior Ui/Ux Designer",
      description:
        "Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet."
    }
  ];

  return (
    <>
      <div className="block-title">
        <h3>Experience</h3>
      </div>

      <div className="timeline timeline-second-style clearfix">
        {experiences.map((experience) => (
          <div key={experience.id} className="timeline-item clearfix">
            <div className="left-part">
              <h5 className="item-period">{experience.period}</h5>
              <span className="item-company">{experience.company}</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <h4 className="item-title">{experience.title}</h4>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
