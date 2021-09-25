import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

import "./HomeContent.css";

const HomeContent = ({ content }) => {
  return (
    <div>
      <Container className="content-card">
        <Row md>
          <Col md>
            <h1 className="text-wrapper">
              Providing the best in Computer Education Since 1995.
            </h1>
            <HomeCarousel content={content} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md>
            <h1 className="text-wrapper">Watch our Testimonials</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
