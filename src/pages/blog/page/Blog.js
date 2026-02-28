import React from "react";
import PostCard from "./PostCard";

export default function Blog({classSectionIsActive}) {
  return (
    <section data-id="blog" className={`animated-section ${classSectionIsActive}`}>
      <div className="page-title">
        <h2>Artigos <span>Técnicos</span></h2>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="blog-masonry two-columns clearfix">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
