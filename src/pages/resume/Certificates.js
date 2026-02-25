import React from "react";
import OwlCarousel from 'react-owl-carousel';

export default function Certificates() {
    const certificates = [
      {
        logoSrc: "img/clients/client-1.png",
        title: "Psyhology of Intertnation Design",
        id: "XXXX",
        date: "19 April 2018",
        company: "Example Company"
      },
      {
        id: 2,
        title: "Another Certificate Title",
        memberId: "YYYY",
        date: "20 May 2019",
        company: "Example Company"
      }
    ];
  
    return (
      <>
        <div className="row owl-carousel">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Certificates</h3>
            </div>
          </div>
        </div>
  
        <div className="row">
        <OwlCarousel className="owl-carousel clearfix"
            loop={true}
            nav={true}
            items={4}
            navText={false}
            margin={25}
            responsive={{
              0: { items: 1 },
              480: { items: 1 },
              768: { items: 2 },
              1200: { items: 2 },
            }}>
          {certificates.map((certificate, index) => (
            <div key={index} className="item">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src={certificate.logoSrc} alt="logo" />
                </div>

                <div className="certi-content">
                  <div className="certi-title">
                    <h4>{certificate.title}</h4>
                  </div>
                  <div className="certi-id">
                    <span>Membership ID: {certificate.id}</span>
                  </div>
                  <div className="certi-date">
                    <span>{certificate.date}</span>
                  </div>
                  <div className="certi-company">
                    <span>{certificate.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
      </>
    );
  }
  