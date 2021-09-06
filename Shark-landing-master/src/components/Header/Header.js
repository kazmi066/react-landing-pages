import React from "react";
import "./Header.css";
import { logo, hamburger, closeburger } from "../../assets";
import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  const ToggleSwitch = styled.div`
    .toggleBtn {
      display: none;
    }

    @media (max-width: 768px) {
      .toggleBtn {
        display: unset;
        padding-right: 1rem;
        transition: all 0.3s ease;
        z-index: 3;
      }
      .logo {
        z-index: -2;
      }
      .toggleBtn:hover {
        cursor: pointer;
      }
      .btns {
        display: none;
      }
    }
  `;

  const [toggle, setToggle] = React.useState(false);
  const toggleChange = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div id="header">
      <Container>
        <div className="content">
          <Nav className="nav">
            <div className="logo">
              <img src={logo} alt="ROGUE SHARKS" />
            </div>
            <ToggleSwitch>
              <div className="toggleBtn">
                {!toggle ? (
                  <img src={hamburger} alt="toggle" onClick={toggleChange} />
                ) : (
                  <img src={closeburger} alt="toggle" onClick={toggleChange} />
                )}
              </div>
              <div className="btns">
                <button className="btn btn-mint">Mint a Shark</button>
                <button className="btn btn-connect">Connect Wallet</button>
              </div>
            </ToggleSwitch>
            {toggle && (
              <Sidebar setToggle={setToggle} toggleChange={toggleChange} />
            )}
          </Nav>
          <div className="centerText">
            <h1 className="title">
              We are
              <br /> more than art
            </h1>
            <h3 className="desc">dive deeper</h3>
            <hr className="vertical-line" />
          </div>
        </div>
      </Container>
    </div>
  );
}
