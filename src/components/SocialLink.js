import React from "react";

const SocialLink = ({ link }) => {
  const { id, href, icon } = link;
  return (
    <li key={id}>
      <a href={href} rel="noreferrer" target="_blank" className="nav-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
