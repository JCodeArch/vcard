import React from "react";

export default function Arrows({ handleNavigation, currentPage, pageKeys }) {
  const goToNextPage = () => {
    const currentIndex = pageKeys.indexOf(currentPage);
    const nextPageIndex = (currentIndex + 1) % pageKeys.length;
    const nextPage = pageKeys[nextPageIndex];
    handleNavigation(nextPage);
  };

  const goToPreviousPage = () => {
    const currentIndex = pageKeys.indexOf(currentPage);
    const previousPageIndex =
      (currentIndex - 1 + pageKeys.length) % pageKeys.length;
    const previousPage = pageKeys[previousPageIndex];
    handleNavigation(previousPage);
  };

  return (
    <div className="lmpixels-arrows-nav">
      <div className="lmpixels-arrow-right" onClick={goToNextPage}>
        <i className="lnr lnr-chevron-right"></i>
      </div>
      <div className="lmpixels-arrow-left" onClick={goToPreviousPage}>
        <i className="lnr lnr-chevron-left"></i>
      </div>
    </div>
  );
}
