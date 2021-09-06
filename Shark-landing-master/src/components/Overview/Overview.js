import React from "react";
import "./Overview.css";
import { Container } from "react-bootstrap";
import overviewGridImg from "../../assets/overviewGridImg.png";
import Carousel from "../Carousel/Carousel";

export default function Overview() {
  return (
    <section id="overview">
      <Container fluid>
        <div className="content">
          <div className="top-text">
            <h1 className="title">Overview</h1>
            <div className="desc">
              The Rogue Shark Academy is a collection of 5,000 algorithmically
              generated pieces of art, featuring the ocean’s oldest living (and
              most bad-ass) species: Sharks. At the core of the Rogue Shark’s
              Academy is the desire to make real social impact.
            </div>
          </div>
          <div className="grid-section">
            <div className="text">
              <h5 className="title">our mission</h5>
              <h3 className="subtitle">More than just an NFT project</h3>
              <p className="desc">
                FPO. Blah blah… Lorem ipsum…We push ourselves to elevate the
                standard for excellence. Whether we’re replicating historic
                millwork, engineering uninterrupted views or improving energy
                performance, we look for what we can do better — and then we
                design it. Crafted with exceptional skill, our products deliver
                quality you can see, touch, and feel, beauty that brings joy,
                and performance that stands the test of time.{" "}
              </p>
            </div>
            <img src={overviewGridImg} alt="img grid" />
          </div>
        </div>
      </Container>
      <Carousel />
    </section>
  );
}
