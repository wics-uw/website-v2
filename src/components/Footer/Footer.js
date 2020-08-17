import React, { Component } from "react";
import { StyledLogo } from "./styles";
import fb_logo from "../../res/images/fb_logo.png";
import github_logo from "../../res/images/github_logo.png";
import insta_logo from "../../res/images/insta_logo.png";
import twitter_logo from "../../res/images/twitter_logo.png";

const Footer = () => (
  <footer className="footer">
    <p>Please feel free to reach out if you have any questions or feedback!</p>
    <div class="email">
      <p>wics-ugrad@lists.uwaterloo.ca</p>
    </div>
    <div class="column-wrapper">
      <div class="row">
        <div class="column">
          <div class="first-column">Faculty WiCS Site</div>
          <StyledLogo src={fb_logo} size="tiny" />
        </div>
        <div class="column">
          <div class="second-column">Old Website</div>
          <StyledLogo src={insta_logo} size="tiny" />
        </div>
        <div class="column">
          <div class="third-column">Our Policies</div>
          <StyledLogo src={twitter_logo} size="tiny" />
        </div>
        <div class="column">
          <div class="fourth-column">Land Acknowledgement</div>
          <StyledLogo src={github_logo} size="tiny" />
        </div>
      </div>
    </div>
    <p className="copyright">
      &copy; WATERLOO WOMEN IN COMPUTER SCIENCE {new Date().getFullYear()}{" "}
    </p>
  </footer>
);

export default Footer;
