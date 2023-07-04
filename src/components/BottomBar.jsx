import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const BottomBar = () => {
  return (
    <Navbar
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        marginLeft: "-100px",
      }}
      variant="light"
      expand="lg"
      className="py-3"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav " />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            style={{
              marginLeft: "40px",
            }}
            className="  bottom-nav"
          >
            <Nav.Link href="#" className="text-dark bottom-bar-link ">
              Men
            </Nav.Link>
            <span className="text-muted mx-2">/</span>
            <Nav.Link href="#" className="text-dark bottom-bar-link">
              Clothing
            </Nav.Link>
            <span className="text-muted mx-2">/</span>
            <Nav.Link href="#" className="text-dark bottom-bar-link">
              Tops
            </Nav.Link>
            <span className="text-muted mx-2">/</span>
            <Nav.Link href="#" className="text-dark bottom-bar-link">
              Adidas
            </Nav.Link>
            <span className="text-muted mx-2">/</span>
            <Nav.Link href="#" className="text-dark bottom-bar-link">
              Adidas Black T-Shirt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BottomBar;
