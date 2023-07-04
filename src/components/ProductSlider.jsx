import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import image3 from "../images/waldemar-NPPNHZK1U0s-unsplash.jpg";
import image4 from "../images/lena-kudryavtseva-itUsEU7GgDU-unsplash.jpg";
import image2 from "../images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg";
import image5 from "../images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg";
import image1 from "../images/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg";
import ProductDescription from "./ProductDescription.jsx";
import "./style.css";
const ProductSlider = () => {
  const [mainImage, setMainImage] = useState(image1);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={7} className="mb-3 mb-md-0">
          <img
            src={mainImage}
            alt="Product"
            style={{
              width: "568px",
              height: "568px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
          <Slider {...settings} className="slider-cart">
            <div>
              <img
                src={image1}
                alt="Product"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                }}
                onClick={() => handleImageClick(image1)}
              />
            </div>
            <div>
              <img
                src={image2}
                alt="Product"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                }}
                onClick={() => handleImageClick(image2)}
              />
            </div>
            <div>
              <img
                src={image3}
                alt="Product"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                }}
                onClick={() => handleImageClick(image3)}
              />
            </div>
            <div>
              <img
                src={image4}
                alt="Product"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                }}
                onClick={() => handleImageClick(image4)}
              />
            </div>
            <div>
              <img
                src={image5}
                alt="Product"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                }}
                onClick={() => handleImageClick(image5)}
              />
            </div>
          </Slider>
        </Col>
        <Col md={5}>
          <ProductDescription />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSlider;
