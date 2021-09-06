import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <Container className="container">
        <h1
          className="footerTitle"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="10"
          data-aos-duration="320"
        >
          Coming 2022
        </h1>
        <button className="sendEmailBtn">
          Enter email to get notified first
        </button>
      </Container>
    </footer>
  );
}
