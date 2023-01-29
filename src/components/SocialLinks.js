import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";

const SocialLinks = ({ parentClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink link={link} />;
      })}
    </ul>
  );
};

export default SocialLinks;
