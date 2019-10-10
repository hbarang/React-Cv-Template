import React from "react";

import "./Footer.css";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Made with <FaReact color="#61dbfb" />
    </div>
  );
};

export default Footer;
