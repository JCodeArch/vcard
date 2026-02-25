import React from "react";

export default function BackSkills() {
  const skills = [
    { name: "JavaScript", percentage: 95 },
    { name: "PHP", percentage: 85 },
    { name: "HTML/CSS", percentage: 100 },
    { name: "Smarty/Twig", percentage: 75 },
    { name: "Perl", percentage: 90 }
  ];

  return (
    <>
      <div className="block-title">
        <h3>
          Back <span>Skills</span>
        </h3>
      </div>

      <div className="skills-info skills-second-style">
        {skills.map((skill, index) => (
          <div key={index} className="skill clearfix">
            <h4>{skill.name}</h4>
            <div className="skill-value">{skill.percentage}%</div>
            <div className={`skill-container skill-${index + 5}`}>
              <div className="skill-percentage"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
