import React from "react";
import "./Accordian.css";
import { Accordion } from "react-bootstrap";

export default function Accordian({ theme }) {
  return (
    <>
      {theme ? (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" className="faq-accordian-item">
            <Accordion.Header>
              How much will it cost to mint a shark?
            </Accordion.Header>
            <Accordion.Body className="white-body">
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faq-accordian-item">
            <Accordion.Header>Roadmap Item #2</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faq-accordian-item">
            <Accordion.Header>Roadmap Item #3</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>Roadmap Item #4</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Charitable Donation to Support Ocean Life
            </Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Roadmap Item #2</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Roadmap Item #3</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Roadmap Item #4</Accordion.Header>
            <Accordion.Body>
              FPO. We can use this section to build confidence and trust by
              displaying partner and award logos paired with a strong case study
              video of a commercial or residential project.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}
