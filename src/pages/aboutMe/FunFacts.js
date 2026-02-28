import React from 'react';

const facts = [
  { id: 1, icon: 'lnr lnr-briefcase', title: 'Anos de Experiência', value: '13+' },
  { id: 2, icon: 'lnr lnr-apartment', title: 'Empresas', value: '8+' },
  { id: 3, icon: 'lnr lnr-rocket', title: 'Projetos Entregues', value: '20+' }
];

const FunFacts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              Carreira em <span>Números</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        {facts.map(fact => (
          <div className="col-xs-12 col-sm-4" key={fact.id}>
            <div className="fun-fact gray-default">
              <i className={fact.icon}></i>
              <h4>{fact.title}</h4>
              <span className="fun-fact-block-value">{fact.value}</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
