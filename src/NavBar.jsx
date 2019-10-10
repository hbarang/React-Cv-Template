import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { DiStackoverflow, DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import NavBarInfo from "./NavBarInfo.json";

import ReloadButton from "./ReloadButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const socialLinks = NavBarInfo.SocialLinks;
const name = NavBarInfo.Name;

const NavBar = ({reloadFunction}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>{name}</Navbar.Brand>
      <ReloadButton reloadFunction={reloadFunction} />
      <Navbar.Collapse className="justify-content-end">
        <a
          href={socialLinks.StackOverFlow}
          rel="noopener noreferrer"
          target="_blank"
        >
          <DiStackoverflow className="socialIcons" size="2em" />
        </a>
        <a href={socialLinks.Github} rel="noopener noreferrer" target="_blank">
          <DiGithubBadge className="socialIcons" size="2em" />
        </a>
        <a
          href={socialLinks.LinkedIn}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className="socialIcons" size="2em" />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
