import React from "react";
import "./FindMore.css";

export default function FindMore({ text }) {
  return (
    <button className="findMore">
      <div className="text">{text}</div>
      <i className="fas fa-arrow-right"></i>
    </button>
  );
}
