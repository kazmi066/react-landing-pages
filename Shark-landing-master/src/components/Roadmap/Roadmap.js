import React from "react";
import "./Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <Container>
        <div className="content">
          <h4 className="sm-title">Roadmap & Utility</h4>
          <div className="top-text">
            <h1 className="lg-title">The future is bright</h1>
            <h2 className="desc">
              FPO. Introduction to roadmap and what people an expect by becoming
              a part of the project and community. Get them excited…
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian />
      </div>
    </section>
  );
}
