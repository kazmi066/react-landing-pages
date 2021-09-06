import React from "react";
import "../Roadmap/Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Faq() {
  return (
    // Sharing the same styles as ROADMAP component
    <section id="faq">
      <Container>
        <div className="content">
          <h4 className="sm-title">Faq & Utility</h4>
          <div className="top-text">
            <h1 className="lg-title">Here’s what to know</h1>
            <h2 className="desc">
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian theme="dark" />
      </div>
    </section>
  );
}
