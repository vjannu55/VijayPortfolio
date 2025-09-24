/*
  File: Header.js
  Student Name: Vijay Jannu
  Student ID: 301-413-452
  Date: September 25, 2025
  Description: This component renders the navigation bar with logo, links, 
               and theme toggle for the portfolio site.
*/


import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
   blogSection,
  //talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  //const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
// ==========================
// Header Component
// ==========================
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
  {viewResume && (
    <li>
      <a href="#Home">Home</a>
    </li>
  )}
  {viewSkills && (
    <li>
      <a href="#skills">About Me</a>
    </li>
  )}
  {viewAchievement && (
    <li>
      <a href="#achievements">Projects / Achievements</a>
    </li>
  )}
  {viewExperience && (
    <li>
      <a href="#experience">Work Experiences</a>
    </li>
  )}
  {viewBlog && (
    <li>
      <a href="#blogs">Blogs</a>
    </li>
  )}
  <li>
    <a href="#contact">Contact Me</a>
  </li>
  <li>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>
      <ToggleSwitch />
    </a>
  </li>
</ul>

      </header>
    </Headroom>
  );
}
export default Header;
