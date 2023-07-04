import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <Container>
        <Row>
          <Col xs={3}>
            <Button
              variant="warning"
              style={{ marginLeft: "-10px", marginTop: "2px" }}
              className="btn-circle"
              onClick={handleDecrement}
            >
              <FaMinus />
            </Button>
          </Col>
          <Col
            xs={6}
            className="d-flex justify-content-center align-items-center"
          >
            <span className="count">{count}</span>
          </Col>
          <Col xs={3}>
            <Button
              style={{ marginTop: "2px" }}
              variant="warning"
              className="btn-circle"
              onClick={handleIncrement}
            >
              <FaPlus />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
