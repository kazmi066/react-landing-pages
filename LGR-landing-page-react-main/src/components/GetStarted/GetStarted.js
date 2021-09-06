import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";

export default function GetStarted() {
  return (
    <section id="getStarted">
      <img
        src={getStarted}
        alt="none"
        className="startedImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="10"
        data-aos-duration="370"
        easing="ease-in-cubic"
      />
      <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Collaborate with anyone you want, however you want.
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            LGR is an online creator marketplace that gives you the freedom to
            find collaborations opportunities, grow your brand and learn from
            others.
          </p>
          <button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
          >
            <strong>Get Started</strong> - It's free
          </button>
        </div>
      </Container>
    </section>
  );
}
