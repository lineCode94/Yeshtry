import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import logo from "../images/adidas-logo.svg";
import Counter from "./Counter";
// import { useShoppingCart } from "../context/ShoppingCartContext";

function ProductDescription() {
  // const {} = useShoppingCart();
  // const [quantity, setQuantity] = useState(1);
  // const handleQuantityChange = (value) => {
  //   setQuantity(quantity + value);
  // };

  return (
    <div className="product-description">
      <Container>
        <Row xs={12} md={8}>
          <h2>
            {" "}
            <img
              className="adidas-logo"
              src={logo}
              alt="Adidas logo"
              height="30"
            />
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            natus.
          </p>
          <div className="d-flex align-items-center">
            <div className="rating mr-2">
              <span role="img" aria-label="star">
                <AiFillStar color="#FFF200" size={"25px"} />
              </span>
              <span role="img" aria-label="star">
                <AiFillStar color="#FFF200" size={"25px"} />
              </span>
              <span role="img" aria-label="star">
                <AiFillStar color="#FFF200" size={"25px"} />
              </span>
              <span role="img" aria-label="star">
                <AiFillStar color="#FFF200" size={"25px"} />
              </span>
              <span role="img" aria-label="star">
                <AiOutlineStar size={"25px"} />
              </span>
              <span>
                <strong>4.9 of 5</strong>
                {"    "}
                <strong className="rates">22 Rates</strong>
              </span>
            </div>
          </div>
          <div className="price">
            <strong style={{ color: "#542E90", fontSize: "25px" }}>
              {" "}
              99.999 LE
            </strong>
          </div>
        </Row>
        <h3 className="mt-2">Select Size</h3>
        <Row xs={12} md={4}>
          <div className="size-buttons d-flex">
            <Button variant="outline-primary" className="mr-2">
              S
            </Button>
            <Button variant="outline-primary" className="mr-2">
              M
            </Button>
            <Button variant="outline-primary" className="mr-2">
              L
            </Button>
            <Button variant="outline-primary" className="mr-2">
              XL
            </Button>
            <Button variant="outline-primary" className="mr-2">
              XXL
            </Button>
          </div>
        </Row>

        <Row className="my-4">
          <Col xs={12} md={8}>
            <h3> Color</h3>
            <div className="d-flex align-items-center">
              <div
                className="color-circle mr-2"
                style={{ backgroundColor: "#F44336" }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: "#2196F3" }}
              ></div>
            </div>
          </Col>
        </Row>
        <h3>Quantity</h3>
        <Counter />

        <Row>
          <Col xs={12} md={8}>
            <Button
              // onClick={() => increaseCartQuantity()}
              variant="primary"
              className="btn-add-to-cart"
            >
              Add to Cart
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <Button
              variant="warning"
              className="btn-pickup"
              style={{ backgroundColor: "#FFF200", color: "#000" }}
            >
              Pickup from Store
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDescription;
