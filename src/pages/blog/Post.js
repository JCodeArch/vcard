import React from "react";

export default function Post() {
  const post = {
    "post": {
      "imgSrc": "img/blog/blog_post_1_full.jpg",
      "category": "UI",
      "title": "Best Practices for Animated Progress Indicators",
      "content": [
        "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo.",
        "Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
        "Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante.",
        "Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui."
      ],
      "blockquotes": [
        {
          "text": "Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.",
          "author": "Larry L. Johnson"
        }
      ],
      "date": "March 16, 2020",
      "author": "LMPixels",
      "tags": ["animate", "bar", "design", "progress", "ui"]
    }
  }

  return (
    <div className="content-area single-page-area">
      <div className="single-page-content ps ps--theme_default ps--active-y" data-ps-id="bf6f48bb-a7e4-55d0-1c57-24d01e26bac5">
        <article className="post">
          <div className="post-thumbnail">
            <img src={post.imgSrc} alt="image" />
          </div>
          <div className="post-content">
            <header className="entry-header">
              <div className="entry-meta entry-meta-top">
                <span><a href="#" rel="category tag">{post.category}</a></span>
              </div>
              <h2 className="entry-title">{post.title}</h2>
            </header>
            <div className="entry-content">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="col-inner">
                    {post.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    {post.blockquotes && post.blockquotes.length > 0 && (
                      post.blockquotes.map((quote, index) => (
                        <blockquote key={index} className="quote">
                          {quote.text}
                          <footer className="quote-author">
                            <span>{quote.author}</span>
                          </footer>
                        </blockquote>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="entry-meta entry-meta-bottom">
              <div className="date-author">
                <span className="entry-date">
                  <a href="#" rel="bookmark">
                    <i className="far fa-clock"></i> <span className="entry-date">{post.date}</span>
                  </a>
                </span>
                <span className="author vcard">
                  <a className="url fn n" href="#" rel="author"> <i className="fas fa-user"></i> {post.author}</a>
                </span>
              </div>
              <div className="entry-share btn-group share-buttons">
                <a href="#" onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')} className="btn" target="_blank" title="Share on Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" onClick={() => window.open("https://twitter.com/intent/tweet?url=" + window.location.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')} className="btn" target="_blank" title="Share on Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" onClick={() => window.open("https://www.linkedin.com/shareArticle?url=" + window.location.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600')} className="btn" title="Share on LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="post-tags">
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <a key={index} href="#" rel="tag">{tag}</a>
                ))}
              </div>
            </div>
          </div>
        </article>
        <div className="ps__scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}><div className="ps__scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps__scrollbar-y-rail" style={{ top: "0px", height: "899px", right: "0px" }}><div className="ps__scrollbar-y" tabIndex="0" style={{ top: "0px", height: "602px" }}></div></div>
      </div>
    </div>
  );
}
