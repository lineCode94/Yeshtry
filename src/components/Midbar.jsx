import React from "react";
import Badge from "react-bootstrap/Badge";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  // Button,
} from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
// import { FaSearch } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/adidas-logo.svg";
const Midbar = () => {
  return (
    <Navbar
      style={{ background: "#fff" }}
      bg="#FFF"
      variant="light"
      expand="lg"
      className="py-3"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Form inline className="mr-5">
            <FormControl
              type="text"
              placeholder="&#xF002; Search"
              className="mr-2 search-bar"
              style={{
                fontFamily: "Arial, FontAwesome",
                color: "#000!important",
              }}
            />
            {/* <Button variant="outline-secondary"></Button> */}
          </Form>
          <img
            className="adidas-logo"
            src={logo}
            alt="Adidas logo"
            height="30"
          />

          <Nav className="nav-mid">
            <Nav.Link href="#" className="mx-3">
              <img
                style={{ marginRight: "8px" }}
                src={require("../images/cart1.svg").default}
                alt="cart"
              />
              <Badge className="badge-cart" text="dark">
                0
              </Badge>
              Cart
            </Nav.Link>
            <Nav.Link href="#" className="mx-3">
              <img
                style={{ marginRight: "8px" }}
                src={require("../images/heart.svg").default}
                alt="heart"
              />
              Wishlist
            </Nav.Link>
            <Nav.Link href="#" className="mx-3">
              <img
                style={{ marginRight: "8px" }}
                src={require("../images/login.svg").default}
                alt="login"
              />
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Midbar;
