import React from "react";
import "./Footer.css";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} list {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;