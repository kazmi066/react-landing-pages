import React from "react";
import "./Importance.css";
import art from "../../assets/Untitled_Artwork -1.png";
import { Container } from "react-bootstrap";

export default function Importance() {
  return (
    <section id="importance">
      <Container className="container">
        <img src={art} alt="not found" />
        <h1 className="title">
          Why We Are
          <br /> Different
        </h1>
        <div
          className="first-left"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="first-left-title">Help Creators Be Proactive</h2>
          <p className="first-left-info">
            Our marketplace platform gives creators the ability to pick and
            choose among all collaboration opportunities available out there. So
            no more sit and wait!
          </p>
        </div>
        <div
          className="first-right"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          <h2 className="first-right-title">Build a Community</h2>
          <div className="first-right-info">
            Creators are able to share their personal experience and ask
            questions through blog posts and Q&A panels. We want to help you
            find friends and mentors :)
          </div>
        </div>
        <div
          className="second-left"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="second-left-title">Authenticity + Growth</h2>
          <p className="second-left-info">
            Authenticity and growth can co-live! Each creator can see analytics
            of personal growth and insights on how sponsored content is
            affecting their audience.{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}
