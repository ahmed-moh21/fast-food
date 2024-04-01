import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Asset/logo.png";

function NavbarF() {
  return (
    <>
      <Navbar className="bg-body-tertiary " fixed="top">
        <Container>
          <Navbar.Brand href="/" className="nav-a">
            <img
              alt=" logo App"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Fast Food
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/search" className="nav-a">
                <span style={{ fontSize: "30px" }}>&#127860;</span>
                Search Page
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarF;
