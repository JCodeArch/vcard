import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      period: "ago/2023 – presente",
      company: "act digital",
      title: "Engenheiro de Software Sênior .NET",
      description:
        "Atuando como Desenvolvedor Sênior .NET junto ao cliente Caixa Vida e Previdência. Responsável por design de soluções, desenvolvimento de APIs e microsserviços, e mentoria técnica da equipe. Foco em Clean Architecture, DDD e alta disponibilidade."
    },
    {
      id: 2,
      period: "jul/2019 – jan/2023",
      company: "XP Inc.",
      title: "Engenheiro de Software Sênior",
      description:
        "Integrei squads de Previdência, Carteira Global e Câmbio. Desenvolvi o software de consolidação de posição, projeto Carteira Global e lancei o MVP de Câmbio. Stack: C#, SQL Server, MongoDB, Kafka, RabbitMQ, Clean Architecture, DDD, CQRS, xUnit."
    },
    {
      id: 3,
      period: "nov/2015 – mar/2019",
      company: "Ebix Latin America",
      title: "Analista Desenvolvedor .NET",
      description:
        "Desenvolvimento do sistema CADOP para Zurich Seguros, Simulador de Previdência e atuação na squad de Previdência da XP Investimentos. Stack: .NET Framework, C#, SQL Server, Entity Framework, ASP.NET, Web Services."
    },
    {
      id: 4,
      period: "mai/2014 – out/2015",
      company: "Anixter do Brasil",
      title: "Analista de TI",
      description:
        "Equipe global (Brasil, UK, EUA, México) para sistema de cotações com cálculo cambial. Integração .NET com Mainframe, otimização de banco de dados com Procedures, Triggers e Views. Stack: .NET, C#, ASP.NET, SQL Server, Entity Framework."
    },
    {
      id: 5,
      period: "jun/2012 – mai/2014",
      company: "Secom",
      title: "Analista Programador Pleno",
      description:
        "Projeto Phoenix para Depto. de Inteligência da Polícia Civil (coleta biométrica e análise de suspeitos) e sistema de emissão de RGs para a Polícia do Ceará. Stack: .NET, C#, ASP.NET, SQL Server, PostgreSQL, Web Services."
    }
  ];

  return (
    <>
      <div className="block-title">
        <h3>Experi<span>ência</span></h3>
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
