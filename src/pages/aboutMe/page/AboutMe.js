import React from "react";
import Testimonials from "../Testimonials";
import Clients from "../Clients";
import WhatIDo from "../WhatIDo";
import Pricing from "../Pricing";
import FunFacts from "../FunFacts";
import Line from "../../../components/globals/Line";

export default function AboutMe({classSectionIsActive}) {
  return (
    <section data-id="about-me" className={`animated-section ${classSectionIsActive}`}>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>
              Sou formado em Ciências da Computação e tenho ampla experiência em diversas áreas do
              desenvolvimento de software, desde a concepção de funcionalidades simples até a
              implementação de soluções complexas. Tenho facilidade em trabalhar de forma autônoma
              no desenvolvimento técnico, gerenciando tempo e esforço para cumprir prazos. Quando
              o trabalho exige colaboração — especialmente em integrações complexas — adapto-me bem
              ao trabalho em equipe. Valorizo documentação e testes como pilares fundamentais para
              garantir a manutenibilidade e a qualidade do software. Tenho experiência em orientar
              e desenvolver profissionais menos experientes, refletindo meu compromisso com o
              crescimento da equipe.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Experiência</span>
                  <span className="value">10+ anos</span>
                </li>

                <li>
                  <span className="title">Localização</span>
                  <span className="value">São Paulo, Brasil</span>
                </li>

                <li>
                  <span className="title">Especialidade</span>
                  <span className="value">.NET / C# / Back-End</span>
                </li>

                <li>
                  <span className="title">e-mail</span>
                  <span className="value">
                    <a href="mailto:jonathas.js@gmail.com">jonathas.js@gmail.com</a>
                  </span>
                </li>

                <li>
                  <span className="title">Disponível</span>
                  <span className="value">Para oportunidades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Line length={50} />

        <WhatIDo />

        <Line length={30} />

        <Testimonials />

        <Line length={50} />

        <Clients />

        <Line length={50} />

        <FunFacts />
      </div>
    </section>
  );
}
