import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footer_wave from "../../assets/footer_wave.png";
export default function Footer() {
  return (
    <Wrapper>
      <div className="content">
        <div className="section_1">
          <Link to="/" className="footer_link">
            Home
          </Link>
          <Link to="/" className="footer_link">
            About UserQual
          </Link>
          <Link to="/" className="footer_link">
            FAQ
          </Link>
          <Link to="/" className="footer_link">
            Privacy and Terms and Conditions
          </Link>
          <Link to="/" className="footer_link">
            Blog
          </Link>
        </div>
        <div className="section_2">
          <Link to="/" className="footer_link_2">
            Happy Testing
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 45vh;
  background: url(${footer_wave});
  position: relative;

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    font-size: clamp(0.6em, 5vw, 1.2em);
    position: absolute;
    bottom: 3em;

    .section_1 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      & > * {
        color: white;
        margin: 0em 0.5em;
      }

      .footer_link {
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .section_2 {
      .footer_link_2 {
        padding: 1em;
        color: white;
      }
    }
  }
`;
