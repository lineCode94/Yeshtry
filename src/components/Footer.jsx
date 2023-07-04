import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { FaPaperPlane } from "react-icons/fa";
import "./style.css";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col style={{ borderRight: "1px solid #efe" }} md={4}>
            <h5 className="  mb-4">
              <img
                style={{ marginRight: "10px" }}
                src={require("../images/footer.svg").default}
                alt="logo"
              />
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, libero non ullamcorper tristique, dolor lorem ultricies
              ipsum, ut sollicitudin enim nisl nec quam.
            </p>
            <p>
              Ut blandit euismod sapien, ac pretium est fermentum sit amet.
              Nullam vel mauris tincidunt, varius turpis sed, rhoncus tellus.
              Mauris vel tortor eu tortor tristique ultricies.
            </p>
            <p>
              Fusce euismod euismod arcu, vel commodo nisl. Mauris ac ante
              eleifend, vestibulum magna ac, molestie enim. Nulla facilisi.
            </p>
          </Col>
          <Col md={5}>
            <h6 className=" mb-4">Subscribe to our newsletter</h6>
            <Form
              className="d-flex align-items-center"
              style={{
                width: "450px",
                height: "48px",
                position: "relative",
              }}
            >
              <Form.Control
                type="email"
                placeholder="Enter Your Mail"
                style={{
                  flex: "1",
                  borderRadius: "30px",
                  fontSize: "10px",
                  padding: "10px",
                }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#FFF200",
                  color: "#000",
                  marginLeft: "-10px",
                  position: "absolute",
                  right: "5px",
                  fontSize: "10px",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                Subscribe <FaPaperPlane />
              </Button>
            </Form>

            <ul
              style={{ borderRight: "1px solid #efe" }}
              className="list-unstyled quick-links"
            >
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Track Order</a>
              </li>
              <li>
                <a>Terms &amp; Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Sell with Us</a>
              </li>
              <li>
                <a>Shipping and Returns</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled social ">
              <li>
                <a>
                  <img
                    style={{ marginRight: "10px" }}
                    src={require("../images/facebook.svg").default}
                    alt="logo"
                  />
                  /YESHTERY
                </a>
              </li>
              <li>
                <a>
                  <img
                    style={{ marginRight: "10px" }}
                    src={require("../images/linked.svg").default}
                    alt="logo"
                  />
                  /YESHTER
                </a>
              </li>
              <li>
                <a>
                  <img
                    style={{ marginRight: "10px" }}
                    src={require("../images/insta.svg").default}
                    alt="logo"
                  />
                  /YESHTER
                </a>
              </li>
              <li>
                <a>
                  <img
                    style={{ marginRight: "10px" }}
                    src={require("../images/tweeter.svg").default}
                    alt="logo"
                  />
                  /YESHTER
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p>&copy; 2022 Brand Name. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <p className="float-md-end">
              Designed and Developed by <a>zeko</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
