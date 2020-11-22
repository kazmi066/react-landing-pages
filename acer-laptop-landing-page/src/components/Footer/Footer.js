import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="content">
          <div className="social-icons">
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-vk"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
          <div className="right">
            <h1 className="logo">acer</h1>
            <p className="secondary-text">
              Federally registered <br />
              trademarks of Ziff Davis, LLC
            </p>
            <br />
            <p className="secondary-text">
              Much more is coming &nbsp;&nbsp;© 1996-2020 Acer inc, LLC. PCMag
              Digital Group
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
