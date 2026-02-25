import React from "react";

export default function Works() {
  const works = [
    {
      id: 1,
      imgSrc: "img/portfolio/1.jpg",
      title: "SoundCloud Audio",
      categories: ["category_all", "category_soundcloud"],
      iconClass: "fa fa-volume-up"
    },
    {
      id: 2,
      imgSrc: "img/portfolio/2.jpg",
      title: "Detailed Project 2",
      categories: ["category_all", "category_detailed"],
      iconClass: "far fa-file-alt"
    },
    {
      id: 3,
      imgSrc: "img/portfolio/3.jpg",
      title: "Vimeo Video 1",
      categories: ["category_all", "category_vimeo-videos"],
      iconClass: "fas fa-video"
    },
    {
      id: 4,
      imgSrc: "img/portfolio/4.jpg",
      title: "Detailed Project 1",
      categories: ["category_all", "category_detailed"],
      iconClass: "far fa-file-alt"
    },
    {
      id: 5,
      imgSrc: "img/portfolio/5.jpg",
      title: "Mockup Design 1",
      categories: ["category_all", "category_mockups"],
      iconClass: "far fa-image"
    },
    {
      id: 6,
      imgSrc: "img/portfolio/6.jpg",
      title: "YouTube Video 1",
      categories: ["category_all", "category_youtube-videos"],
      iconClass: "fas fa-video"
    }
  ];

  return (
    <div className="portfolio-grid three-columns">
      {works.map((work) => (
        <figure key={work.id} className="item">
          <div className="portfolio-item-img">
            <img src={work.imgSrc} alt={work.title} title="" />
            <a href={`../../../../../w.soundcloud.com/player/index79d2.html?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true`} className="lightbox mfp-iframe" title="SoundCloud Audio"></a>
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
