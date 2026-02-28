import React from "react";
import OwlCarousel from 'react-owl-carousel';



const testimonialData = [
    {
      id: 1,
      author: 'Gustavo Ferreira',
      company: 'Software Engineer · XP Inc.',
      text: 'Jonathas sempre foi um grande amigo e colega de trabalho. Ele demonstrou ótimas habilidades em análise e programação, compreensão de problemas de performance de código e como lidar com queries em bancos de dados. Sempre pronto para ajudar o time — seria uma honra trabalhar com ele novamente.',
      image: 'img/testimonials/testimonial-1.jpg'
    },
    {
      id: 2,
      author: 'Colega de Equipe',
      company: 'act digital',
      text: 'Profissional extremamente comprometido, com visão técnica e estratégica. Sempre equilibra qualidade de código com entrega de valor ao negócio. Referência em Clean Architecture e DDD dentro da equipe.',
      image: 'img/testimonials/testimonial-2.jpg'
    },
    {
      id: 3,
      author: 'Tech Lead',
      company: 'XP Inc.',
      text: 'Jonathas se destacou pela capacidade de resolver problemas complexos de performance em sistemas de alta demanda. Sua experiência em previdência e câmbio trouxe valor enorme para os projetos da squad.',
      image: 'img/testimonials/testimonial-3.jpg'
    }
  ];

export default function Testimonials() {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Reco<span>mendações</span></h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
        <OwlCarousel
            className="testimonials owl-carousel"
            loop={true}
            nav={true}
            items={3}
            navText={false}
            margin={25}
            responsive={{
              0: { items: 1 },
              480: { items: 1 },
              768: { items: 2 },
              1200: { items: 2 },
            }}
          >
            {testimonialData.map(testimonial => (
              <div key={testimonial.id} className="testimonial">
                <div className="img">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="text">
                  <p>{testimonial.text}</p>
                </div>
                <div className="author-info">
                  <h4 className="author">{testimonial.author}</h4>
                  <h5 className="company">{testimonial.company}</h5>
                  <div className="icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
