import React, { useEffect } from "react";

import { silderInfo } from "./Data";

import { Container, Col, Row } from "react-bootstrap";

import coderAnim2 from "../../assets/animations/coder2.json";
import HomeContent from "../../components/HomeContent/HomeContent";
import "./HomePage.css";
import Animation from "../../components/Animation";
import { HEgg, FEgg, AEgg, test } from "../../components/EasterEggs";

const HomePage = () => {
  useEffect(() => {
    document.title = "CSE - Home";
  }, []);

  document.addEventListener("keypress", function (event) {
    if (event.key === "a") {
      HEgg();
    }
    if (event.key === "f") {
      FEgg();
    }
    if (event.key === "a") {
      AEgg();
    }
    if (event.key === "x") {
      test();
    }
  });

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
