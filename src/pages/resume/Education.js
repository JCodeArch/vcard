import React from "react";

export default function Education() {
  const educations = [
    {
      id: 1,
      year: "2023",
      institution: "XP Educação",
      title: "MBA — Arquiteto de Software & Arquiteto de Soluções",
      description:
        "Pós-graduação Lato Sensu com foco em arquitetura de software e soluções. Padrões arquiteturais, escalabilidade, microsserviços, cloud e design de sistemas distribuídos."
    },
    {
      id: 2,
      year: "2020 – 2021",
      institution: "Ibmec",
      title: "MBA — Investimentos e Private Banking",
      description:
        "Pós-graduação com foco em análise de investimentos, gestão de portfólio, gestão de riscos e compliance regulatório — complementando a experiência em sistemas financeiros."
    },
    {
      id: 3,
      year: "2006 – 2010",
      institution: "FMU — Faculdades Metropolitanas Unidas",
      title: "Bacharel em Ciências da Computação",
      description:
        "Graduação em Ciências da Computação com participação no Grupo de Desenvolvimento de Sistemas IA. Base sólida em algoritmos, estruturas de dados, engenharia de software e banco de dados."
    }
  ];

  return (
    <>
      <div className="block-title">
        <h3>Forma<span>ção</span></h3>
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
