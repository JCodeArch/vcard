  import React from 'react';

const services = [
  {
    id: 1,
    icon: 'lnr lnr-laptop-phone',
    title: 'Backend .NET / C#',
    description: 'Desenvolvimento de APIs RESTful, microsserviços e sistemas de alta performance com .NET Core, C#, Entity Framework e Dapper.'
  },
  {
    id: 2,
    icon: 'lnr lnr-layers',
    title: 'Software Architecture',
    description: 'Desenho e implementação de arquiteturas robustas com DDD, Clean Architecture, CQRS e sistemas distribuídos escaláveis.'
  },
  {
    id: 3,
    icon: 'lnr lnr-chart-bars',
    title: 'Sistemas Financeiros',
    description: 'Experiência sólida em previdência, câmbio e produtos financeiros complexos — XP Inc., Caixa Vida e Previdência, Zurich Seguros.'
  },
  {
    id: 4,
    icon: 'lnr lnr-sync',
    title: 'Messaging & Integração',
    description: 'Integração de sistemas com Kafka, RabbitMQ, APIs REST e padrões de mensageria para arquiteturas event-driven de alta disponibilidade.'
  }
];

export default function WhatIDo() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              What <span>I Do</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        {services.map(service => (
          <div className="col-xs-12 col-sm-6" key={service.id}>
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="ci-text">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

