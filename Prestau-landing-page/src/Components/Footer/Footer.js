import React from "react";
import { Container } from "react-bootstrap";
import { footerLogo } from "../../assets";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer id="home-footer">
      <Container>
        <div className="content">
          <div className="footer-logo">
            <img src={footerLogo} alt="Logo" />
            <p>
              Your Restaurants At Full Capacity.
              <br />© Copyright 2021, Prestau
            </p>
            <p>
              1209 North Orange Street
              <br />
              Wilmington
              <br />
              Delaware, USA
            </p>
          </div>
          <div className="footer-text">Delivering winning menus</div>
        </div>
      </Container>
    </footer>
  );
}
