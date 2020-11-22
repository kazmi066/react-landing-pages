import React from "react";
import "./Specs.css";
import RedLine from "../RedLine/RedLine";
import Container from "../Container/Container";
import midsection1 from "../../assets/midsection1.jpeg";
import midsection3 from "../../assets/midsection3.jpeg";
import midsection2 from "../../assets/midsection2.jpeg";

export default function Specs() {
  return (
    <section className="specs">
      <Container>
        <div className="content">
          <div className="col-1">
            <RedLine type="small" />
            <h2 className="title">
              Pure Gaming
              <br /> experience with better
              <br /> graphics quality
            </h2>
            <ul className="dashed secondary-text">
              <li>Modern Intel Core-i9 Processor</li>
              <li>Graphics Nividea GeForce RTX</li>
              <li>Multiprocessing threads execution</li>
            </ul>
            <button className="moreInfo">
              <a href="#">
                More info
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </button>
            <div className="spec_image">
              <img src={midsection1} alt="Specifications" />
              <p className="caption">
                Red Dead Redemption 2 is a 2018 action-adventure game
                <br /> developed and published by Rockstar Games.{" "}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="spec_image">
              <img src={midsection3} alt="Specifications" />
              <p className="caption">
                Offering a plenty of software management techniques
                <br /> developed and published by Rockstar Games.{" "}
              </p>
            </div>
            <div className="spec_image">
              <img src={midsection2} alt="Specifications" />
              <p className="caption">
                Take your gaming experience to the next level
                <br /> with hard core cooling process and threads.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
