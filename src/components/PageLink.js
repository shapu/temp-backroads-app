import React from "react";

const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} rel="noreferrer" className={itemClass}>
        {" "}
        {link.text}
      </a>
    </li>
  );
};

export default PageLink;
