import React from "react";

const socialLinks = [
  { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/jonathas-silva-de-souza-73674931" },
  { name: "GitHub", icon: "fab fa-github", url: "#" },
];

const Social = () => {
  return (
    <div className="social-links">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <i className={link.icon} aria-label={link.name}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
