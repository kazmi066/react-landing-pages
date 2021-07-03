import React from "react";
import { Container } from "react-bootstrap";
import { HeaderLogo } from "../../assets";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <Container>
        <nav>
          <div className="header-logo">
            <img src={HeaderLogo} alt="Logo" />
          </div>
          <div className="header-text">Delivering winning menus</div>
        </nav>
      </Container>
    </header>
  );
}
