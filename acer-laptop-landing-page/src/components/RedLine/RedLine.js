import React from "react";
import "./redLine.css";

export default function RedLine({ type }) {
  return <div className={`${type === "small" ? "small" : "redLine"}`}></div>;
}
