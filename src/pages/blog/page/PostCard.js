import React from "react";

export default function PostCard() {
  const posts = [
    {
      id: 1,
      category: "Arquitetura",
      date: "15 Jan 2025",
      title: "Clean Architecture no .NET: do conceito à prática com exemplos reais",
      imgSrc: "img/blog/blog_post_1.jpg",
      link: "#blog/clean-architecture-dotnet"
    },
    {
      id: 2,
      category: "Backend",
      date: "20 Mar 2025",
      title: "CQRS com MediatR em .NET: separando comandos de consultas na prática",
      imgSrc: "img/blog/blog_post_2.jpg",
      link: "#blog/cqrs-mediatr-dotnet"
    },
    {
      id: 3,
      category: "Arquitetura",
      date: "10 Jun 2025",
      title: "DDD aplicado em sistemas financeiros: Aggregates, Value Objects e Domain Events",
      imgSrc: "img/blog/blog_post_3.jpg",
      link: "#blog/ddd-sistemas-financeiros"
    },
    {
      id: 4,
      category: "Integração",
      date: "05 Sep 2025",
      title: "Kafka vs RabbitMQ: quando usar cada um em arquiteturas distribuídas",
      imgSrc: "img/blog/blog_post_4.jpg",
      link: "#blog/kafka-vs-rabbitmq"
    }
  ];

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={`item post-${post.id}`}>
          <div className="blog-card">
            <div className="media-block">
              <div className="category">
                <a href="#" title={`View all posts in ${post.category}`}>
                  {post.category}
                </a>
              </div>
              <a href={post.link}>
                <img
                  src={post.imgSrc}
                  className="size-blog-masonry-image-two-c"
                  alt={post.title}
                  title=""
                />
                <div className="mask"></div>
              </a>
            </div>
            <div className="post-info">
              <div className="post-date">{post.date}</div>
              <a href={post.link}>
                <h4 className="blog-item-title">{post.title}</h4>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
