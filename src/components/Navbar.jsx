import React from "react";
import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <NavbarBs bg="dark" variant="dark">
      <Container>
        <Nav
          style={{ display: "flex", flexItem: "justify", marginLeft: "-100px" }}
          className="justify-content-center"
        >
          <Nav.Link to="/men" as={NavLink}>
            Men
          </Nav.Link>
          <Nav.Link to="/women" as={NavLink}>
            Women
          </Nav.Link>
          <Nav.Link to="" as={NavLink}>
            Unisex
          </Nav.Link>
          <Nav.Link to="" as={NavLink}>
            Kids
          </Nav.Link>
          <Nav.Link to="" as={NavLink}>
            Best Sellers
          </Nav.Link>
          <Nav.Link to="" as={NavLink}>
            New Arrivals
          </Nav.Link>
          <Nav.Link to="" as={NavLink} style={{ color: "#EC1132" }}>
            Offers
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
