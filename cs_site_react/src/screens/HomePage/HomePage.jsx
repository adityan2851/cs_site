import React from "react";

import { silderInfo } from "./Data";

import { Container, Col, Row } from "react-bootstrap";

import coderAnim2 from "../../assets/animations/coder2.json";
import HomeContent from "../../components/HomeContent/HomeContent";
import "./HomePage.css";
import Animation from "../../components/Animation";

const HomePage = () => {
  return (
    <div className="home-background">
      <br />
      <br />

      <Container>
        <Row md>
          <Col
            md
            className="left d-flex justify-content-center align-items-start flex-column"
          >
            <h1 style={{ fontWeight: "bold" }}>
              Department of Computer Science and Engineering
            </h1>
            <p>Building the Future on a Foundation of Excellence.</p>
          </Col>
          <Col md>
            <Animation
              animation={coderAnim2}
              style={{ pointerEvents: "none" }}
            />
          </Col>
        </Row>
      </Container>

      <div className="home-content-wrapper">
        <HomeContent content={silderInfo} />
      </div>
    </div>
  );
};

export default HomePage;
