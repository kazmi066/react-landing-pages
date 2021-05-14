import React from "react";
import "./Feature.css";

export default function Feature({ item, right, left }) {
  return (
    <article className="feature">
      {right ? (
        <div className="content">
          <div className="text">
            <h1 className="feature_heading">{item.heading}</h1>
            {Object.keys(item["list"]).map((items, index) => (
              <ul key={index}>
                <li className="list_item">{item["list"][items]}</li>
              </ul>
            ))}
          </div>
          <img
            className="feature_image img-fluid"
            src={item.image}
            alt="not found"
          />
        </div>
      ) : (
        <div className="content_left">
          <img
            className="feature_image img-fluid"
            src={item.image}
            alt="not found"
          />
          <div className="text">
            <h1 className="feature_heading">{item.heading}</h1>
            {Object.keys(item["list"]).map((items, index) => (
              <ul key={index}>
                <li className="list_item">{item["list"][items]}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
