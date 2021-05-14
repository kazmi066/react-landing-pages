import React from "react";
import "./Trial.css";
import trial_illustration from "../../assets/trial_illustration.png";

export default function Trial() {
  return (
    <section id="trial">
      <div className="container">
        <div className="content">
          <img
            src={trial_illustration}
            alt="illustration"
            className="img-fluid"
          />
          <div className="text_section">
            <h1 className="trial_title">curious?</h1>
            <h3 className="trial_description">
              Sign up for a FREE trial – 1 free test!
              <br /> Or book a demo – we’d love to show you around!
            </h3>
            <div className="buttons">
              <button className="try_button">Try it for free</button>
              <button className="demo_button">Book a demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
