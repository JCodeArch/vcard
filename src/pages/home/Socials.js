import React from "react";

const socialLinks = [
  { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
  { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
  { name: "Twitter", icon: "fab fa-twitter", url: "#" }
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
