import React, { useEffect } from 'react';

const Toggle = () => {
  useEffect(() => {
    const handleMenuToggle = () => {
      const siteHeader = document.getElementById('site_header');
      const menuToggle = document.querySelector('.menu-toggle');

      siteHeader.classList.add('animate');
      siteHeader.classList.toggle('mobile-menu-hide');
      menuToggle.classList.toggle('open');
    };

    const handleMainMenuItemClick = () => {
      mobileMenuHide();
    };

    const mobileMenuHide = () => {
      const siteHeader = document.getElementById('site_header');
      const menuToggle = document.querySelector('.menu-toggle');

      siteHeader.classList.remove('animate');
      siteHeader.classList.add('mobile-menu-hide');
      menuToggle.classList.remove('open');
    };

    const menuToggleElement = document.querySelector('.menu-toggle');
    const mainMenuElements = document.querySelectorAll('.main-menu a');

    menuToggleElement.addEventListener('click', handleMenuToggle);
    mainMenuElements.forEach(element => {
      element.addEventListener('click', handleMainMenuItemClick);
    });

    return () => {
      menuToggleElement.removeEventListener('click', handleMenuToggle);
      mainMenuElements.forEach(element => {
        element.removeEventListener('click', handleMainMenuItemClick);
      });
    };
  }, []);

  return (
    <div className="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Toggle;
