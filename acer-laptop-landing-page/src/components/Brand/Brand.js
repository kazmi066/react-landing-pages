import React, { useState } from "react";
import "./brand.css";
import Container from "../Container/Container";
import RedLine from "../RedLine/RedLine";
import brandImage from "../../assets/brand_image.png";
import FindMore from "../FindMore/FindMore";

export default function Brand() {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="brand">
      <div className="bgImage">
        <Container>
          <nav>
            <h1 className="logo">acer</h1>
            <ul className={`header-links ${toggle ? "header-links-show" : ""}`}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
            <div className="header-icons">
              <a href="#">
                <i className="fas fa-user"></i>
              </a>
              <a href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
            <div className="toggle" onClick={() => setToggle(!toggle)}>
              <i class="fas fa-sliders-h"></i>
            </div>
          </nav>
          <div className="content">
            <div className="col-1">
              <RedLine type="small" />
              <h1 className="title">
                Presenting <br /> Acer nitro 5
              </h1>
              <p className="description secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                rem. Iste aliquam cupiditate nulla sed alias quia, fuga ullam
                molestiae ea, laboriosam laborum doloribus non.
              </p>
              <FindMore text="Find out more" />
              <div className="trailer">
                <div className="left">
                  <h3 className="t_title">Trailer</h3>
                  <p className="t_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    laudantium architecto libero dignissimos provident odio
                    nihil unde modi blanditiis quisquam!
                  </p>
                </div>
                <div className="right">
                  <video width="300" controls="controls" preload="metadata">
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              </div>
            </div>
            <div className="col-2">
              <img src={brandImage} alt="Acer" />
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">VK</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
