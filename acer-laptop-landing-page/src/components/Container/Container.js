import React from "react";
import "./container.css";

export default function Container({ type, children }) {
  return <div className={`container ${type && `${type}`}`}>{children}</div>;
}
