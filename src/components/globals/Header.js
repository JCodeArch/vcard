import React from "react";
import Titles from "../../pages/home/Titles";
import Photo from "../../pages/home/Photo";
import Social from "../../pages/home/Socials";
import DownloadFile from "../../pages/home/DownloadFile";
import Menu from "./Menu";

export default function Header({ currentPage, handleNavigation }) {
  return (
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <Photo />
        <Titles />
      </div>
      <Menu currentPage={currentPage} handleNavigation={handleNavigation} />
      <Social />
      <DownloadFile />
      <div className="copyrights">© 2026 Jonathas Souza. All rights reserved.</div>
    </header>
  );
}