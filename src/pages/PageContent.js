import React from "react";

export default function PageContent({ page , classSectionIsActive}) {
  return (
    <div className="content-area">
      <div className="animated-sections">
      {React.cloneElement(page, { classSectionIsActive })}
      </div>
    </div>
  );
}