import React from "react";

export default function Knowledges() {
  const knowledges = [
    "Marketing",
    "Print",
    "Digital Design",
    "Social Media",
    "Time Management",
    "Communication",
    "Problem-Solving",
    "Social Networking",
    "Flexibility"
  ];

  return (
    <>
      <div className="block-title">
        <h3>Knowledges</h3>
      </div>
      <ul className="knowledges">
        {knowledges.map((knowledge, index) => (
          <li key={index}>{knowledge}</li>
        ))}
      </ul>
    </>
  );
}
