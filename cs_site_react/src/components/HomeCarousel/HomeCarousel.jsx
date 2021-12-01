import React from "react";

import { Carousel, Container } from "react-bootstrap";

import "./HomeCarousel.css";

const HomeCarousel = ({ content }) => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <div className="carousel-container ">
          <Carousel
            className="carousel-dark"
            keyboard="true"
            slide="true"
            touch="true"
            nextLabel=""
            prevLabel=""
            pause="hover"
            wrap="true"
          >
            {content.map((obj, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "20px" }}
                  src={obj["imageURL"]}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default HomeCarousel;
