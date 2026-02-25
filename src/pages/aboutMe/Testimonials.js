import React from "react";
import OwlCarousel from 'react-owl-carousel';



const testimonialData = [
    {
      id: 1,
      author: 'Julia Hickman',
      company: 'Omni Source',
      text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
      image: 'img/testimonials/testimonial-1.jpg'
    },
    {
      id: 2,
      author: 'Robert Watkins',
      company: 'Endicott Shoes',
      text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
      image: 'img/testimonials/testimonial-2.jpg'
    },
    {
      id: 3,
      author: 'Kristin Carroll',
      company: 'Helping Hand',
      text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
      image: 'img/testimonials/testimonial-3.jpg'
    }
  ];

export default function Testimonials() {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Testimonials</h3>
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
