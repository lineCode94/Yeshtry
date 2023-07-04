import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../node_modules/swiper/swiper-bundle.css";
import "./style.css";
import sliderImg from "../images/slider.png";
import sliderImg2 from "../images/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg";
import { Row } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

SwiperCore.use([Navigation, Pagination]);
function Slider() {
  return (
    <div className="slider">
      <h1
        style={{ color: "#542E90", fontFamily: "Montserrat", fontSize: "28px" }}
      >
        Similar Products
      </h1>
      <p
        style={{
          color: "#575756",
          fontFamily: "Montserrat ",
          fontSize: "20px",
          fontWeight: "200",
        }}
      >
        You may like these products also
      </p>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <Row>
          <SwiperSlide>
            <div className="card">
              <img src={sliderImg2} alt="Product" />
              <div className="description">Product Description</div>
              <div sliderImg2fclassName="price">$19.99</div>
              <div className="rating">
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiOutlineStar size={"25px"} />
                4.5 stars
              </div>
              <div className="footer-card">From: UK to: Egypt in 10 days</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img src={sliderImg} alt="Product" />
              <div className="description">Product Description</div>
              <div className="price">$19.99</div>
              <div className="rating">
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                4.5 stars
              </div>
              <div className="footer-card">From: UK to: Egypt in 10 days</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={sliderImg} alt="Product" />
              <div className="description">Product Description</div>
              <div className="price">$29.99</div>
              <div className="rating">
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                3.5 stars
              </div>
              <div className="footer-card">From: UK to: Egypt in 10 days</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={sliderImg} alt="Product" />
              <div className="description">Product Description</div>
              <div className="price">$39.99</div>
              <div className="rating">
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiOutlineStar size={"25px"} />
                4.0 stars
              </div>
              <div className="footer-card">From: UK to: Egypt in 10 days</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={sliderImg2} alt="Product" />
              <div className="description">Product Description</div>
              <div className="price">$49.99</div>
              <div className="rating">
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                <AiFillStar color="#FFF200" size={"25px"} />
                5.0 stars
              </div>
              <div className="footer-card-card">
                From: UK to: Egypt in 10 days
              </div>
            </div>
          </SwiperSlide>
        </Row>
      </Swiper>
    </div>
  );
}

export default Slider;
