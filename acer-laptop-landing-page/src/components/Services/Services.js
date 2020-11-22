import React from "react";
import "./Services.css";
import Container from "../Container/Container";
import RedLine from "../RedLine/RedLine";

export default function Services() {
  return (
    <section className="service">
      <Container>
        <div className="content">
          <div className="idea">
            <RedLine type="small" />
            <h5 className="small_title">acer Nitro</h5>
            <h1 className="title">
              leading world of Developers <br /> acer nitro 5
            </h1>
          </div>
          <div className="sec-1">
            <h3 className="title">2D/3D creators</h3>
            <p className="description">
              No matter how intensive the task, ConceptD allows 3D designers to
              go beyond their limits and bring their ideas to life
            </p>
          </div>
          <div className="sec-2">
            <h3 className="title">Developers</h3>
            <p className="description">
              Modern technologies such as AI present unique challenges which
              need answers. Discover the tools ConceptD brings to the table
            </p>
          </div>
          <div className="sec-3">
            <h3 className="title">ISV</h3>
            <p className="description">
              Acer tests and verifies that ConceptD products work reliably with
              professional applications from world leading ISVs (Independent
              Software Vendors).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
