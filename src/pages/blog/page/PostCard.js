import React from "react";

export default function PostCard() {
  const posts = [
    {
      id: 1,
      category: "Design",
      date: "05 Mar 2020",
      title: "Why I Switched to Sketch For UI Design",
      imgSrc: "img/blog/blog_post_1.jpg",
      link: "blog-post-1.html"
    },
    {
      id: 2,
      category: "UI",
      date: "23 Feb 2020",
      title: "Best Practices for Animated Progress Indicators",
      imgSrc: "img/blog/blog_post_2.jpg",
      link: "blog-post-2.html"
    },
    {
      id: 3,
      category: "Design",
      date: "06 Feb 2020",
      title: "Designing the Perfect Feature Comparison Table",
      imgSrc: "img/blog/blog_post_3.jpg",
      link: "blog-post-3.html"
    },
    {
      id: 4,
      category: "E-Commerce",
      date: "07 Jan 2020",
      title: "An Overview of E-Commerce Platforms",
      imgSrc: "img/blog/blog_post_4.jpg",
      link: "blog-post-4.html"
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
