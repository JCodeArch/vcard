import React from "react";

export default function BackSkills() {
  const skills = [
    { name: "Azure DevOps / CI-CD", percentage: 80 },
    { name: "Kafka / RabbitMQ", percentage: 78 },
    { name: "Entity Framework / Dapper", percentage: 92 },
    { name: "xUnit / Testes Automatizados", percentage: 85 }
  ];

  return (
    <>
      <div className="block-title">
        <h3>
          Cloud <span>&amp; DevOps</span>
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
