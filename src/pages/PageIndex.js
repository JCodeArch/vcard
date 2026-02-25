import React,{useState, useEffect} from "react";

import Header from "../components/globals/Header";
import Arrows from "../components/globals/Arrows";
import Toggle from "../components/mobile/Toggle";

import PageContent from "./PageContent";
import Home from "./home/page/Home";
import AboutMe from "./aboutMe/page/AboutMe";
import Resume from "./resume/page/Resume";
import Portifolio from "./portifolio/page/Portifolio";
import Blog from "./blog/page/Blog";
import Contact from "./contact/page/Contact";

import 'owl.carousel/dist/assets/owl.carousel.css';
import '../content/css/reset.css'
import '../content/css/animations.css'
import '../content/css/perfect-scrollbar.css'
import '../content/css/bootstrap-grid.min.css'
import '../content/css/magnific-popup.css'
import '../content/css/main.css'

const pages = {
  'home': <Home classSectionIsActive="section-active" />,
  'about-me': <AboutMe classSectionIsActive="" />,
  'resume': <Resume classSectionIsActive="" />,
  'portfolio': <Portifolio classSectionIsActive="" />,
  'blog': <Blog classSectionIsActive="" />,                                                            
  'contact': <Contact classSectionIsActive="" />
};

export default function 
  PageIndex() {
    const [currentPage, setCurrentPage] = useState(getInitialPage());

    useEffect(() => {
      window.addEventListener("hashchange", handleHashChange);
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);
  
    function getInitialPage() {
      const hash = window.location.hash.substring(1);
      if (hash && pages.hasOwnProperty(hash)) {
        return hash;
      } else {
        return 'home';
      }
    }
  
    function handleHashChange() {
      setCurrentPage(getInitialPage());
    }
  
    const handleNavigation = (pageId) => {
      setCurrentPage(pageId);
      window.location.hash = pageId;
    };

  return (
    <div className="page-content">
      <Header currentPage={currentPage} handleNavigation={handleNavigation} />
      <Toggle />
      <Arrows handleNavigation={handleNavigation}  currentPage={currentPage}  pageKeys={Object.keys(pages)}/>
      <PageContent page={pages[currentPage]} classSectionIsActive="section-active"/>
    </div>
  );
}
