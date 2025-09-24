/*
  File: Footer.js
  Student Name: Vijay Jannu
  Student ID: 301-413-452
  Date: September 25, 2025
  Description: This component renders the footer with author credit and links.
*/


import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
// ==========================
// Footer Component
// ==========================
export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Vijay Jannu")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Contact:{" "}
          <a href="mailto:Vijay.automationminds@gmail.com">
            Vijay.automationminds@gmail.com
          </a>
        </p>
      </div>
    </Fade>
  );
}