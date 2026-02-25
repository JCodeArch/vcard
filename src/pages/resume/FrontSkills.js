import React from "react";

export default function FrontSkills() {
  const frontEndSkills = [
    { name: "Web Design", percentage: 95 },
    { name: "Print Design", percentage: 65 },
    { name: "Logo Design", percentage: 80 },
    { name: "Graphic Design", percentage: 90 }
  ];

  return (
    <>
      <div className="block-title">
        <h3>
          Front <span>Skills</span>
        </h3>
      </div>

      <div className="skills-info skills-second-style">
        {frontEndSkills.map((skill, index) => (
          <div key={index} className="skill clearfix">
            <h4>{skill.name}</h4>
            <div className="skill-value">{skill.percentage}%</div>
            <div className={`skill-container skill-${index + 1}`}>
              <div className="skill-percentage"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
