import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplyForm from "../ApplyForm/ApplyForm";
import { faqsRight, faqsImage } from "../../assets";
import "./Faqs.scss";

export default function Faqs() {
  return (
    <main id="main-content">
      <img src={faqsRight} alt="no image" className="faqs-waves" />
      <img src={faqsRight} alt="no image" className="faqs-waves2" />
      <Container>
        <div className="content">
          <div className="main-content-top-section">
            <div className="left-section">
              <h1 className="title">
                Putting menu releases on solid foundations: how to accomplish
                stability without sacrificing agility
              </h1>
              <h4 className="description">
                An exclusive series of online club calls, for restaurant chain
                executives, sharing best
                <br /> practices for menu releases (under Chatham house rule)
              </h4>
            </div>
            <div className="right-section">
              <img src={faqsImage} alt="no image" />
            </div>
          </div>
          <div className="main-content-other-section">
            <Row>
              <Col sm>
                <h4 className="blue-heading">
                  First things first: what are the solid foundations?
                </h4>
                <p className="foundations">
                  There is more than meets the eye, but a few of them are:
                </p>
                <ul className="foundations-points">
                  <li>
                    the golden rule:{" "}
                    <span className="first-point">
                      what is tested and approved is what is released!
                    </span>
                  </li>
                  <li>connect smooth menu building pipelines</li>
                  <li>
                    avoiding issues and bottlenecks in multi-layered teams
                  </li>
                  <li>use visual and AI-assisted inspection of menu changes</li>
                  <li>never ever disobey the golden rule!</li>
                </ul>
                <h4 className="blue-heading">Why these club calls? </h4>
                <p className="club-calls">
                  The restaurant (chain) and hospitality business has gotten
                  extremely competitive. There is an increasing amount of market
                  entrants vying for share of stomach, riding the wave of
                  enabling technologies from food aggregators, dark / cloud
                  kitchens, etc.
                </p>
                <h4 className="blue-heading">Menu agility and risk </h4>
                <p className="agility">
                  The market forces described above requires you to become more
                  agile with your menus, in order to recoup / protect margins,
                  have a direct (omni)channel to your guests, prevent brand
                  erosion, improve reputation and platform ratings, etc.
                  <br />
                  <span className="agile">
                    Agile / fast updates to your menu introduces risk though,
                    such as:
                  </span>
                  <ul className="agility-points">
                    <li>menus ending up in the wrong channels / geographies</li>
                    <li>
                      incorrect pricing of items due to bugs and differences in
                      aggregator pricing formats (UberEats vs. JustEat /
                      Deliveroo)
                    </li>
                    <li>
                      critical out-of-stock/in-stock data being overwritten by
                      menu updates
                    </li>
                    <li>and more.</li>
                  </ul>
                  <p>
                    In our online series, we explore these challenges{" "}
                    <strong>
                      and focus on the foundations for solid menu releases.
                    </strong>
                  </p>
                  <p>
                    <strong>Regulations for the series:</strong>
                  </p>
                  <ol count="1" className="regulation-points">
                    <li>
                      Chatham house rule applies, meaning information shared can
                      be utilised at will but never attributed to source. This
                      is an essential ingredient for the series, enabling us to
                      foster an environment in which best practices are shared.
                    </li>
                    <li>
                      No sales pitches of vendors are allowed (including those
                      from our hosts and/or sponsors).
                    </li>
                    <li>
                      Our participants all work in the restaurant (chain)
                      industry.
                    </li>
                  </ol>
                  <p className="zoom">
                    Duration: <strong>45 minutes</strong>
                    <br />
                    Location: <strong>Zoom call (invitation-only)</strong>
                  </p>
                  <p>
                    Apply with the form on the right if you'd like to
                    participate.
                  </p>
                </p>
              </Col>
              <Col sm>
                <ApplyForm />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </main>
  );
}
