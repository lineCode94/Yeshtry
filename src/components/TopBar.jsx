import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { BiPhoneCall } from "react-icons/bi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const TopBar = () => {
  return (
    <Navbar className="top-bar" bg="#FFF100" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            style={{ marginRight: "10px" }}
            src={require("../images/logo1.svg").default}
            alt="logo"
          />{" "}
          <img
            style={{ marginRight: "10px" }}
            src={require("../images/logo.svg").default}
            alt="logo"
          />
        </Navbar.Brand>
        <span className="announcements">
          {" "}
          <IoIosArrowBack style={{ fontSize: "25px" }} />
          Valentine’s Day Offers! Buy Two Get One Free Shop Now{" "}
          <IoIosArrowForward style={{ fontSize: "25px" }} />{" "}
        </span>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">
              <img
                style={{ marginRight: "10px" }}
                src={require("../images/contact.svg").default}
                alt="contact"
              />
              Contact Us
            </Nav.Link>
            <Nav.Link href="#">
              <img
                style={{ marginRight: "10px" }}
                src={require("../images/cart.svg").default}
                alt="cart"
              />
              Track Order
            </Nav.Link>
            <Nav.Link href="#">
              <img
                style={{ marginRight: "10px" }}
                src={require("../images/location.svg").default}
                alt="location"
              />
              Find a Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
