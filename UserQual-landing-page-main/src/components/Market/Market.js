import React, { useState } from "react";
import "./Market.css";
import { a, b, c, d, e, f } from "../../assets";
import Card from "../Card/Card";
import Description from "./Description";

export default function Market() {
  const [indexx, setIndexx] = useState(0);

  const boxes = [
    {
      title: "Retail and CPG",
      image: a,
      body: [
        {
          heading: "Heading1",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
        {
          heading: "dwadaw",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
        {
          heading: "grsgse",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
    {
      title: "Technology",
      image: c,
      body: [
        {
          heading: "working Click",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
        {
          heading: "working Click2",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
        {
          heading: "working Click3",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
    {
      title: "Financial Services",
      image: d,
      body: [
        {
          heading: "Heading3",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
    {
      title: "Healthcare and Insurance",
      image: b,
      body: [
        {
          heading: "Heading4",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
    {
      title: "Automotive",
      image: f,
      body: [
        {
          heading: "Heading5",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
    {
      title: "Media and Entertainment",
      image: e,
      body: [
        {
          heading: "Heading5",
          desc:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate necessitatibus sapiente?",
        },
      ],
    },
  ];

  return (
    <section id="market">
      <div className="container-fluid">
        <div className="content">
          <h1 className="title font-weight-bold">
            See how UserQual is disrupting Market Research
          </h1>
          <div className="market_cards">
            <div className="row justify-content-center">
              {boxes.map(({ image, title }, index) => {
                return (
                  <Card
                    key={index * Math.random() * 20}
                    image={image}
                    heading={title}
                    index={index}
                    setIndex={setIndexx}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-3 ">
            <ul className="list">
              {boxes[indexx].body.length &&
                boxes[indexx].body.map(({ heading, desc }, index) => {
                  return (
                    <div key={index}>
                      <Description desc={desc} heading={heading} />
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
