import React from "react";
import "./Card.css";

export default function Card({ image, heading, setIndex, index }) {
  return (
    <article className="card" onClick={() => setIndex(index)}>
      <img src={image} alt="error" />
      <h4 className="heading">{heading}</h4>
    </article>
  );
}
