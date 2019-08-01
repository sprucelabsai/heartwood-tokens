import React from "react";
import "./Footer.scss";

const Footer = (): React.ReactElement => (
  <footer className="footer-primary">
    <div className="footer-primary__inner">
      <p className="footer-primary__text">©2019 Spruce Labs, LLC.</p>
      <p className="footer-primary__text">Made with ❤ in Denver, CO</p>
    </div>
  </footer>
);

export default Footer;
