import { pageLinks } from "../data";
import PageLink from "./PageLink";
import React from "react";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
