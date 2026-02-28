import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


const clientData = [
  { id: 1, imageUrl: '../../img/clients/client-1.png', name: 'act digital' },
  { id: 2, imageUrl: '../../img/clients/client-2.png', name: 'XP Inc.' },
  { id: 3, imageUrl: '../../img/clients/client-3.png', name: 'Ebix' },
  { id: 4, imageUrl: '../../img/clients/client-4.png', name: 'Anixter' },
  { id: 5, imageUrl: '../../img/clients/client-5.png', name: 'Secom' },
  { id: 6, imageUrl: '../../img/clients/client-6.png', name: 'Itaú BBA' },
  { id: 7, imageUrl: '../../img/clients/client-7.png', name: 'Caixa Vida e Previdência' },
];

export default function Clients(){
  const owlOptions = {
    nav: true,
    items: 2,
    loop: false,
    navText: false,
    margin: 10,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 1200: { items: 5 } }
  };

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Empresas onde <span>trabalhei</span></h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <OwlCarousel className="clients owl-carousel" {...owlOptions}>
            {clientData.map(client => (
              <div className="client-block" key={client.id}>
                <a href="#" target="_blank" title="Logo">
                  <img src={client.imageUrl} alt={client.name} />
                </a>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
