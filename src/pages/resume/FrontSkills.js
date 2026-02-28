import React from "react";

export default function FrontSkills() {
  const frontEndSkills = [
    { name: "C# / .NET Core", percentage: 95 },
    { name: "SQL Server / MongoDB", percentage: 88 },
    { name: "DDD / Clean Architecture", percentage: 92 },
    { name: "Microservices / APIs REST", percentage: 90 }
  ];

  return (
    <>
      <div className="block-title">
        <h3>
          Core <span>Skills</span>
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
