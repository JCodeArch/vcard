  import React from 'react';

const services = [
  {
    id: 1,
    icon: 'lnr lnr-store',
    title: 'Ecommerce',
    description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
  },
  {
    id: 2,
    icon: 'lnr lnr-laptop-phone',
    title: 'Web Design',
    description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
  },
  {
    id: 3,
    icon: 'lnr lnr-pencil',
    title: 'Copywriting',
    description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
  },
  {
    id: 4,
    icon: 'lnr lnr-flag',
    title: 'Management',
    description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
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

