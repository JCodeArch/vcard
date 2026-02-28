import React from "react";

export default function Knowledges() {
  const knowledges = [
    "DDD",
    "CQRS",
    "Clean Architecture",
    "Clean Code",
    "Microservices",
    "C#",
    ".NET Core",
    "SQL Server",
    "MongoDB",
    "Kafka",
    "RabbitMQ",
    "Entity Framework",
    "Dapper",
    "xUnit",
    "Azure DevOps",
    "Scrum",
    "Kanban",
    "Design Patterns",
    "API REST",
    "SOLID"
  ];

  return (
    <>
      <div className="block-title">
        <h3>Tecno<span>logias</span></h3>
      </div>
      <ul className="knowledges">
        {knowledges.map((knowledge, index) => (
          <li key={index}>{knowledge}</li>
        ))}
      </ul>
    </>
  );
}
