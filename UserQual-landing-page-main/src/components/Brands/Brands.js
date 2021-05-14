import React from "react";
import "./Brands.css";
import {
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
} from "../../assets/brand_pics";

export default function Brands() {
  return (
    <section id="brand">
      <div className="containerx">
        <div className="content">
          <h1 className="title font-weight-bold">Trusted by</h1>
          <p className="brand_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dignissimos excepturi sed <br /> a ea rem deleniti magnam neque vero
            esse!
          </p>
          <div className="brand_images">
            <img src={brand_1} alt="error" />
            <img src={brand_2} alt="error" />
            <img src={brand_3} alt="error" />
            <img src={brand_4} alt="error" />
            <img src={brand_5} alt="error" />
          </div>
        </div>
      </div>
    </section>
  );
}
