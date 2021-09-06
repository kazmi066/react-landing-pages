import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { footer_logo } from "../../assets";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img src={footer_logo} alt="Sharks" />
          </div>
          <p className="footer-text">
            A TechnikLabs Project. All Rights Reserved 2021.
          </p>
        </div>
      </Container>
    </footer>
  );
}
