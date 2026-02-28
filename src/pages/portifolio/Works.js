import React from "react";

export default function Works() {
  const works = [
    {
      id: 1,
      imgSrc: "img/portfolio/1.jpg",
      title: "Caixa Vida e Previdência",
      categories: ["category_all", "category_architecture", "category_financial"],
      iconClass: "fas fa-project-diagram"
    },
    {
      id: 2,
      imgSrc: "img/portfolio/2.jpg",
      title: "Carteira Global — XP Inc.",
      categories: ["category_all", "category_architecture", "category_financial"],
      iconClass: "fas fa-layer-group"
    },
    {
      id: 3,
      imgSrc: "img/portfolio/3.jpg",
      title: "MVP Câmbio — XP Inc.",
      categories: ["category_all", "category_backend", "category_integration"],
      iconClass: "fas fa-exchange-alt"
    },
    {
      id: 4,
      imgSrc: "img/portfolio/4.jpg",
      title: "Consolidação de Posição — Previdência XP",
      categories: ["category_all", "category_backend", "category_financial"],
      iconClass: "fas fa-chart-line"
    },
    {
      id: 5,
      imgSrc: "img/portfolio/5.jpg",
      title: "CADOP — Zurich Seguros",
      categories: ["category_all", "category_backend"],
      iconClass: "fas fa-shield-alt"
    },
    {
      id: 6,
      imgSrc: "img/portfolio/6.jpg",
      title: "Simulador de Previdência — Ebix",
      categories: ["category_all", "category_backend", "category_financial"],
      iconClass: "fas fa-calculator"
    }
  ];

  return (
    <div className="portfolio-grid three-columns">
      {works.map((work) => (
        <figure key={work.id} className="item">
          <div className="portfolio-item-img">
            <img src={work.imgSrc} alt={work.title} title="" />
            <a href={work.imgSrc} className="lightbox" title={work.title}></a>
          </div>
          <i className={work.iconClass}></i>
          <h4 className="name">{work.title}</h4>
          {work.categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </figure>
      ))}
    </div>
  );
}
