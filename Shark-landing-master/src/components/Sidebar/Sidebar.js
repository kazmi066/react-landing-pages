import React from "react";
import { withRouter } from "react-router";
import "./Sidebar.css";
import { closeburger, arrowRight } from "../../assets";

const Side = ({ toggleChange }) => {
  return (
    <>
      <article className="sidebar">
        <div className="content">
          <div className="top-section">
            <button className="btn btn-connect">Mint a Shark</button>
            <img
              src={closeburger}
              alt="toggle"
              onClick={toggleChange}
              className="toggleBtn"
            />
          </div>

          <div className="links">
            <a className="link" href="#overview">
              <h2>Overview</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#roadmap">
              <h2>Roadmap & Utility</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#traits">
              <h2>Trait Rarity</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#faq">
              <h2>FAQs</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
          </div>
          <div className="mid-text">
            <p>Join the Rogue Shark Community</p>
            <p className="bigtext">
              An adventure to Lake Baikal, the deepest lake on earth, with
              temperatures as low as -40°C.{" "}
            </p>
          </div>
          <div className="footer-btns">
            <button className="btn btn-connect">Join Discord</button>
            <button className="btn btn-mint">Follow Twitter</button>
          </div>
        </div>
      </article>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
