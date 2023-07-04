import React from "react";
import { Offcanvas, Row, Button, Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItmes from "../services/data/storeItems"; // dummy data
import { Stack } from "react-bootstrap";
import "./style.css";
const ShoppingCart = ({ isOpen }) => {
  const { cartItems, toggleCart, CloseCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={CloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title
          style={{ margin: "10px auto", color: "#542E90", fontSize: "28px" }}
        >
          My Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: "900",
            }}
          >
            Cart Summary
          </h3>
          {storeItmes.map((item) => (
            <Stack direction="vertical" gap={3}>
              <div
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
                className="d-flex   "
                key={item.id}
              >
                <img
                  src={item.imgUrl}
                  style={{
                    width: "130px",
                    height: "104px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                  alt="cart item"
                />
                <div>
                  <p style={{ fontFamily: "Montserrat", fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span
                    style={{
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      display: "block",
                      marginTop: "-13px",
                      marginBottom: "10px",
                    }}
                  >
                    Quntity:{item.quantity}
                  </span>
                  <div className="d-flex p-0 ">
                    <p
                      style={{
                        color: "#542E90",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.price}LE
                    </p>
                    <Button className="btn-remove">Remove</Button>
                  </div>
                </div>
                {/* <div style={{ width: "100px", height: "150px" }}></div> */}
              </div>
              <Row>
                <h3 className="total">Total: 500 LE</h3>
                <Col xs={12} md={6}>
                  <Button
                    variant="warning"
                    className="btn-review"
                    style={{
                      backgroundColor: "#FFF200",
                      color: "#000",
                      width: "100%",
                      height: "40px",
                    }}
                  >
                    Review Cart
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <Button
                    className="btn-complete"
                    // variant="primary"
                    style={{
                      height: "40px",
                      padding: "4px!important",
                      backgroundColor: "#542E90",
                    }}
                  >
                    Complete Checkout
                  </Button>
                </Col>
              </Row>
              {/* <p>{item.price}LE</p> */}
            </Stack>
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
