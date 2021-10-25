import React from "react";

import { silderInfo } from "./Data";

import { Container, Col, Row } from "react-bootstrap";
import Lottie from "react-lottie";

import coderAnim2 from "../../assets/animations/coder2.json";
import HomeContent from "../../components/HomeContent/HomeContent";
import "./HomePage.css";

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
            <Lottie
              className="lottie-animation"
              style={{ pointerEvents: "none" }}
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: coderAnim2,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            ></Lottie>
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
