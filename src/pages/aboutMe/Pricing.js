import React from 'react';

const packages = [
  {
    id: 1,
    name: 'Silver',
    price: '$64',
    description: ['Lorem ipsum dolor', 'Pellentesque scelerisque', 'Morbi eu sagittis'],
    buttonClass: 'btn-secondary'
  },
  {
    id: 2,
    name: 'Gold',
    price: '$128',
    description: ['Lorem ipsum dolor', 'Pellentesque scelerisque', 'Morbi eu sagittis', 'Donec non diam'],
    buttonClass: 'btn-primary'
  }
];

const Pricing = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Pricing</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="fw-pricing clearfix row">
            {packages.map(pkg => (
              <div className="fw-package-wrap col-md-6" key={pkg.id}>
                <div className="fw-package">
                  <div className="fw-heading-row">
                    <span>{pkg.name}</span>
                  </div>

                  <div className="fw-pricing-row">
                    <span>{pkg.price}</span>
                    <small>per month</small>
                  </div>

                  <div className="fw-button-row">
                    <a href="#" target="_self" className={`btn ${pkg.buttonClass}`}>
                      Free Trial
                    </a>
                  </div>

                  {pkg.description.map((item, index) => (
                    <div className="fw-default-row" key={index}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
