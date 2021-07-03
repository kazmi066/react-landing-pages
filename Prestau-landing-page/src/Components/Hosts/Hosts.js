import React from "react";
import { Container } from "react-bootstrap";
import "./Hosts.scss";
import { john, anton } from "../../assets";

export default function Hosts() {
  return (
    <section id="hosts">
      <Container>
        <h2 className="title">About the Hosts</h2>
        <div className="persons">
          <div className="person">
            <div>
              <h5 className="name">John Kingsbury</h5>
              <p className="department">Sales director</p>
            </div>
            <img src={john} alt="John" />
          </div>
          <div className="person">
            <img src={anton} alt="John" />
            <div>
              <h5 className="name">Anton berger</h5>
              <p className="department">Technical account manager</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
