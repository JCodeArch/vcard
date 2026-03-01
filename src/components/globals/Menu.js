import React from "react";

const menuItems = [
  { id: 'home', text: 'Home', icon: 'lnr lnr-home' },
  { id: 'about-me', text: 'Sobre Mim', icon: 'lnr lnr-user' },
  { id: 'resume', text: 'Resumo', icon: 'lnr lnr-graduation-hat' },
  { id: 'portfolio', text: 'Portfólio', icon: 'lnr lnr-briefcase' },
  { id: 'blog', text: 'Blog', icon: 'lnr lnr-book' },
  { id: 'contact', text: 'Contato', icon: 'lnr lnr-envelope' }
];

export default function Menu({ currentPage, handleNavigation }) {
  return (
    <ul className="main-menu">
      {menuItems.map(item => (
        <li key={item.id} className={currentPage === item.id ? 'active' : ''}>
          <a href={`#${item.id}`} onClick={() => handleNavigation(item.id)} className="nav-anim">
            <span className={`menu-icon ${item.icon}`}></span>
            <span className="link-text">{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
